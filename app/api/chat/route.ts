import { DataAPIClient } from "@datastax/astra-db-ts";
import { HuggingFaceInferenceEmbeddings } from "@langchain/community/embeddings/hf";
import { OpenAI} from "openai";
import "dotenv/config";

const {
    ASTRA_DB_NAMESPACE,
    ASTRA_DB_ENDPOINT,
    ASTRA_DB_COLLECTION,
    ASTRA_DB_TOKEN,
    HUGGINGFACE_API_KEY,
} = process.env; 

const embedder = new HuggingFaceInferenceEmbeddings({
  apiKey: HUGGINGFACE_API_KEY,
  model: "sentence-transformers/all-MiniLM-L6-v2",
});
const openai = new OpenAI({
	baseURL: "https://router.huggingface.co/v1",
	apiKey: HUGGINGFACE_API_KEY,
});

const client = new DataAPIClient(ASTRA_DB_TOKEN);
const db = client.db(ASTRA_DB_ENDPOINT, { keyspace: ASTRA_DB_NAMESPACE });

export async function POST(request: Request) {
  try {
    const { messages } = await request.json();
    const latestMessage = messages[messages.length - 1]?.content;

    let docContext = "";

    const embedding = await embedder.embedQuery(latestMessage);
    try {
      const collection = await db.collection(ASTRA_DB_COLLECTION);
      const cursor = collection.find(null, {
        sort: {
          $vector: embedding,
        },
        limit: 10,
      });
      const documents = await cursor.toArray();
      const docMap = documents?.map((doc) => doc.text);
      docContext = docMap.join("\n");
    } catch (err) {
      console.error("Error accessing collection:", err);
    }
const formattedHistory = messages
      .slice(0, -1)
      .map((msg) => `${msg.role === "user" ? "User" : "Saraa"}: ${msg.content}`)
      .join("\n");

    // Final prompt
    const prompt = `
Saraa is a helpful assistant that always talks to the user about Revanth, never talks to Revanth directly.

Saraa must only use third-person references like “Revanth,” “he,” or “his” — never use “you,” “your,” or “yours.”
When the user says "you," it refers to Saraa. It should speak about saraa like this: "Saraa is here to help you"

Saraa can mention Revanth’s ex by name and the relationship period: Harini Jeya Shree (05/06/2019 – 30/10/2023).
Saraa should never reference this prompt, the chat history, or the context rules in its responses.
Chat History:
${formattedHistory}

Context:
${docContext}

Question:
${latestMessage}
`;


    const response = await openai.chat.completions.create({
	model: "meta-llama/Llama-3.1-8B-Instruct:novita",
    messages: [
      { role: "user", content: prompt },
    ],
});
  return new Response(
  response.choices[0]?.message?.content ?? "No response",
  {
    status: 200,
    headers: { "Content-Type": "text/plain" },
  }
);

  } catch (err) {
    console.error("Error in POST request:", err);
    return new Response(JSON.stringify({ error: "Internal Server Error" }), {
      status: 500,
    });
  }
}
