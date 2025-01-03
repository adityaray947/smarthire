import React from "react";
import { IoMdCall } from "react-icons/io";
import { MdVideoCall } from "react-icons/md";
import { IoIosMore } from "react-icons/io";
import { FaDollarSign, FaEye } from "react-icons/fa";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { FaSearch } from "react-icons/fa";
import { GoPlus } from "react-icons/go";
import { FaPlus } from "react-icons/fa";
import { FaGlobe, FaPhoneAlt, FaClock } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';

export default function Information({ contact }) {
  if (!contact) return null;

  return (
    <div className="absolute w-1/4 sm:w-1/4 h-[100vh] right-0 top-0 bg-white p-4 border-r shadow-lg sm:block hidden ">
      <img
        src={contact.avatar}
        alt={contact.name}
        className="w-16 h-16 rounded-full mx-auto mb-4"
      />
      <h1 className="text-lg font-semibold text-center">{contact.name}</h1>
      <p className="text-center">{contact.last_visited}</p>
      <p className="text-center">{contact.location}</p>
      <p></p>

      <div className="flex justify-around my-4">
        <div className="flex flex-col items-center">
          <IoMdCall className="text-xl cursor-pointer mb-1" />
          <span className="text-sm">Call</span>
        </div>
        <div className="flex flex-col items-center">
          <MdVideoCall className="text-xl cursor-pointer mb-1" />
          <span className="text-sm">Video</span>
        </div>
        <div className="flex flex-col items-center">
          <IoIosMore className="text-xl cursor-pointer mb-1" />
          <span className="text-sm">More</span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-2 my-4">
        <div className="bg-white p-6 rounded-lg text-center border border-gray-200">
          <div className="flex items-center justify-center mb-1 gap-1">
            <RiMoneyDollarCircleFill className="text-sm text-gray-500" />
            <h6 className="text-sm font-semibold text-gray-500">Revenue</h6>
          </div>
          <p className="text-2xl font-bold text-left">${contact.revenue}</p>
        </div>

        <div className="bg-white p-6 rounded-lg text-center border border-gray-200">
          <div className="flex items-center justify-center mb-1 gap-1">
            <FaEye className="text-sm text-gray-500" />
            <h6 className="text-sm font-semibold text-gray-500">Web Visit</h6>
          </div>
          <p className="text-2xl font-bold text-left">{contact.web_visits}</p>
        </div>
      </div>

      <div className="flex items-center bg-gray-100 p-1 rounded-lg">
        <FaSearch className="text-gray-500 mr-2" />
        <input
          type="text"
          placeholder="Search in general"
          className="w-full bg-transparent outline-none p-1 text-sm"
        />
      </div>

      <div className="flex items-center justify-between mt-4">

        <p className="text-[15px] font-semibold">Information</p>
        <div className="flex items-center space-x-1">
          <FaPlus className="text-[10px] text-blue-500 font-bold" />
          <p className="text-[12px] text-blue-500 font-bold">Add</p>
        </div>
      </div>
      
      <div className="text-[12px] flex flex-col mt-4 space-y-2">
  <div className="flex items-center ">
    <FaGlobe className="text-gray-500 " />
    <p className="flex items-center">Platform:</p>
    <p className="flex items-center text-black ml-auto font-bold">{contact.platform}</p>
  </div>
  <div className="flex items-center ">
    <FiMail className="text-gray-500" />
    <p className="flex items-center">Email:</p>
    <p className="flex items-center text-black ml-auto font-bold">{contact.email}</p>
  </div>
  <div className="flex items-center ">
    <FaPhoneAlt className="text-gray-500 mr-2 " />
    <p className="flex items-center">Phone:</p>
    <p className="flex items-center text-black ml-auto font-bold ">{contact.phone}</p>
  </div>
  <div className="flex items-center ">
    <FaClock className="text-gray-500 " />
    <p className="flex items-center">Last Visited:</p>
    <p className="flex items-center text-black ml-auto font-bold">{contact.last_visited}</p>
  </div>
</div>

    </div>
  );
}
