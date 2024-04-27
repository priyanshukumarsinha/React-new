import conf from "../conf/conf";
import { Client, ID, Databases, Storage, Query } from "appwrite"; 

export class Service{
    client;
    databases;
    bucket;
    constructor(){
        this.client = new Client()
                        .setEndpoint(conf.appWriteUrl)
                        .setProject(conf.appWriteProjectId);
        this.databases = new Databases(this.client)
        this.bucket = new Storage(conf.appWriteBucketId);
    }

    async createPost(slug, {title, content, featuredImage, status, userID}){
        try {
            return await this.databases.createDocument(conf.appWriteDatabaseId, conf.appWriteCollectionId, slug, {
                title,
                content,
                featuredImage,
                status,
                userID,
            });
        } catch (error) {
            console.log("Appwrite Service :: createPost :: error :: ", error);
            return false;
        }
    }

    async updatePost(slug, {title, content, featuredImage, status}){
        try {
            return await this.databases.updateDocument(conf.appWriteDatabaseId, conf.appWriteCollectionId, slug, {
                title,
                content,
                featuredImage,
                status,
            });
        } catch (error) {
            console.log("Appwrite Service :: createPost :: error :: ", error);
            return false;
        }
    }

    async deletePost(slug){
        try {
            return await this.databases.deleteDocument(conf.appWriteDatabaseId, conf.appWriteCollectionId, slug);
        } catch (error) {
            console.log("Appwrite Service :: deletePost :: error :: ", error);
            return false;
        }
    }

    async getPost(slug){
        try {
            return await this.databases.getDocument(conf.appWriteDatabaseId, conf.appWriteCollectionId, slug);
        } catch (error) {
            console.log("Appwrite Service :: deletePost :: error :: ", error);
            return false;
        }
    }

    async getPosts(queries = [Query.equal("status", "active")]){
        try {
            return await this.databases.listDocuments(conf.appWriteDatabaseId, conf.appWriteCollectionId,
                queries
            );
        } catch (error) {
            console.log("Appwrite Service :: deletePost :: error :: ", error);
            return false;
        }
    }


}

export const service = new Service();