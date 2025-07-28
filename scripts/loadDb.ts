import {DataAPIClient} from "@datastax/astra-db-ts" 
import { HuggingFaceTransformersEmbeddings } from "@langchain/community/embeddings/huggingface_transformers";
import { PDFLoader } from "@langchain/community/document_loaders/fs/pdf";
import { RecursiveCharacterTextSplitter } from "langchain/text_splitter"; 
import path from "path";
import "dotenv/config";

const {
    ASTRA_DB_NAMESPACE,
    ASTRA_DB_ENDPOINT,
    ASTRA_DB_COLLECTION,
    ASTRA_DB_TOKEN,
} = process.env; 

const embedder = new HuggingFaceTransformersEmbeddings({
  model: "Xenova/all-MiniLM-L6-v2",
});

const pdfData = [path.resolve(__dirname,"../app/asset/about.pdf")]; 

const client = new DataAPIClient(ASTRA_DB_TOKEN);
const db = client.db(ASTRA_DB_ENDPOINT,{keyspace : ASTRA_DB_NAMESPACE}); 

const splitter = new RecursiveCharacterTextSplitter({
    chunkSize: 512,
    chunkOverlap: 100,
});

const createCollection = async () => {
    await db.createCollection(ASTRA_DB_COLLECTION, {
        vector: {
            dimension: 384,
            metric: "cosine",
        },
    });
};

const processPDF = async (pdfPath: string) => {
  const loader = new PDFLoader(pdfPath);
  const docs = await loader.load(); // Load PDF as documents
  const chunks = await splitter.splitDocuments(docs); // Split into manageable text chunks
  return chunks;
};

const loadSampleData = async () => {
    const collection = await db.collection(ASTRA_DB_COLLECTION);
    for await (const pdf_path of pdfData){
        const chunks = await processPDF(pdf_path); // Process each PDF file
        for await (const chunk of chunks) {
            const vector = await embedder.embedQuery(chunk.pageContent);
            const res = await collection.insertOne({
               $vector: vector, // Store the vector in the database
               text: chunk.pageContent, // Store the text content
            });
            console.log(res);
        }
    }
}

createCollection().then(() => loadSampleData())
