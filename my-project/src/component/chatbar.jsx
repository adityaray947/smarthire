import React, { useState } from 'react';
import { FaInstagram, FaWhatsapp, FaFacebookMessenger, FaEllipsisV, FaInfoCircle, FaPaperclip, FaImage, FaPaperPlane } from 'react-icons/fa';

export default function Chatbar({ contact }) {
  const [selectedPlatform, setSelectedPlatform] = useState("Instagram");

  if (!contact) {
    return null; 
  }

 
  const platformIcons = {
    Instagram: <FaInstagram className="text-pink-500" />,
    WhatsApp: <FaWhatsapp className="text-green-500" />,
    Messenger: <FaFacebookMessenger className="text-blue-500" />,
  };

  return (
    <div className="relative w-full">
     
      <div
        className="fixed top-0 left-1/2 transform -translate-x-1/2 w-1/2 p-4 bg-white shadow-md z-10 
        flex items-center justify-between space-x-4"
      >
       
        <img
          src={contact.avatar}
          alt={contact.name || "Avatar"}
          className="w-16 h-16 rounded-full"
        />

     
        <div className="flex flex-col">
          <p className="text-xl font-semibold">{contact.name}</p>
          <p className="text-sm text-gray-500">{contact.email}</p>
        </div>

        
        <div className="relative">
          <div className="absolute inset-y-0 left-2 flex items-center ">
            {platformIcons[selectedPlatform]} 
          </div>
          <select
            value={selectedPlatform}
            onChange={(e) => setSelectedPlatform(e.target.value)}
            className="bg-white border rounded p-2 text-sm text-gray-700 pl-8 pr-2"
          >
            <option value="Instagram">Instagram</option>
            <option value="WhatsApp">WhatsApp</option>
            <option value="Messenger">Messenger</option>
          </select>
        </div>

       
        <FaEllipsisV className="text-gray-500 cursor-pointer" />
        <FaInfoCircle className="text-gray-500 cursor-pointer" />
      </div>
      <div className="fixed bottom-0 left-1/4 w-1/2 bg-white shadow-md p-4">
        <div className="flex items-center space-x-4">
          <button className="text-gray-500 hover:text-blue-500">
            <FaPaperclip size={20} />
          </button>

         
          <button className="text-gray-500 hover:text-blue-500">
            <FaImage size={20} />
          </button>

         
          <input
            type="text"
            placeholder="Type your message..."
            className="flex-grow border rounded p-2 text-sm outline-none focus:ring-2 focus:ring-blue-500"
          />

          
          <button className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 flex items-center space-x-2">
            <FaPaperPlane />
            <span>Send</span>
          </button>
        </div>
      </div>
    </div>
  );
}
