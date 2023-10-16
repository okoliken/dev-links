/// <reference types="vite/client" />


    export interface ImportMetaEnvCustom  {
            readonly VITE_APP_ENDPOINT: string,
            readonly VITE_APP_ENDPOINT: string,
            readonly VITE_APP_DATABASE_ID: string,
            readonly VITE_APP_COLLECTION_ID: string,
        }

     export   interface ImportMeta extends import('vite/types/importMeta').ImportMeta {
            // additionally pull in the original values from vite, so you won't need <reference types="vite/client" /> any longer.
            readonly env: ImportMetaEnvCustom & import('vite/types/importMeta').ImportMetaEnv
        }