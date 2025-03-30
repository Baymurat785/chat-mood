import React, { useState } from 'react';
import ChatMessage from './components/ChatMessage';
import ChatInput from './components/ChatInput';

// Define message type
interface Message {
  role: 'user' | 'assistant';
  content: string;
  mood?: {
    emoji: string;
    mood: string;
    color: string;
  };
}

function App() {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: 'Hello! What is your mood today?' }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  
  const handleSendMessage = async (message: string) => {
    if (message.trim() === '' || isLoading) return;
    
    // Add user message
    setMessages(prev => [...prev, { role: 'user', content: message }]);
    setIsLoading(true);
    
    try {
      // Call the combined API endpoint
      const response = await fetch('/api/analyze', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message }),
      });
      
      if (!response.ok) {
        throw new Error('Failed to process message');
      }
      
      const data = await response.json();
      
      // Add assistant response with mood
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: data.advice,
        mood: data.mood
      }]);
    } catch (error) {
      console.error('Error processing message:', error);
      // Fallback response in case of error
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: 'I apologize, but I encountered an error processing your message. Please try again later.'
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="chat-container">
      <header className="header">
        <h1>AI Mood Chat</h1>
      </header>
      
      <main className="main-content">
        <div className="messages-container">
          {messages.map((message, index) => (
            <div key={index} className="message-wrapper">
              <ChatMessage
                role={message.role}
                content={message.content}
                mood={message.mood}
              />
            </div>
          ))}
          {isLoading && (
            <div className="message-wrapper">
              <div className="assistant-message-container">
                <div className="assistant-message">
                  <p>Thinking...</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
      
      <footer className="footer">
        <div className="input-container">
          <ChatInput onSendMessage={handleSendMessage} />
        </div>
      </footer>
    </div>
  );
}

export default App;