
import React, { useEffect } from 'react';
import { MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

// Add TypeScript interface for the window.chatbase property
declare global {
  interface Window {
    chatbase: any;
  }
}

const ChatBubble = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  // Initialize Chatbase when the component mounts
  useEffect(() => {
    // Authentication setup - Using a dummy user ID for demonstration
    // In a real app, you'd get this from your auth system
    const userId = 'user-' + Math.random().toString(36).substr(2, 9);
    const secret = 'your-secret-key'; // This should be securely managed
    
    // Only initialize once when the component mounts
    const script = document.createElement('script');
    script.innerHTML = `
      (function(){
        if(!window.chatbase||window.chatbase("getState")!=="initialized"){
          window.chatbase=(...arguments)=>{
            if(!window.chatbase.q){window.chatbase.q=[]}
            window.chatbase.q.push(arguments)
          };
          window.chatbase=new Proxy(window.chatbase,{
            get(target,prop){
              if(prop==="q"){return target.q}
              return(...args)=>target(prop,...args)
            }
          })
        }
        const onLoad=function(){
          const script=document.createElement("script");
          script.src="https://www.chatbase.co/embed.min.js";
          script.id="Fi4jNPgFTpKEjEMDiMngI";
          script.domain="www.chatbase.co";
          document.body.appendChild(script)
        };
        if(document.readyState==="complete"){
          onLoad()
        }else{
          window.addEventListener("load",onLoad)
        }
      })();
    `;
    document.head.appendChild(script);

    // Set up chatbase with user identity if needed
    // This would typically happen after the script loads
    window.addEventListener('load', () => {
      if (window.chatbase) {
        // You can use this to set user identity if Chatbase supports it
        // window.chatbase('updateUser', { userId, hash });
      }
    });

    return () => {
      // Clean up if needed
      document.head.removeChild(script);
    };
  }, []);

  const toggleChat = () => {
    setIsOpen(!isOpen);
    
    // Toggle the Chatbase widget visibility
    if (window.chatbase) {
      if (!isOpen) {
        window.chatbase('show');
      } else {
        window.chatbase('hide');
      }
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button
        onClick={toggleChat}
        className="rounded-full h-14 w-14 flex items-center justify-center shadow-lg hover:shadow-xl transition-all"
        aria-label="Open chat"
      >
        <MessageCircle size={24} />
      </Button>
    </div>
  );
};

export default ChatBubble;
