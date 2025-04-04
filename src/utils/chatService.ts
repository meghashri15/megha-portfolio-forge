
// This file provides utility functions for chat authentication and integration with Chatbase

// Type definition for chat messages (kept for reference)
export interface ChatMessage {
  id: string;
  content: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

/**
 * Generates a hash for authenticating with chat services
 * @param userId The user's unique identifier
 * @param secret The secret key used for hash generation
 * @returns The generated hash
 */
export const generateChatHash = (userId: string, secret: string): string => {
  // In a browser environment, we'd use the Web Crypto API instead of Node's crypto
  // This is just for reference - actual implementation would depend on your environment
  
  // Example using a simple hash algorithm (not for production)
  let hash = 0;
  for (let i = 0; i < userId.length; i++) {
    const char = userId.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash; // Convert to 32bit integer
  }
  return hash.toString(16);
  
  // In Node.js environment, you would use:
  // const crypto = require('crypto');
  // return crypto.createHmac('sha256', secret).update(userId).digest('hex');
};

// These functions are no longer used as Chatbase handles the chat functionality
export const sendMessage = async (content: string): Promise<ChatMessage> => {
  console.warn('sendMessage is deprecated, using Chatbase instead');
  return {
    id: Date.now().toString(),
    content: "This function is deprecated. Using Chatbase for chat functionality.",
    sender: 'bot',
    timestamp: new Date()
  };
};

export const initializeChat = async (): Promise<{ userId: string; hash: string }> => {
  console.warn('initializeChat is deprecated, using Chatbase instead');
  return {
    userId: 'anonymous-user',
    hash: 'placeholder-hash'
  };
};
