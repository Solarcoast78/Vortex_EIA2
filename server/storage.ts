import { 
  users, 
  reviews, 
  collaborationRequests,
  type User, 
  type InsertUser,
  type Review,
  type InsertReview,
  type CollaborationRequest,
  type InsertCollaborationRequest
} from "@shared/schema";
import { db } from "./db";
import { eq, desc } from "drizzle-orm";

// modify the interface with any CRUD methods
// you might need

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  createReview(review: InsertReview): Promise<Review>;
  getReviewsByChallenge(challengeType: string): Promise<Review[]>;
  getAllReviews(): Promise<Review[]>;
  createCollaborationRequest(request: InsertCollaborationRequest): Promise<CollaborationRequest>;
  getAllCollaborationRequests(): Promise<CollaborationRequest[]>;
}

export class DatabaseStorage implements IStorage {
  async getUser(id: number): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user || undefined;
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.username, username));
    return user || undefined;
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const [user] = await db
      .insert(users)
      .values(insertUser)
      .returning();
    return user;
  }

  async createReview(insertReview: InsertReview): Promise<Review> {
    const [review] = await db
      .insert(reviews)
      .values(insertReview)
      .returning();
    return review;
  }

  async getReviewsByChallenge(challengeType: string): Promise<Review[]> {
    return await db.select().from(reviews)
      .where(eq(reviews.challengeType, challengeType))
      .orderBy(desc(reviews.createdAt));
  }

  async getAllReviews(): Promise<Review[]> {
    return await db.select().from(reviews)
      .orderBy(desc(reviews.createdAt));
  }

  async createCollaborationRequest(insertRequest: InsertCollaborationRequest): Promise<CollaborationRequest> {
    const [request] = await db
      .insert(collaborationRequests)
      .values(insertRequest)
      .returning();
    return request;
  }

  async getAllCollaborationRequests(): Promise<CollaborationRequest[]> {
    return await db.select().from(collaborationRequests)
      .orderBy(desc(collaborationRequests.createdAt));
  }
}

export const storage = new DatabaseStorage();
