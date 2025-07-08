import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, Send, X, Bot } from 'lucide-react';

const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hi! I'm Hardik's AI assistant. Ask me anything about his work, skills, or experience!",
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const newMessage = {
      id: messages.length + 1,
      text: inputValue,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages([...messages, newMessage]);
    setInputValue('');

    // Simulate bot response
    setTimeout(() => {
      const botResponse = getBotResponse(inputValue);
      setMessages(prev => [...prev, {
        id: prev.length + 1,
        text: botResponse,
        sender: 'bot',
        timestamp: new Date()
      }]);
    }, 1000);
  };

  const getBotResponse = (question: string): string => {
    const lowerQuestion = question.toLowerCase();
    
    if (lowerQuestion.includes('skill') || lowerQuestion.includes('technology')) {
      return "Hardik is skilled in Python, JavaScript, React, Node.js, AI/ML, DevOps tools like Docker and Jenkins, and has experience with Flask, MongoDB, and cloud technologies. He's also exploring GenAI and LLMs!";
    } else if (lowerQuestion.includes('project')) {
      return "Some of Hardik's notable projects include Prompt_ai (AI tool), Medimate (healthcare app), Student Management System, IP Location Tracker, and Vocal Vibe (voice platform). He has 12+ projects spanning AI, web development, and health tech!";
    } else if (lowerQuestion.includes('experience') || lowerQuestion.includes('internship')) {
      return "Hardik has completed internships at Learn & Build (Frontend Developer) and Regex Software (MERN Stack Developer). He's currently in his final year of B.Tech Computer Science at Poornima College of Engineering.";
    } else if (lowerQuestion.includes('devops') || lowerQuestion.includes('docker')) {
      return "Yes! Hardik has DevOps experience with Docker, Jenkins, Kubernetes, GitHub Actions, and Linux. He's comfortable with containerization, CI/CD pipelines, and cloud deployments.";
    } else if (lowerQuestion.includes('ai') || lowerQuestion.includes('ml')) {
      return "Hardik is passionate about AI/ML and GenAI! He's worked with Gemini API, LangChain, OpenAI, speech recognition, and has built several AI-powered applications. His projects include voice processing and intelligent automation tools.";
    } else if (lowerQuestion.includes('contact') || lowerQuestion.includes('hire')) {
      return "You can reach Hardik at hardikgothwal@example.com or connect with him on LinkedIn and GitHub. He's open to new opportunities and exciting projects!";
    } else if (lowerQuestion.includes('education') || lowerQuestion.includes('college')) {
      return "Hardik is pursuing B.Tech in Computer Science from Poornima College of Engineering (2021-2025). He's in his final year and has maintained a strong academic record while gaining practical experience through internships.";
    } else {
      return "That's a great question! Hardik is a passionate full-stack developer with expertise in AI/ML, web development, and DevOps. Feel free to ask about his specific skills, projects, or experience. You can also contact him directly for more detailed discussions!";
    }
  };

  return (
    <>
      {/* Chat Button */}
      <motion.button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 w-14 h-14 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 z-50"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
      >
        <MessageCircle className="w-6 h-6 text-white" />
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed bottom-24 right-6 w-80 h-96 bg-gray-900/95 backdrop-blur-md rounded-xl border border-gray-700 shadow-2xl z-50"
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.3 }}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-700">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
                  <Bot className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-semibold">AI Assistant</h3>
                  <p className="text-gray-400 text-xs">Ask me about Hardik</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 max-h-64">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-xs px-4 py-2 rounded-lg ${
                      message.sender === 'user'
                        ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white'
                        : 'bg-gray-800 text-gray-300'
                    }`}
                  >
                    <p className="text-sm">{message.text}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Input */}
            <div className="p-4 border-t border-gray-700">
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  placeholder="Ask about skills, projects, experience..."
                  className="flex-1 px-3 py-2 bg-gray-800 text-white rounded-lg border border-gray-600 focus:border-purple-500 focus:outline-none text-sm"
                />
                <button
                  onClick={handleSendMessage}
                  className="w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center hover:opacity-90 transition-opacity"
                >
                  <Send className="w-4 h-4 text-white" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatBot;