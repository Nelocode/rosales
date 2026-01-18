"use client";

import { useState, useEffect, useRef } from "react";
import { useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "./ui/button";
import { Send, User, Bot, Check } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { chatFlow, Question } from "@/lib/chatbot-flow";
import clsx from "clsx";
import emailjs from '@emailjs/browser';

type Message = {
    sender: "bot" | "user";
    text: string;
};

export function ChatBot() {
    const { lang } = useLanguage();
    const searchParams = useSearchParams();
    const [messages, setMessages] = useState<Message[]>([]);
    const [currentQuestionId, setCurrentQuestionId] = useState<string>("start");
    const [inputValue, setInputValue] = useState("");
    const [formData, setFormData] = useState<Record<string, string>>({});
    const chatContainerRef = useRef<HTMLDivElement>(null);

    const currentQuestion = chatFlow.find(q => q.id === currentQuestionId);

    // Initial greeting - Sync with language
    useEffect(() => {
        const startNode = chatFlow.find(q => q.id === "start");
        if (startNode) {
            // If no messages, or if we are at the start and language changed (update the greeting)
            if (messages.length === 0) {
                setMessages([{ sender: "bot", text: startNode.text[lang] }]);
            } else if (messages.length === 1 && messages[0].sender === "bot" && currentQuestionId === "start") {
                 setMessages([{ sender: "bot", text: startNode.text[lang] }]);
            }
        }
    }, [lang, currentQuestionId]); // Removed messages.length to avoid loops, explicit logic handles it

    // Better Scroll Logic (Contained)
    useEffect(() => {
        if (chatContainerRef.current) {
            const { scrollHeight, clientHeight } = chatContainerRef.current;
            chatContainerRef.current.scrollTo({
                top: scrollHeight - clientHeight,
                behavior: "smooth"
            });
        }
    }, [messages]);

    const isGreeting = (text: string) => {
        const lower = text.toLowerCase().trim();
        const greetings = ["hola", "hello", "hi", "buenos dias", "good morning", "hey"];
        return greetings.some(g => lower === g || lower.startsWith(g + " "));
    };

    // E-mail Sending Logic
    const sendEmail = (data: Record<string, string>, currentMessages: Message[]) => {
        // Format transcript
        const transcript = currentMessages.map(m => `[${m.sender.toUpperCase()}]: ${m.text}`).join('\n\n');
        
        const templateParams = {
            to_email: "nelsondcarvajal@gmail.com", // Recipient
            from_name: "Rosales Assistant",
            user_name: data['start'] || data['firstName'] || "Usuario",
            user_email: data['email'] || "N/A",
            user_phone: data['phone'] || "N/A", 
            message: transcript,
            ...data
        };

        // NOTE: Replace these with your actual EmailJS Service/Template/Public Key
        // Sign up at https://www.emailjs.com/ to get them.
        const SERVICE_ID = 'service_050zthq'; 
        const TEMPLATE_ID = 'template_h1jluks'; 
        const PUBLIC_KEY = 'XPxvngYElA1lEpJQ7';

        emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                 setMessages(prev => [...prev, { 
                     sender: "bot", 
                     text: lang === "en" 
                        ? "Great! We've received your info and sent a copy to our team." 
                        : "¡Excelente! Hemos recibido tu información y enviado una copia a nuestro equipo."
                 }]);
            }, (err) => {
                console.log('FAILED...', err);
                 setMessages(prev => [...prev, { 
                     sender: "bot", 
                     text: lang === "en" 
                        ? "Oops! We couldn't send the email automatically. Please call us at 678-373-1310."
                        : "¡Ups! No pudimos enviar el correo automáticamente. Por favor llámanos al 678-373-1310."
                 }]);
            });
    };

    const handleAnswer = (answer: string, valueToStore?: string) => {
        // 1. Add User Message
        const userMsg: Message = { sender: "user", text: answer };
        const updatedMessages = [...messages, userMsg];
        setMessages(updatedMessages);

        // SPECIAL LOGIC: Check for greeting at 'start'
        if (currentQuestionId === "start" && isGreeting(answer)) {
            const isSpanish = answer.toLowerCase().includes("hola") || answer.toLowerCase().includes("buenos");
            
            setTimeout(() => {
                 setMessages(prev => [...prev, { 
                     sender: "bot", 
                     text: isSpanish || lang === 'es' 
                        ? "¡Hola! Para poder ayudarte mejor, ¿me podrías decir tu nombre?" 
                        : "Hello! To better assist you, could you please tell me your first name?" 
                 }]);
            }, 600);
            return;
        }

        // 2. Store Data
        const updatedFormData = { ...formData, [currentQuestionId]: valueToStore || answer };
        setFormData(updatedFormData);

        // 3. Find Next Question
        if (currentQuestion?.next) {
            const nextQ = chatFlow.find(q => q.id === currentQuestion.next);
            if (nextQ) {
                setTimeout(() => {
                    setMessages(prev => [...prev, { sender: "bot", text: nextQ.text[lang] }]);
                    setCurrentQuestionId(nextQ.id);
                }, 600);
            }
        } else if (currentQuestion?.type === "end") {
            // Initiate Email Send
            setTimeout(() => {
                 setMessages(prev => [...prev, { 
                     sender: "bot", 
                     text: lang === "en" ? "Sending your details..." : "Enviando tus detalles..." 
                 }]);
                 sendEmail(updatedFormData, updatedMessages);
            }, 1000);
        }
    };

    const handleInputSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!inputValue.trim()) return;
        handleAnswer(inputValue);
        setInputValue("");
    };

    if (!currentQuestion) return null;

    return (
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col h-[600px] border border-slate-200">
            {/* Header */}
            <div className="bg-primary p-4 flex items-center gap-3 shadow-md z-10">
                <div className="bg-white/20 p-2 rounded-full">
                    <Bot className="text-white w-6 h-6" />
                </div>
                <div>
                    <h3 className="text-white font-bold font-heading">Rosales Assistant</h3>
                    <p className="text-primary-foreground/80 text-xs flex items-center gap-1">
                        <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"/> 
                        {lang === "en" ? "Online" : "En línea"}
                    </p>
                </div>
            </div>

            {/* Chat Area */}
            <div ref={chatContainerRef} className="flex-1 overflow-y-auto p-6 space-y-4 bg-slate-50">
                {messages.map((msg, idx) => (
                    <motion.div 
                        key={idx}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className={clsx(
                            "flex mb-4",
                            msg.sender === "user" ? "justify-end" : "justify-start"
                        )}
                    >
                        <div className={clsx(
                            "max-w-[80%] p-4 rounded-2xl text-sm md:text-base shadow-sm",
                            msg.sender === "user" 
                                ? "bg-secondary text-white rounded-br-none" 
                                : "bg-white text-slate-800 border border-slate-200 rounded-bl-none"
                        )}>
                            {msg.text}
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Input Area */}
            <div className="p-4 bg-white border-t border-slate-100">
                {currentQuestion.type === "select" ? (
                    <div className="grid grid-cols-2 gap-2">
                        {currentQuestion.options?.map((opt) => (
                           <button
                                key={opt.value}
                                onClick={() => handleAnswer(opt.label[lang], opt.value)}
                                className="p-3 bg-slate-100 hover:bg-primary hover:text-white rounded-xl text-sm font-semibold transition-all text-slate-700 min-h-[50px]"
                           >
                               {opt.label[lang]}
                           </button>
                        ))}
                    </div>
                ) : currentQuestion.type === "end" ? (
                    <div className="text-center text-primary font-bold p-4 flex flex-col items-center">
                        <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-2">
                            <Check className="w-6 h-6 text-green-600" />
                        </div>
                        {lang === "en" ? "Thank you! We'll be in touch." : "¡Gracias! Estaremos en contacto."}
                    </div>
                ) : (
                    <form onSubmit={handleInputSubmit} className="flex gap-2">
                        <input
                            type={currentQuestion.type === "phone" ? "tel" : currentQuestion.type === "email" ? "email" : "text"}
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            placeholder={lang === "en" ? "Type your answer..." : "Escribe tu respuesta..."}
                            className="flex-1 px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary bg-slate-50 text-slate-900"
                        />
                         <Button type="submit" className="h-[50px] w-[50px] rounded-xl bg-primary hover:bg-primary/90 text-white shadow-lg p-0 flex items-center justify-center">
                            <Send className="w-5 h-5" />
                        </Button>
                    </form>
                )}
            </div>
        </div>
    );
}
