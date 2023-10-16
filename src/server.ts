import { Client, Account, ID, Databases, Permission, Role, Query,  } from 'appwrite'
import { Server } from './utils/config'


const client = new Client()
const account = new Account(client)
client.setEndpoint(import.meta.env.VITE_APP_ENDPOINT).setProject(import.meta.env.VITE_APP_PROJECT)


const database = new Databases(client);
const permission = new Permission()


export { account, client, ID, database, Permission, Role, Query }
// sweet 😁