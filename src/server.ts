import { Client, Account, ID } from 'appwrite';




const client = new Client();
const account = new Account(client);
client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('6511b0b49d56ea13646b')
    // .setJWT('214553b240984ec712c10f04b0f3b0b6e0a1ce7287eb0b31c08b27575da03a4c519d1d0d39fd8406a0a0affb16a6dec3a5c247cdd4bc3d80afe5cc645ce6f067c01e5191e89c0cc579e706db817155b30ae00c2bac8f4688a666e4a00a42188a0608dfff7a39f62339b1b711113840d9e95f2e498b2bd69b217992eee909d48b')


    export  {
        account,
        client,
        ID
    }