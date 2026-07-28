"use client";

import { useState, useEffect, useCallback } from "react";
import { RefreshCw, CheckCircle2, ShieldAlert, Lock } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

interface CaptchaWidgetProps {
  onVerify: (isValid: boolean) => void;
  className?: string;
}

export function CaptchaWidget({ onVerify, className = "" }: CaptchaWidgetProps) {
  const { lang } = useLanguage();
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [userAnswer, setUserAnswer] = useState("");
  const [isVerified, setIsVerified] = useState(false);
  const [isTouched, setIsTouched] = useState(false);
  const [honeypot, setHoneypot] = useState("");

  const generateCaptcha = useCallback(() => {
    const n1 = Math.floor(Math.random() * 12) + 1;
    const n2 = Math.floor(Math.random() * 12) + 1;
    setNum1(n1);
    setNum2(n2);
    setUserAnswer("");
    setIsVerified(false);
    setIsTouched(false);
    onVerify(false);
  }, [onVerify]);

  useEffect(() => {
    generateCaptcha();
  }, [generateCaptcha]);

  const handleAnswerChange = (val: string) => {
    setUserAnswer(val);
    setIsTouched(true);
    const expected = num1 + num2;
    const isCorrect = parseInt(val.trim(), 10) === expected && honeypot === "";
    setIsVerified(isCorrect);
    onVerify(isCorrect);
  };

  const handleHoneypotChange = (val: string) => {
    setHoneypot(val);
    setIsVerified(false);
    onVerify(false);
  };

  const expected = num1 + num2;
  const isWrong = isTouched && userAnswer.trim() !== "" && parseInt(userAnswer.trim(), 10) !== expected;

  return (
    <div className={`p-4 rounded-xl border transition-all ${
      isVerified 
        ? "bg-green-50/80 border-green-200" 
        : isWrong 
        ? "bg-red-50/80 border-red-200" 
        : "bg-slate-50 border-slate-200"
    } ${className}`}>
      {/* Honeypot field (hidden from real users, traps bots) */}
      <input
        type="text"
        name="website_url_honeypot"
        value={honeypot}
        onChange={(e) => handleHoneypotChange(e.target.value)}
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />

      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <div className="p-2 rounded-lg bg-white border border-slate-200 shadow-sm flex items-center gap-2 font-mono text-base font-bold text-slate-800 tracking-wider select-none">
            <Lock className="w-4 h-4 text-primary" />
            <span>{num1} + {num2} = ?</span>
          </div>

          <button
            type="button"
            onClick={generateCaptcha}
            title={lang === "es" ? "Generar nuevo código" : "Generate new code"}
            className="p-2 rounded-lg bg-white hover:bg-slate-100 text-slate-500 border border-slate-200 shadow-sm transition-colors"
          >
            <RefreshCw className="w-4 h-4" />
          </button>
        </div>

        <div className="w-full sm:w-36 relative">
          <input
            type="number"
            value={userAnswer}
            onChange={(e) => handleAnswerChange(e.target.value)}
            placeholder={lang === "es" ? "Resultado" : "Answer"}
            className={`w-full px-3 py-2 rounded-lg border text-sm font-semibold focus:outline-none transition-colors ${
              isVerified
                ? "border-green-500 bg-white text-green-700 focus:ring-2 focus:ring-green-200"
                : isWrong
                ? "border-red-400 bg-white text-red-700 focus:ring-2 focus:ring-red-200"
                : "border-slate-300 bg-white text-slate-900 focus:ring-2 focus:ring-primary/20 focus:border-primary"
            }`}
          />
          {isVerified && (
            <CheckCircle2 className="w-4 h-4 text-green-600 absolute right-3 top-2.5" />
          )}
        </div>
      </div>

      {/* Validation Message */}
      <div className="mt-2 text-xs flex items-center gap-1.5">
        {isVerified ? (
          <span className="text-green-700 font-medium flex items-center gap-1">
            <CheckCircle2 className="w-3.5 h-3.5" />
            {lang === "es" ? "Verificación anti-spam completada" : "Anti-spam verification passed"}
          </span>
        ) : isWrong ? (
          <span className="text-red-600 font-medium flex items-center gap-1">
            <ShieldAlert className="w-3.5 h-3.5" />
            {lang === "es" ? "Respuesta incorrecta, intenta de nuevo" : "Incorrect answer, please try again"}
          </span>
        ) : (
          <span className="text-slate-500">
            {lang === "es" ? "Resuelve la suma para enviar el formulario (Seguridad Anti-Spam)" : "Solve the math puzzle to submit (Anti-Spam Security)"}
          </span>
        )}
      </div>
    </div>
  );
}
