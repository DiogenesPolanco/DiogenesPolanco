import { useState, useEffect, useRef } from 'react';
import './Chat.css';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  isTyping?: boolean;
}

const responses: Record<string, string> = {
  skills: `Diogenes is the Manager of Development, Projects, and Innovation at APAP with more than 10 years of experience. His stack includes .NET, C#, TypeScript, Angular, Vue.js, and he works with microservices architectures on OpenShift and Kubernetes. He's also deep into AI - LLMs, ChatGPT, and AI integration in enterprise applications. Recently leading AI generative initiatives at APAP!`,
  projects: `Diogenes has several public projects on GitHub! His main projects: Visual-Studio-Services-Auth-Library-Js (Angular auth for VSO), nopCommerce-cli (CLI for e-commerce), RD.js (utilities for Dominican data), EdgarJs (SEC financial reports parser), TSPoints (TypeScript points system), and FamilyFinance (family finance app - under construction). All available on his GitHub!`,
  experience: `Impressive trajectory at APAP: started as senior developer, then became technical lead, and now is Manager of Development, Projects, and Innovation! Leads a team of 15+ people managing fintech innovation projects for more than 1k+ clients. Previously worked at Claro Dominicana where he migrated legacy systems to Angular and .Net Core.`,
  contact: `You can find Diogenes at diogenespolancomartinez@gmail.com, GitHub (@DiogenesPolanco), Twitter (@diogenespolanco), or LinkedIn. Always open to new opportunities and interesting projects!`,
  personal: `Besides being a tech leader, Diogenes is Catholic 💒 and very proud to be Dominican! 🇩🇴 He has 3 beautiful girls who are his biggest motivation. He loves his country and always says "here in DR we have world-class talent"!`,
  familia: `Diogenes has 3 girls! They are his biggest pride and motivation. He always says they are his "energy source" to keep innovating. He's also building a family finance project called "FamilyFinance" - to manage household finances intelligently!`,
  pais: `Proudly Dominican! 🇩🇴 From Santo Domingo, DR. He always says that technological talent in the Dominican Republic is world-class. He loves promoting tech development in the country and is active in the local developer community.`,
  religion: `Diogenes is a committed Catholic 💒. He believes his faith gives him strength and purpose in his work and family life. As a good Dominican Catholic, he balances his tech career with his values and family!`,
  ninas: `He has 3 beautiful girls! Each with their own personality. They are his biggest motivation to keep growing professionally. Even though he works with complex architectures at APAP, he says his daughters are his most important project! 👨‍👧‍👧`,
  default: `Great question! Ask about his skills, projects, experience, or learn more about him (his family, his country, his faith). I'm here to help!`,
};

const quickQuestions = [
  { key: 'skills', label: 'Skills' },
  { key: 'projects', label: 'Projects' },
  { key: 'experience', label: 'Experience' },
  { key: 'personal', label: 'Personal' },
  { key: 'contact', label: 'Contact' },
];

export default function Chat() {
  const [messages, setMessages] = useState<Message[]>([
    { id: '1', role: 'assistant', content: "Hi! I'm Diogenes' AI assistant. I can tell you about his technical skills, his projects, his experience at APAP, or some personal things like his faith and pride in the Dominican Republic! 💼 🇩🇴" }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const findResponse = (text: string): string => {
    const lower = text.toLowerCase();
    for (const [key, value] of Object.entries(responses)) {
      if (key !== 'default' && lower.includes(key)) {
        return value;
      }
    }
    return responses.default;
  };

  const sendMessage = (text?: string) => {
    const messageText = text || input.trim();
    if (!messageText) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: messageText,
    };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    setTimeout(() => {
      const response = findResponse(messageText);
      const assistantMsg: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: response,
      };
      setMessages(prev => [...prev, assistantMsg]);
      setIsTyping(false);
    }, 800 + Math.random() * 600);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <section className="chat-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Ask Me Anything</h2>
        </div>

        <div className="chat-container">
          <div className="chat-messages">
            {messages.map((msg) => (
              <div key={msg.id} className={`message ${msg.role}`}>
                <div className="message-avatar">
                  {msg.role === 'assistant' ? 'AI' : 'U'}
                </div>
                <div className="message-content">
                  {msg.content}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="message assistant">
                <div className="message-avatar">AI</div>
                <div className="message-content typing">
                  <span className="typing-dot"></span>
                  <span className="typing-dot"></span>
                  <span className="typing-dot"></span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="quick-questions">
            {quickQuestions.map((q) => (
              <button
                key={q.key}
                className="quick-btn"
                onClick={() => sendMessage(q.label)}
              >
                {q.label}
              </button>
            ))}
          </div>

          <div className="chat-input-container">
            <input
              type="text"
              className="chat-input"
              placeholder="Type your question..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
            />
            <button className="send-btn" onClick={() => sendMessage()}>
              <span>↑</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}