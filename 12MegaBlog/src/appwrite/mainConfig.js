import config from "../config/config";
import { Client, Databases, Storage, Query, ID } from "appwrite";

export class Service {
  client = new Client();
  databases;
  bucket;
  constructor() {
    this.client
      .setEndpoint(config.appWriteUrl)
      .setProject(config.appWriteProjectId);

    this.databases = new Databases(this.client);
    this.bucket = new Storage(this.client);
  }

  async createPost({ Title, Content, Status, FeaturedImage, UserId, Slug }) {
    try {
      return await this.databases.createDocument(
        config.appWriteUrl,
        config.appWriteCollectionId,
        Slug,
        {
          Title,
          Content,
          FeaturedImage,
          Status,
          UserId,
        }
      );
    } catch (error) {
      console.log(error);
    }
  }

  async updatePost(Slug, { Title, Content, Status, FeaturedImage }) {
    try {
      await this.databases.updateDocument(
        config.appWriteDatabaseId,
        config.appWriteCollectionId,
        Slug,
        {
          Title,
          Content,
          FeaturedImage,
          Status,
        }
      );
    } catch (error) {
      console.log(error);
    }
  }

  async deletePost(Slug) {
    try {
      await this.databases.deleteDocument(
        config.appWriteDatabaseId,
        config.appWriteCollectionId,
        Slug
      );
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  }

  async getPost(Slug) {
    try {
      return await this.databases.getDocument(
        config.appWriteDatabaseId,
        config.appWriteCollectionId,
        Slug
      );
    } catch (error) {
      console.log(error);
    }
  }

  async getPosts(queries = [Query.equal("status", "active")]) {
    try {
      return await this.databases.listDocuments(
        config.appWriteDatabaseId,
        config.appWriteCollectionId,
        queries
      );
    } catch (error) {
      console.log(error);
      return false;
    }
  }

  // file uploded service

  async uploadFile(file) {
    try {
      return await this.bucket.createFile(
        config.appWriteBucketId,
        ID.unique(),
        file
      );
    } catch (error) {
      console.log(error);
      return false;
    }
  }

  async deleteFile(fileId) {
    try {
      await this.bucket.deleteFile(config.appWriteBucketId, fileId);
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  }

  async getFilePreview(fileId) {
    return this.bucket.getFilePreview(config.appWriteBucketId, fileId);
  }


  
}

const service = new Service();
export default service;
