// This file is now a placeholder since we're using Chatbase for chat functionality
// The Chatbase script is loaded directly in the ChatBubble component

// Type definition for chat messages (kept for reference)
export interface ChatMessage {
  id: string;
  content: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

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
