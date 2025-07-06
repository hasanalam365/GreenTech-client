import React, { useState } from 'react';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { motion } from "framer-motion";
import { toast } from 'react-toastify';
import { MdDeleteForever } from "react-icons/md";

const AllMessages = () => {
  const axiosSecure = useAxiosSecure();
  const [expandedMessages, setExpandedMessages] = useState({});
  const [repliedIndexes, setRepliedIndexes] = useState({});

  const { data: allMessages = [], isLoading, refetch } = useQuery({
    queryKey: ['all-messages'],
    queryFn: async () => {
      const res = await axiosSecure.get(`/allMessages`);
      return res.data;
    },
  });

  const toggleExpand = (index) => {
    setExpandedMessages(prev => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const openGmailReply = (email, index) => {
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}`;
    window.open(gmailUrl, '_blank');
    setRepliedIndexes(prev => ({
      ...prev,
      [index]: true,
    }));
  };

  const handleDeleteMessage = async (id) => {
    try {
      const confirmed = window.confirm("Are you sure you want to delete this message?");
      if (!confirmed) return;

      const res = await axiosSecure.delete(`/deleteMessage/${id}`);
      if (res.data.deletedCount > 0) {
        toast.success("Message deleted successfully");
        refetch();
      } else {
        toast.error("Failed to delete message");
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <div className="p-6 bg-gradient-to-r from-green-50 via-green-100 to-green-50 h-full">
      <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">📩 All Messages</h2>

      {isLoading ? (
        <div className="flex justify-center items-center min-h-[300px]">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-500"></div>
          <span className="ml-4 text-green-600 font-semibold">Loading...</span>
        </div>
      ) : (
        <div>
          {allMessages?.slice().reverse().map((message, index) => {
            const isExpanded = expandedMessages[index];
            const isReplied = repliedIndexes[index];
            const shortText = message.messageText.length > 100
              ? `${message.messageText.substring(0, 100)}...`
              : message.messageText;

            return (
              <motion.div
                key={message._id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.03 }}
                className="mb-5 bg-white p-6 rounded-2xl shadow-xl border border-gray-200 transition-all duration-300"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-semibold text-indigo-600 mb-2">{message.name}</h3>
                    <p className="text-sm text-gray-500 mb-1">
                      <span className="font-medium">Email:</span> {message.email}
                    </p>
                    <p className="text-gray-700 mb-2">
                      {isExpanded ? message.messageText : shortText}
                    </p>
                    {message.messageText.length > 100 && (
                      <button
                        onClick={() => toggleExpand(index)}
                        className="text-blue-600 text-sm underline mb-2 hover:text-blue-800"
                      >
                        {isExpanded ? "Hide full message" : "View full message"}
                      </button>
                    )}
                  </div>
                  <button
                    onClick={() => handleDeleteMessage(message._id)}
                    className="text-red-600 text-xl hover:scale-110"
                    title="Delete Message"
                  >
                    <MdDeleteForever />
                  </button>
                </div>

                <div className="flex justify-between items-center mt-4">
                  <p className="text-xs text-gray-400 italic flex items-center gap-2">
                    {new Date(message.time).toLocaleString()}
                    {isReplied && (
                      <span className="text-green-600 font-medium text-xs">✔️ Replied done</span>
                    )}
                  </p>
                  <button
                    onClick={() => openGmailReply(message.email, index)}
                    className="px-4 py-2 bg-green-600 text-white text-sm font-medium rounded-lg hover:bg-green-700 transition-all duration-300"
                  >
                    Reply
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default AllMessages;
