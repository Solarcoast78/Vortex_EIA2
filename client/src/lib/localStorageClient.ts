// Client for local storage operations that mimics the API structure

import { 
  getReviews, 
  addReview, 
  addDonationRequest, 
  addCollaborationRequest,
  Review,
  DonationRequest,
  CollaborationRequest
} from './localStorage';

export const localStorageClient = {
  // Reviews
  getReviews: async (challengeType: string): Promise<Review[]> => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 300));
    return getReviews(challengeType);
  },

  addReview: async (reviewData: {
    challengeType: string;
    userName: string;
    rating: number;
    comment: string;
  }): Promise<Review> => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 500));
    return addReview(reviewData);
  },

  // Donations
  addDonation: async (donationData: {
    name: string;
    email: string;
    message: string;
  }): Promise<DonationRequest> => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 500));
    return addDonationRequest(donationData);
  },

  // Collaborations
  addCollaboration: async (collaborationData: {
    name: string;
    email: string;
    message: string;
  }): Promise<CollaborationRequest> => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 500));
    return addCollaborationRequest(collaborationData);
  }
};