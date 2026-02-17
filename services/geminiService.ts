
import { GoogleGenAI } from "@google/genai";
import { UserProfile } from "../types";

export const getMetamorphicAdvice = async (user: UserProfile) => {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || "" });
    const prompt = `Atue como um coach de elite. Com base nos dados do atleta:
    Nome: ${user.name}
    Objetivo: ${user.goal}
    Nível: ${user.level}
    Peso: ${user.weight}kg
    Gere um conselho agressivo e motivacional de 2 frases sobre por que ele deve dominar o treino de hoje. Use o estilo "Metamórfico Fintista".`;

    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
    });

    return response.text || "O CORPO É O REFLEXO DA SUA DISCIPLINA. NÃO PARE AGORA.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "A DOR É TEMPORÁRIA, O LEGADO É ETERNO. VÁ PARA O TREINO!";
  }
};
