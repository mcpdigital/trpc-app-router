// PAY ATTENTION SINCE THIS CODE IS THE ONLY WAY TO GET A RESPONSE FROM OPENAI V4.0
// IT CAME FROM THE SITE: https://innotek.dev/blog/nextjs-openai API /api/send-prompt
// filename: route.ts usado pelo ChatStart

import { NextResponse } from "next/server";
import OpenAI from "openai";
// import Tiktoken from "tiktoken"; // import the tokenizer library

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: Request) {
  try {
    const body: { prompt: string } = await req.json();
    const prompt = body.prompt;

    // Set the max_tokens value to limit the consumption
    const max_tokens = 100; // adjust this value as needed\

    // Ask OpenAI for a streaming completion given the prompt
    const params: OpenAI.Chat.ChatCompletionCreateParams = {
      messages: [{ role: "user", content: prompt }],
      model: "gpt-4o-mini",
      stream: false,
      max_tokens: max_tokens,
    };
    const chatCompletion: OpenAI.Chat.ChatCompletion =
      await openai.chat.completions.create(params);

    const response = {
      response: chatCompletion?.choices?.[0]?.message.content?.trim(),
    };
    return NextResponse.json(response);
  } catch (error) {
    return NextResponse.error();
  }
}
