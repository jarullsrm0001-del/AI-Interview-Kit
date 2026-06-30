import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = import.meta.env.VITE_GEMINI_API_KEY;

const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-2.5-flash",
});

export async function generateInterviewQuestions(formData) {
  const prompt = `
You are an expert interview coach.

Generate ${formData.questions} interview questions.

Job Role:
${formData.role}

Job Description:
${formData.description}

Topic to Revise:
${formData.topic}

Difficulty:
${formData.difficulty}

For each question, provide the following format:

Question:
Short Answer:
More Details:

Return the output in clear markdown.
`;

  const result = await model.generateContent(prompt);

  return result.response.text();
}