import { useState } from 'react';
import { MessageCircle, X, Send, Bot, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { EVENTS_DATA, SYMPOSIUM_INFO } from '@/data/events';

interface Message {
  id: string;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: `Hello! 👋 I'm your ${SYMPOSIUM_INFO.name} assistant. I can help you with information about events, rules, and coordinator contacts. What would you like to know?`,
      isBot: true,
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');

  const generateBotResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();
    
    // Event information queries
    if (lowerMessage.includes('event') || lowerMessage.includes('competition')) {
      if (lowerMessage.includes('all') || lowerMessage.includes('list')) {
        const eventsList = EVENTS_DATA.map(event => `• ${event.title} (${event.category})`).join('\n');
        return `Here are all our events:\n\n${eventsList}\n\nWhich event would you like to know more about?`;
      }
      
      if (lowerMessage.includes('technical')) {
        const techEvents = EVENTS_DATA.filter(e => e.category === 'Technical');
        const eventsList = techEvents.map(event => `• ${event.title} - ${event.tagline}`).join('\n');
        return `Our Technical Events:\n\n${eventsList}\n\nAsk me about any specific event for rules and registration!`;
      }
      
      if (lowerMessage.includes('non-technical') || lowerMessage.includes('non technical')) {
        const nonTechEvents = EVENTS_DATA.filter(e => e.category === 'Non-Technical');
        const eventsList = nonTechEvents.map(event => `• ${event.title} - ${event.tagline}`).join('\n');
        return `Our Non-Technical Events:\n\n${eventsList}\n\nAsk me about any specific event for rules and registration!`;
      }
    }

    // Specific event queries
    for (const event of EVENTS_DATA) {
      if (lowerMessage.includes(event.title.toLowerCase()) || 
          lowerMessage.includes(event.id.toLowerCase())) {
        
        if (lowerMessage.includes('rule') || lowerMessage.includes('regulation')) {
          const rules = event.rules.map((rule, index) => `${index + 1}. ${rule}`).join('\n');
          return `Rules for ${event.title}:\n\n${rules}\n\nNeed help with registration? Just ask!`;
        }
        
        if (lowerMessage.includes('contact') || lowerMessage.includes('coordinator') || lowerMessage.includes('number')) {
          return `Coordinators for ${event.title}:\n\n👨‍🎓 Student Coordinator: ${event.contacts.student}\n👨‍🏫 Staff Coordinator: ${event.contacts.staff}\n\nFeel free to contact them for any queries!`;
        }
        
        if (lowerMessage.includes('register') || lowerMessage.includes('registration')) {
          return `To register for ${event.title}:\n\n📝 Click here: ${event.formUrl}\n\nOr visit the Events section and click "Register" on the ${event.title} card!`;
        }
        
        // General event info
        return `📌 ${event.title}\n🎯 ${event.tagline}\n📂 Category: ${event.category}\n\nWhat would you like to know? I can tell you about:\n• Rules and regulations\n• Coordinator contacts\n• Registration process`;
      }
    }

    // Contact/coordinator general queries
    if (lowerMessage.includes('contact') || lowerMessage.includes('coordinator') || lowerMessage.includes('number')) {
      return `I can provide coordinator contacts for any event! Here are some options:\n\n• Ask about a specific event (e.g., "debugging contact")\n• Say "all contacts" for complete list\n• Ask "student coordinators" or "staff coordinators"\n\nWhich would you prefer?`;
    }

    if (lowerMessage.includes('all contacts') || lowerMessage.includes('all coordinator')) {
      let contactsList = '';
      EVENTS_DATA.forEach(event => {
        contactsList += `\n🎯 ${event.title}\n👨‍🎓 Student: ${event.contacts.student}\n👨‍🏫 Staff: ${event.contacts.staff}\n`;
      });
      return `Here are all event coordinators:${contactsList}\n\nFeel free to contact them for any queries!`;
    }

    // Symposium general info
    if (lowerMessage.includes('emerge') || lowerMessage.includes('symposium') || lowerMessage.includes('about')) {
      return `🎉 Welcome to ${SYMPOSIUM_INFO.name}!\n\n✨ ${SYMPOSIUM_INFO.subtitle}\n📅 Event Date: September 16, 2025\n\n${SYMPOSIUM_INFO.description}\n\nWe have ${EVENTS_DATA.length} exciting events across Technical and Non-Technical categories. What would you like to explore?`;
    }

    // Registration queries
    if (lowerMessage.includes('register') || lowerMessage.includes('registration')) {
      return `To register for events:\n\n1️⃣ Visit the Events tab\n2️⃣ Choose your event category\n3️⃣ Click "Register" on any event\n4️⃣ Fill out the Google Form\n\nOr ask me about a specific event and I'll provide the direct registration link!`;
    }

    // Help queries
    if (lowerMessage.includes('help') || lowerMessage.includes('what can you do')) {
      return `I can help you with:\n\n🎯 Event information and rules\n📞 Coordinator contacts\n📝 Registration guidance\n📅 Event schedules\n💡 General symposium info\n\nJust ask me anything about ${SYMPOSIUM_INFO.name}!`;
    }

    // Default response
    return `I'd be happy to help! You can ask me about:\n\n• Specific events (e.g., "Tell me about debugging")\n• Event rules and regulations\n• Coordinator contact numbers\n• Registration process\n• Event categories\n\nWhat would you like to know about ${SYMPOSIUM_INFO.name}?`;
  };

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      isBot: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');

    // Generate bot response
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: generateBotResponse(inputValue),
        isBot: true,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botResponse]);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Chat Icon */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => setIsOpen(true)}
          className={`w-14 h-14 rounded-full shadow-lg transition-all duration-300 ${
            isOpen ? 'hidden' : 'flex'
          } items-center justify-center bg-primary hover:bg-primary/90 text-primary-foreground`}
        >
          <MessageCircle className="w-6 h-6" />
        </Button>
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 w-80 h-96 z-50">
          <div className="glass-card h-full flex flex-col border border-border/50 shadow-xl">
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-border/50">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                  <Bot className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-sm text-foreground">EmergeX Assistant</h3>
                  <p className="text-xs text-muted-foreground">Online</p>
                </div>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(false)}
                className="h-8 w-8 p-0"
              >
                <X className="w-4 h-4" />
              </Button>
            </div>

            {/* Messages */}
            <ScrollArea className="flex-1 p-4">
              <div className="space-y-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex gap-2 ${
                      message.isBot ? 'justify-start' : 'justify-end'
                    }`}
                  >
                    {message.isBot && (
                      <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                        <Bot className="w-3 h-3 text-primary" />
                      </div>
                    )}
                    <div
                      className={`max-w-[70%] p-3 rounded-lg text-sm whitespace-pre-line ${
                        message.isBot
                          ? 'bg-muted text-foreground'
                          : 'bg-primary text-primary-foreground'
                      }`}
                    >
                      {message.text}
                    </div>
                    {!message.isBot && (
                      <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-1">
                        <User className="w-3 h-3 text-primary-foreground" />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </ScrollArea>

            {/* Input */}
            <div className="p-4 border-t border-border/50">
              <div className="flex gap-2">
                <Input
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask about events..."
                  className="flex-1 text-sm"
                />
                <Button size="sm" onClick={handleSendMessage}>
                  <Send className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatBot;