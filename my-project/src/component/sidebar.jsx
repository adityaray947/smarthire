import React, { useState } from "react";
import logo from "../images/logo.png";
import { FaSearch, FaPlus, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { FaInstagram, FaWhatsapp, FaFacebookMessenger, FaMailchimp } from "react-icons/fa";
import messagesData from "../data/data.json"; 
import Information from '../component/information.jsx';
import Chatbar from "./chatbar.jsx";

export default function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [activeTab, setActiveTab] = useState("messages");
  const [messages, setMessages] = useState(messagesData); 
  const [selectedContact, setSelectedContact] = useState(messagesData[0]);

  const handleSelectContact = (contact) => {
    setSelectedContact(contact);
  };

  const toggleSidebar = () => setIsCollapsed(!isCollapsed);

  const truncateText = (text, maxLength) =>
    text.length > maxLength ? `${text.slice(0, maxLength)}...` : text;

  return (
    <div className={`h-screen z-20 bg-white ${isCollapsed ? "w-16" : "w-full sm:w-1/4"} transition-all duration-300`}>
      <nav className="h-full flex flex-col bg-white border-r shadow-lg">
        <div className="p-4 border-b flex items-center justify-between">
          {!isCollapsed && (
            <div className="flex items-center space-x-4">
              <img src={logo} alt="logo" className="w-10 h-10" />
              <div>
                <h1 className="text-sm sm:text-lg font-bold text-gray-800">BlueChat</h1>
                <p className="text-xs sm:text-sm text-gray-500">Inbox</p>
              </div>
            </div>
          )}
          <button
            onClick={toggleSidebar}
            className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 sm:p-1 text-sm"
          >
            {isCollapsed ? <FaArrowRight className="text-gray-600 text-base" /> : <FaArrowLeft className="text-gray-600 text-base" />}
          </button>
        </div>

        {!isCollapsed && (
          <div className="p-4">
            <div className="flex w-full h-10 space-x-2">
              <button
                onClick={() => setActiveTab("messages")}
                className={`flex-1 text-center rounded-md ${activeTab === "messages" ? "bg-white text-black shadow" : "bg-gray-100 text-gray-400"} py-1 text-xs sm:text-sm transition duration-300`}
              >
                Messages
              </button>
              <button
                onClick={() => setActiveTab("segments")}
                className={`flex-1 text-center rounded-md ${activeTab === "segments" ? "bg-white text-black shadow" : "bg-gray-100 text-gray-400"} py-1 text-xs sm:text-sm transition duration-300`}
              >
                Segments
              </button>
            </div>
          </div>
        )}

        {!isCollapsed && activeTab === "messages" && (
          <div className="flex-grow overflow-y-auto p-4">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex items-center space-x-4 p-3 hover:bg-gray-100 rounded-lg ${msg.unread ? "bg-blue-50" : ""}`}
                onClick={() => handleSelectContact(msg)}
              >
                <img
                  src={msg.avatar}
                  alt="loading"
                  className="w-12 h-12 rounded-full"
                />
                <div className="flex-grow">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-2">
                      <h2 className="text-xs sm:text-sm font-medium truncate">{msg.name}</h2>
                      {msg.platform === "Instagram" && <FaInstagram className="text-pink-500 text-base sm:text-lg" />}
                      {msg.platform === "Messenger" && <FaFacebookMessenger className="text-blue-500 text-base sm:text-lg" />}
                      {msg.platform === "WhatsApp" && <FaWhatsapp className="text-green-500 text-base sm:text-lg" />}
                    </div>
                    <span className="text-xs text-gray-400">{msg.time}</span>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-500 truncate overflow-hidden">
                    {truncateText(msg.preview, 20)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}

        {!isCollapsed && activeTab === "segments" && (
          <div className="flex-grow p-4 space-y-4">
            <div className="flex items-center space-x-2">
              <FaFacebookMessenger className="text-blue-500 text-base sm:text-lg" />
              <h1 className="text-xs sm:text-sm">Messenger</h1>
            </div>
            <div className="flex items-center space-x-2">
              <FaInstagram className="text-pink-500 text-base sm:text-lg" />
              <h1 className="text-xs sm:text-sm">Instagram</h1>
            </div>
            <div className="flex items-center space-x-2">
              <FaWhatsapp className="text-green-500 text-base sm:text-lg" />
              <h1 className="text-xs sm:text-sm">WhatsApp</h1>
            </div>
            <div className="flex items-center space-x-2">
              <FaMailchimp className="text-purple-500 text-base sm:text-lg" />
              <h1 className="text-xs sm:text-sm">Mail</h1>
            </div>
          </div>
        )}
      </nav>

      <Information contact={selectedContact} />
      <Chatbar contact={selectedContact}/>
    </div>
  );
}
