// Local storage utilities for database-free operation

export interface Review {
  id: string;
  userName: string;
  rating: number;
  comment: string;
  challengeType: string;
  createdAt: string;
}

export interface DonationRequest {
  id: string;
  name: string;
  email: string;
  message: string;
  createdAt: string;
}

export interface CollaborationRequest {
  id: string;
  name: string;
  email: string;
  message: string;
  createdAt: string;
}

// Generate unique IDs
const generateId = () => `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;

// Reviews
export const getReviews = (challengeType: string): Review[] => {
  const reviews = localStorage.getItem('reviews');
  const allReviews: Review[] = reviews ? JSON.parse(reviews) : [];
  return allReviews.filter(review => review.challengeType === challengeType);
};

export const addReview = (review: Omit<Review, 'id' | 'createdAt'>): Review => {
  const reviews = localStorage.getItem('reviews');
  const allReviews: Review[] = reviews ? JSON.parse(reviews) : [];
  
  const newReview: Review = {
    ...review,
    id: generateId(),
    createdAt: new Date().toISOString()
  };
  
  allReviews.push(newReview);
  localStorage.setItem('reviews', JSON.stringify(allReviews));
  
  return newReview;
};

// Donations
export const addDonationRequest = (request: Omit<DonationRequest, 'id' | 'createdAt'>): DonationRequest => {
  const donations = localStorage.getItem('donations');
  const allDonations: DonationRequest[] = donations ? JSON.parse(donations) : [];
  
  const newDonation: DonationRequest = {
    ...request,
    id: generateId(),
    createdAt: new Date().toISOString()
  };
  
  allDonations.push(newDonation);
  localStorage.setItem('donations', JSON.stringify(allDonations));
  
  return newDonation;
};

// Collaborations
export const addCollaborationRequest = (request: Omit<CollaborationRequest, 'id' | 'createdAt'>): CollaborationRequest => {
  const collaborations = localStorage.getItem('collaborations');
  const allCollaborations: CollaborationRequest[] = collaborations ? JSON.parse(collaborations) : [];
  
  const newCollaboration: CollaborationRequest = {
    ...request,
    id: generateId(),
    createdAt: new Date().toISOString()
  };
  
  allCollaborations.push(newCollaboration);
  localStorage.setItem('collaborations', JSON.stringify(allCollaborations));
  
  return newCollaboration;
};

// Get all stored data (for debugging)
export const getAllStoredData = () => {
  return {
    reviews: JSON.parse(localStorage.getItem('reviews') || '[]'),
    donations: JSON.parse(localStorage.getItem('donations') || '[]'),
    collaborations: JSON.parse(localStorage.getItem('collaborations') || '[]')
  };
};