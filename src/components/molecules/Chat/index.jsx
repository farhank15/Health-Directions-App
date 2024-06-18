import React, { useState, useEffect, useRef } from "react";
import { ChatMessage } from "@components/atoms/ChatMessage"; // Sesuaikan path impor sesuai struktur proyek Anda

function Chat({ consultationId }) {
  const [messages, setMessages] = useState({});
  const [messageText, setMessageText] = useState("");
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [showChat, setShowChat] = useState(false); // State to toggle between doctor list and chat on mobile
  const messagesEndRef = useRef(null);
  const fileInputRef = useRef(null);

  const doctors = [
    { id: "doctor1", name: "Dokter 1", avatar: "/avatar1.jpg" },
    { id: "doctor2", name: "Dokter 2", avatar: "/avatar2.jpg" },
    // Add more doctors as needed
  ];

  const handleFileSelect = (event) => {
    const files = Array.from(event.target.files);
    const filesWithPreview = files.map((file) => ({
      file,
      preview: URL.createObjectURL(file),
      type: file.type.startsWith("image/") ? "image" : "document",
    }));
    setSelectedFiles((prevFiles) => [...prevFiles, ...filesWithPreview]);
  };

  const removeSelectedFile = (index) => {
    setSelectedFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
  };

  const sendMessage = () => {
    if (!messageText.trim() && selectedFiles.length === 0) return;

    const messageData = {
      consultationId: consultationId,
      text: messageText,
      sender: "user",
      timestamp: new Date().toISOString(),
      files: selectedFiles.map(({ file, preview, type }) => ({
        name: file.name,
        url: preview,
        type,
      })),
    };

    setMessages((prevMessages) => ({
      ...prevMessages,
      [selectedDoctor]: [...(prevMessages[selectedDoctor] || []), messageData],
    }));

    setMessageText("");
    setSelectedFiles([]); // Reset selected files after sending
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      sendMessage();
    }
  };

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  useEffect(() => {
    if (!selectedDoctor) return;

    const simulateIncomingMessage = setTimeout(() => {
      const messageData = {
        consultationId: consultationId,
        text: "Ini adalah pesan dari dokter atau sistem lainnya.",
        sender: "doctor",
        timestamp: new Date().toISOString(),
      };

      setMessages((prevMessages) => ({
        ...prevMessages,
        [selectedDoctor]: [
          ...(prevMessages[selectedDoctor] || []),
          messageData,
        ],
      }));
    }, 3000); // Simulate incoming message every 3 seconds

    return () => clearTimeout(simulateIncomingMessage);
  }, [selectedDoctor, consultationId]);

  return (
    <div className="flex flex-col w-full md:h-[65rem] lg:h-[46rem] h-[37rem] font-poppins md:flex-row">
      {/* Doctors List */}
      <div
        className={`w-full md:w-1/4 p-4 border-2 border-r rounded-lg shadow-lg shadow-slate-400 border-slate-200 bg-none ${
          showChat ? "hidden md:block" : ""
        }`}
      >
        <h2 className="mb-4 text-2xl font-extrabold text-slate-900">
          Pilih Dokter
        </h2>
        <div className="space-y-2">
          {doctors.map((doctor) => (
            <div
              key={doctor.id}
              className={`flex items-center p-2 rounded-md cursor-pointer shadow-md border-2 border-slate-200 transition duration-200 hover:bg-primary ${
                selectedDoctor === doctor.id ? "bg-primary" : ""
              }`}
              onClick={() => {
                setSelectedDoctor(doctor.id);
                setShowChat(true); // Show chat when a doctor is selected
              }}
            >
              <img
                src={doctor.avatar}
                alt={doctor.name}
                className="w-10 h-10 mr-3 rounded-full"
              />
              <span className="font-semibold text-slate-900">
                {doctor.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Messages List */}
      <div
        className={`relative flex flex-col flex-1 bg-none ${
          showChat ? "" : "hidden md:flex"
        }`}
      >
        <button
          className="fixed w-full p-2 text-white bg-blue-500 md:hidden"
          onClick={() => setShowChat(false)}
        >
          Back to Doctors
        </button>
        <div className="flex-1 px-4 py-2 pb-24 overflow-y-auto">
          {" "}
          {/* Add padding to prevent content from being hidden behind fixed input */}
          {selectedDoctor &&
            (messages[selectedDoctor] || []).map((message, index) => (
              <ChatMessage
                key={index}
                message={message}
                selectedDoctor={selectedDoctor}
              />
            ))}
          <div ref={messagesEndRef} />
        </div>

        {/* Preview Files */}
        {selectedFiles.length > 0 && (
          <div className="px-4 py-2 mb-a6 md:mb-2">
            {selectedFiles.map((file, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-2 mb-1 text-sm text-white bg-blue-500 rounded"
              >
                <div className="flex items-center">
                  {file.type === "image" ? (
                    <img
                      src={file.preview}
                      alt={file.file.name}
                      className="w-10 h-10 mr-2 rounded"
                    />
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 4v16h16V4H4zm4 4h8v2H8V8zm0 4h8v2H8v-2z"
                      />
                    </svg>
                  )}
                  <span>{file.file.name}</span>
                </div>
                <button
                  className="p-1 text-white bg-red-500 rounded-full focus:outline-none"
                  onClick={() => removeSelectedFile(index)}
                >
                  &times;
                </button>
              </div>
            ))}
          </div>
        )}

        {/* Message Input */}
        <div className="md:fixed  bottom-0  right-0 flex items-center p-4 border-t border-white w-screen md:w-[39rem] lg:w-[60rem] xl:w-[75rem]  ">
          <input
            type="text"
            className="flex-1 p-2 mx-2 border rounded-full shadow-sm border-slate-500 focus:outline-none focus:ring-2 focus:ring-info"
            placeholder="Ketik pesan..."
            value={messageText}
            onChange={(e) => setMessageText(e.target.value)}
            onKeyDown={handleKeyDown}
            disabled={!selectedDoctor}
          />
          <div className="flex items-center">
            <input
              type="file"
              className="hidden"
              ref={fileInputRef}
              onChange={handleFileSelect}
              multiple
            />
            <button
              className="p-2 text-white rounded-full shadow-md bg-accent hover:bg-accent-focus focus:outline-none focus:ring-2 focus:ring-accent"
              onClick={() => fileInputRef.current.click()}
              disabled={!selectedDoctor}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                />
              </svg>
            </button>
          </div>
          <button
            className="p-2 ml-2 text-white rounded-full shadow-md bg-accent hover:bg-accent-focus focus:outline-none focus:ring-2 focus:ring-accent"
            onClick={sendMessage}
            disabled={!selectedDoctor}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 12l8-8m0 0l8 8m-8-8v16"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Chat;
