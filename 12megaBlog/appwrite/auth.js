import { Client, Account, ID } from "appwrite";
import conf from "../conf/conf";

export class AuthService {
    client;
    account;
    constructor(){
        this.client = new Client()
                        .setEndpoint(conf.appWriteUrl)
                        .setProject(conf.appWriteProjectId);
        this.account = new Account(this.client);
    }
    async createAccount({email, passwrod, name}){
        try {
            const userAccount =  await this.account.create(ID.unique(), email, passwrod, name)    
            if(userAccount){
                //if not null, call another method
                return this.login({email, passwrod});
            }
            else{
                // if null
                return userAccount;
            }
        } catch (error) {
            console.log("Appwrite Service :: createAccount :: error :: ", error);
        }
    }

    async login({email, passwrod}){
        try {
            return await this.account.createEmailSession(email, passwrod)
        } catch (error) {
            console.log("Appwrite Service :: login :: error :: ", error);
        }

        return null;
    }

    async logout(){
        try {
            return await this.account.deleteSessions();
        } catch (error) {
            console.log("Appwrite Service :: logout :: error :: ", error);
        }
    }

    async getCurrentUser(){
        try {
            return await this.account.get();
        } catch (error) {
            console.log("Appwrite Service :: getCurrentUser :: error :: ", error);
        }
    }
}


export const authService = new AuthService();