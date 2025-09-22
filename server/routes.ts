import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertReviewSchema, insertCollaborationRequestSchema } from "@shared/schema";
import { ZodError } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // API Routes for reviews
  app.post("/api/reviews", async (req, res) => {
    try {
      const reviewData = insertReviewSchema.parse(req.body);
      const review = await storage.createReview(reviewData);
      res.status(201).json(review);
    } catch (error) {
      console.error("Error creating review:", error);
      if (error instanceof ZodError) {
        res.status(400).json({ 
          error: "Invalid review data", 
          details: error.errors.map(e => ({ field: e.path.join('.'), message: e.message }))
        });
      } else {
        res.status(500).json({ error: "Failed to create review" });
      }
    }
  });

  app.get("/api/reviews/:challengeType", async (req, res) => {
    try {
      const { challengeType } = req.params;
      
      // Validate challenge type
      if (!['earth', 'water', 'air'].includes(challengeType)) {
        return res.status(400).json({ error: "Invalid challenge type" });
      }
      
      const reviews = await storage.getReviewsByChallenge(challengeType);
      res.json(reviews);
    } catch (error) {
      console.error("Error fetching reviews:", error);
      res.status(500).json({ error: "Failed to fetch reviews" });
    }
  });

  // Get all reviews
  app.get("/api/reviews", async (req, res) => {
    try {
      const allReviews = await storage.getAllReviews();
      res.json(allReviews);
    } catch (error) {
      console.error("Error fetching all reviews:", error);
      res.status(500).json({ error: "Failed to fetch reviews" });
    }
  });

  // API Routes for collaboration requests
  app.post("/api/collaboration", async (req, res) => {
    try {
      const requestData = insertCollaborationRequestSchema.parse(req.body);
      const collaborationRequest = await storage.createCollaborationRequest(requestData);
      res.status(201).json(collaborationRequest);
    } catch (error) {
      console.error("Error creating collaboration request:", error);
      if (error instanceof ZodError) {
        res.status(400).json({ 
          error: "Invalid request data", 
          details: error.errors.map(e => ({ field: e.path.join('.'), message: e.message }))
        });
      } else {
        res.status(500).json({ error: "Failed to create collaboration request" });
      }
    }
  });

  // Get all collaboration requests (for admin purposes)
  app.get("/api/collaboration", async (req, res) => {
    try {
      const requests = await storage.getAllCollaborationRequests();
      res.json(requests);
    } catch (error) {
      console.error("Error fetching collaboration requests:", error);
      res.status(500).json({ error: "Failed to fetch collaboration requests" });
    }
  });

  // Health check endpoint
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok", timestamp: new Date().toISOString() });
  });

  const httpServer = createServer(app);

  return httpServer;
}
