import { Client, Account, ID, Databases, Permission, Role, Query,Storage,  } from 'appwrite'



const client = new Client()
const account = new Account(client)
client.setEndpoint(import.meta.env.VITE_APP_ENDPOINT).setProject(import.meta.env.VITE_APP_PROJECT)


const database = new Databases(client);
const storage = new Storage(client)


export { account, client, ID, database, Permission, Role, Query, storage }
// sweet 😁