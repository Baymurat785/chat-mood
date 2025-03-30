import React from 'react';

interface ChatMessageProps {
  role: 'user' | 'assistant';
  content: string;
  mood?: {
    emoji: string;
    mood: string;
    color: string;
  };
}

const ChatMessage: React.FC<ChatMessageProps> = ({ role, content, mood }) => {
  if (role === 'user') {
    return (
      <div className="user-message-container">
        <div className="user-message">
          <p>{content}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="assistant-message-container">
      <div className="assistant-message">
      {mood && (
         <div className="status-container">
           <span className="status-badge">
               {mood.emoji}{' '}
            <span style={{ color: mood.color }}>{mood.mood}</span>
          </span>
        </div>
      )}
        <p>{content}</p>
      </div>
    </div>
  );
};

export default ChatMessage;