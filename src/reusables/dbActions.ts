import { Server } from '../utils/config'
import {  ID, database,  Query, storage, account as DevAuth } from '../server'
import { type ProgressFinisher, useProgress } from '@marcoschulte/vue3-progress'

const progresses = [] as ProgressFinisher[]

export interface Link {
  link: string
  title: string
  color: string
  id: string
  icon: string
}



export const useDbActions = {
  createLink: (collectionId: string, data: Link, userId: string) => {
    return database.createDocument(Server.database, collectionId, ID.unique(), data)
  },
  deleteLink: (collectionId: string, documentId: string) => {
    return database.deleteDocument(Server.database, collectionId, documentId)
  },
  getLinks: (collectionId: string) => {
    return database.listDocuments(Server.database, collectionId, [
      Query.select(['title', 'icon', 'color', 'link', 'id'])
    ])
  },

  updateLinks: () => {
    // return database.updateDocument()
  },

  uploader: (img:File) => {
    return storage.createFile(Server.bucket, ID.unique(), img)
  },
  getFiles: () => {
    return storage.listFiles(Server.bucket)
  },
  updateInfo: async (name: string) => {
    await DevAuth.updateName(name)
    // await DevAuth.updateEmail()
  }
}

// things left in project
// get links createdby specific user - DONE
// prefill form details after login ~ DONE
// profile picture upload (https://stackoverflow.com/questions/74120386/how-to-upload-and-access-a-photo-through-appwrite) (https://appwrite.io/docs/products/storage) & user info storage (https://appwrite.io/docs/references/cloud/client-web/account)
// share link page
