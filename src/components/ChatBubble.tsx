
import React, { useState, useEffect } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ChatBubble = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [userId, setUserId] = useState('anonymous-user');
  const [hash, setHash] = useState('');

  // This function would normally be done on the server side for security
  // For now, we're using a placeholder approach
  useEffect(() => {
    // In a real implementation, you would fetch this from your backend
    // The crypto operations should be done on the server-side
    setUserId('anonymous-user');
    setHash('placeholder-hash');
  }, []);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen ? (
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg w-80 sm:w-96 h-96 flex flex-col overflow-hidden animate-scale-in">
          <div className="bg-primary p-4 text-white flex justify-between items-center">
            <h3 className="font-medium">Chat with Megha</h3>
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={toggleChat}
              className="text-white hover:bg-primary/90"
            >
              <X size={18} />
            </Button>
          </div>
          
          <div className="flex-1 p-4 overflow-y-auto">
            <div className="bg-muted p-3 rounded-lg mb-2 max-w-[80%]">
              <p className="text-sm">Hi there! How can I help you today?</p>
            </div>
            
            {/* Placeholder for actual chat integration */}
            <div className="bg-gray-100 p-3 rounded-lg ml-auto max-w-[80%]">
              <p className="text-sm">This is where your actual chat integration will go.</p>
            </div>
          </div>
          
          <div className="p-3 border-t">
            <div className="flex gap-2">
              <input 
                type="text" 
                placeholder="Type your message..." 
                className="flex-1 border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-primary"
              />
              <Button size="sm">Send</Button>
            </div>
          </div>
        </div>
      ) : (
        <Button
          onClick={toggleChat}
          className="rounded-full h-14 w-14 flex items-center justify-center shadow-lg hover:shadow-xl transition-all"
          aria-label="Open chat"
        >
          <MessageCircle size={24} />
        </Button>
      )}
    </div>
  );
};

export default ChatBubble;
