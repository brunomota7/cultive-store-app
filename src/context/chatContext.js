import { createContext, useContext, useState } from "react";
import MockMessages from "../constants/mockMessages.js";

const ChatContext = createContext();

export const ChatProvider = ({ children }) => {
  const [chats, setChats] = useState(MockMessages || []);

  const sendMessage = (agricultorId, message) => {
    const newMessage = {
      id: String(Date.now()),
      sender: "comprador",
      text: message,
      timestamp: new Date().toISOString(),
    };

    setChats((prev) => ({
      ...prev,
      [agricultorId]: [...(prev[agricultorId] || []), newMessage],
    }));
  };

  const deleteMessage = (agricultorId, messageId) => {
    setChats((prev) => ({
      ...prev,
      [agricultorId]: prev[agricultorId].filter((msg) => msg.id !== messageId),
    }));
  };

  const [unreadCounts, setUnreadCounts] = useState(() => {
    const initial = {};
    Object.keys(MockMessages).forEach((agricultorId) => {
        initial[agricultorId] = MockMessages[agricultorId].length;
    });
    return initial;
  });

  const markAsRead = (clienteId) => {
    setUnreadCounts((prev) => ({
        ...prev,
        [clienteId]: 0,
    }));
  };

  return (
    <ChatContext.Provider value={{ chats, sendMessage, deleteMessage, unreadCounts, markAsRead }}>
        {children}
    </ChatContext.Provider>
  );
};

export const useChat = () => useContext(ChatContext);
