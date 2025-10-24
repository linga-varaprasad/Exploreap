import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI, Chat } from "@google/genai";
import { ArrowLeftIcon, SparklesIcon, UserIcon } from '../assets/icons';

interface ChatScreenProps {
  onBack: () => void;
}

interface Message {
  sender: 'user' | 'model';
  text: string;
}

const ChatScreen: React.FC<ChatScreenProps> = ({ onBack }) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      sender: 'model',
      text: 'Hello! I am your AI travel guide for Andhra Pradesh. How can I help you plan your trip today?',
    },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [chat, setChat] = useState<Chat | null>(null);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  // Initialize the chat session
  useEffect(() => {
    const initChat = async () => {
      try {
        const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
        const newChat = ai.chats.create({
          model: 'gemini-2.5-flash',
          config: {
            systemInstruction: 'You are a friendly and knowledgeable travel guide specializing in Andhra Pradesh, India. Your name is AP-Explorer. Provide exciting and helpful information to tourists. Keep your responses concise and engaging. Format your responses using markdown where appropriate.',
          },
        });
        setChat(newChat);
      } catch (error) {
        console.error("Failed to initialize chat:", error);
        setMessages(prev => [...prev, { sender: 'model', text: 'Sorry, I am having trouble connecting right now. Please try again later.'}]);
      }
    };
    initChat();
  }, []);

  // Scroll to the bottom of the chat on new messages
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading || !chat) return;

    const userMessage: Message = { sender: 'user', text: input.trim() };
    setMessages((prevMessages) => [...prevMessages, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
        const result = await chat.sendMessageStream({ message: userMessage.text });
        
        let modelResponse = '';
        setMessages((prevMessages) => [...prevMessages, { sender: 'model', text: '' }]);

        for await (const chunk of result) {
            modelResponse += chunk.text;
            setMessages((prevMessages) => {
                const newMessages = [...prevMessages];
                newMessages[newMessages.length - 1] = { sender: 'model', text: modelResponse };
                return newMessages;
            });
        }
    } catch (error) {
      console.error("Error sending message:", error);
      setMessages((prev) => [...prev, { sender: 'model', text: 'Oops! Something went wrong. Please try again.'}]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen flex-col bg-base-200/50 font-sans">
      <header className="flex flex-shrink-0 items-center justify-between bg-base-100 p-4 shadow-sm">
        <button onClick={onBack} className="p-2 -ml-2">
          <ArrowLeftIcon className="h-6 w-6 text-base-content" />
        </button>
        <h1 className="text-xl font-bold text-primary">AI Trip Planner</h1>
        <div className="w-8"></div>
      </header>
      <main ref={chatContainerRef} className="flex-1 space-y-4 overflow-y-auto p-4">
        {messages.map((msg, index) => (
          <div key={index} className={`flex items-end gap-2 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
            {msg.sender === 'model' && (
              <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary text-white">
                <SparklesIcon className="h-5 w-5" />
              </div>
            )}
            <div className={`rounded-xl p-3 max-w-lg shadow ${
                msg.sender === 'user' 
                ? 'rounded-br-none bg-secondary text-white' 
                : 'rounded-bl-none bg-white text-base-content'
            }`}>
              <p className="whitespace-pre-wrap">{msg.text}</p>
            </div>
             {msg.sender === 'user' && (
              <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-base-300 text-base-content-secondary">
                <UserIcon className="h-5 w-5" />
              </div>
            )}
          </div>
        ))}
        {isLoading && (
            <div className="flex items-end gap-2 justify-start">
                <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary text-white">
                    <SparklesIcon className="h-5 w-5" />
                </div>
                <div className="rounded-xl rounded-bl-none bg-white p-3 max-w-xs shadow">
                    <div className="flex items-center justify-center space-x-1">
                        <div className="h-2 w-2 animate-pulse rounded-full bg-gray-400"></div>
                        <div className="h-2 w-2 animate-pulse rounded-full bg-gray-400 [animation-delay:0.2s]"></div>
                        <div className="h-2 w-2 animate-pulse rounded-full bg-gray-400 [animation-delay:0.4s]"></div>
                    </div>
                </div>
            </div>
        )}
      </main>
      <footer className="flex-shrink-0 border-t bg-base-100 p-4">
        <form onSubmit={handleSendMessage} className="flex items-center gap-2">
            <input 
              type="text" 
              placeholder="Ask about places, itineraries..." 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="w-full rounded-full border-base-300 bg-white py-3 px-5 shadow-sm transition-shadow focus:border-secondary focus:ring-2 focus:ring-secondary/50" 
              disabled={isLoading || !chat}
            />
            <button type="submit" className="flex-shrink-0 rounded-full bg-secondary p-3 text-white transition-transform hover:scale-110 disabled:scale-100 disabled:bg-gray-400" disabled={isLoading || !input.trim() || !chat}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
                    <path d="M3.478 2.404a.75.75 0 0 0-.926.941l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.404Z" />
                </svg>
            </button>
        </form>
      </footer>
    </div>
  );
};

export default ChatScreen;