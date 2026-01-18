export type Question = {
  id: string;
  text: { en: string; es: string };
  type: "text" | "email" | "phone" | "select" | "end";
  options?: { value: string; label: { en: string; es: string } }[];
  next?: string; // ID of next question
};

export const chatFlow: Question[] = [
  {
    id: "start",
    text: { 
        en: "Hello! I'm your Rosales Insurance assistant. Let's get you a personalized quote. What is your first name?", 
        es: "¡Hola! Soy tu asistente de Rosales Insurance. Vamos a cotizar tu seguro. ¿Cuál es tu nombre?" 
    },
    type: "text",
    next: "lastName"
  },
  {
    id: "lastName",
    text: { en: "Nice to meet you! What is your last name?", es: "¡Gusto en conocerte! ¿Cuál es tu apellido?" },
    type: "text",
    next: "service"
  },
  {
    id: "service",
    text: { en: "What type of insurance are you looking for today?", es: "¿Qué tipo de seguro estás buscando hoy?" },
    type: "select",
    options: [
        { value: "auto", label: { en: "Auto Insurance", es: "Seguro de Auto" } },
        { value: "home", label: { en: "Home Insurance", es: "Seguro de Hogar" } },
        { value: "business", label: { en: "Business Insurance", es: "Seguro de Negocio" } },
        { value: "life", label: { en: "Life Insurance", es: "Seguro de Vida" } },
        { value: "general", label: { en: "General Liability", es: "Responsabilidad General" } },
        { value: "umbrella", label: { en: "Umbrella Policy", es: "Póliza Paraguas" } },
        { value: "other", label: { en: "Other", es: "Otro" } },
    ],
    next: "email"
  },
  {
    id: "email",
    text: { en: "Great choice. Where should we send your quote? (Email)", es: "Excelente elección. ¿A dónde deberíamos enviar tu cotización? (Correo)" },
    type: "email",
    next: "phone"
  },
  {
    id: "phone",
    text: { en: "And what is the best phone number to reach you?", es: "¿Y cuál es el mejor número de teléfono para contactarte?" },
    type: "phone",
    next: "message"
  },
  {
      id: "message",
      text: { en: "Anything else you'd like us to know?", es: "¿Algo más que debamos saber?" },
      type: "text",
      next: "finish"
  },
  {
    id: "finish",
    text: { 
        en: "Perfect! I've gathered all your details. Sending them to our team now...", 
        es: "¡Perfecto! Tengo todos tus detalles. Enviándolos a nuestro equipo ahora..." 
    },
    type: "end"
  }
];
