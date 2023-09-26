import { Client, Account, ID } from 'appwrite';




const client = new Client();
const account = new Account(client);
client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('6511b0b49d56ea13646b');


    export  {
        account,
        client,
        ID
    }