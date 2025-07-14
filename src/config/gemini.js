// To run this code you need to install the following dependencies:
// npm install @google/genai mime
// npm install -D @types/node

import {
  GoogleGenAI,
} from '@google/genai';

async function main(prompt) {
  const ai = new GoogleGenAI({
    apiKey: 'Api_key_here',
  });
  const config = {
    thinkingConfig: {
      thinkingBudget: -1,
    },
    responseMimeType: 'text/plain',
  };
  const model = 'gemini-2.5-pro';
  const contents = [
    {
      role: 'user',
      parts: [
        {
          text: prompt,
        },
      ],
    },
  ];
 const result = await ai.models.generateContent({
    model,
    config,
    contents,
  });

  return result.text;
}

export default main;
