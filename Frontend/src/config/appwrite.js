import { Client, Account, Databases, ID } from "appwrite";

const client = new Client()
  .setProject(import.meta.env.VITE_APPWRITE_PROJECT_ID)
  .setEndpoint(import.meta.env.VITE_APPWRITE_ENDPOINT);

export const account = new Account(client);
export const databases = new Databases(client);

export { ID };

// Database and Collection IDs - Make sure to create these in Appwrite Console
export const DATABASE_ID = import.meta.env.VITE_APPWRITE_DATABASE_ID;
export const TYPING_TESTS_COLLECTION_ID = import.meta.env.VITE_APPWRITE_TYPING_TESTS_COLLECTION_ID;
