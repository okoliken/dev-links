import { Client, Account, ID } from 'appwrite'

const client = new Client()
const account = new Account(client)
client.setEndpoint(import.meta.env.VITE_APP_ENDPOINT).setProject(import.meta.env.VITE_APP_PROJECT)

export { account, client, ID }
