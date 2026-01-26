import { useState } from 'react'
import { MessageCircle, X, Send } from 'lucide-react'

export default function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false)
  const [message, setMessage] = useState('')
  const [messages, setMessages] = useState([
    { role: 'assistant', content: 'Hi! I\'m AI Assistant. How can I help you today?' },
  ])

  const handleSend = () => {
    if (!message.trim()) return

    const userMessage = { role: 'user', content: message }
    setMessages([...messages, userMessage])

    // Mock AI response
    setTimeout(() => {
      const aiResponse = {
        role: 'assistant',
        content: 'Thanks for your message! This is a demo AI assistant. In a full implementation, this would connect to a real AI service.',
      }
      setMessages((prev) => [...prev, aiResponse])
    }, 500)

    setMessage('')
  }

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-8 right-8 z-50 w-14 h-14 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full shadow-lg hover:shadow-purple-500/50 transition-all duration-300 flex items-center justify-center group hover:scale-110"
      >
        {isOpen ? (
          <X className="text-white" size={24} />
        ) : (
          <MessageCircle className="text-white group-hover:animate-bounce" size={24} />
        )}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-8 z-50 w-96 max-w-[calc(100vw-2rem)] bg-gradient-to-br from-gray-900 to-gray-900/95 backdrop-blur-lg rounded-xl shadow-2xl border border-purple-500/30 overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-4">
            <h3 className="font-semibold text-white">AI Assistant</h3>
            <p className="text-xs text-purple-100 mt-1">Ask me anything!</p>
          </div>

          {/* Messages */}
          <div className="h-80 overflow-y-auto p-4 space-y-4">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] px-4 py-2 rounded-lg ${
                    msg.role === 'user'
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                      : 'bg-gray-800 text-gray-200'
                  }`}
                >
                  <p className="text-sm">{msg.content}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="border-t border-purple-500/20 p-4">
            <div className="flex gap-2">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Type a message..."
                className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-purple-500 text-gray-200 text-sm"
              />
              <button
                onClick={handleSend}
                className="px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg hover:shadow-lg hover:shadow-purple-500/50 transition-all"
              >
                <Send size={18} />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
