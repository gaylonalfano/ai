import { mistral } from '@ai-sdk/mistral';
import { experimental_streamText } from 'ai';
import dotenv from 'dotenv';

dotenv.config();

async function main() {
  const result = await experimental_streamText({
    model: mistral('open-mistral-7b'),
    maxTokens: 512,
    temperature: 0.3,
    maxRetries: 5,
    prompt: 'Invent a new holiday and describe its traditions.',
  });

  for await (const textPart of result.textStream) {
    process.stdout.write(textPart);
  }
}

main().catch(console.error);
