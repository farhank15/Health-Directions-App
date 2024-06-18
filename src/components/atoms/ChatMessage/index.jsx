import React from "react";

export function ChatMessage({ message, selectedDoctor }) {
  const isUser = message.sender === "user";
  const messageClass = isUser
    ? "bg-primary text-base-100 "
    : "bg-secondary text-neutral";
  const alignmentClass = isUser ? "justify-end" : "justify-start";

  return (
    <div className={`flex mt-10 my-2 ${alignmentClass}`}>
      {!isUser && (
        <img
          src={`/avatar${selectedDoctor === "doctor1" ? "1" : "2"}.jpg`}
          alt={message.sender}
          className="w-8 h-8 mr-2 rounded-full"
        />
      )}
      <div
        className={`p-2 rounded-lg shadow-lg shadow-slate-300 ${messageClass} max-w-xs break-words`}
      >
        {message.files && message.files.length > 0 && (
          <div className="mt-1 text-xs text-gray-700">
            <strong>Files:</strong>
            <ul>
              {message.files.map((file, index) => (
                <li key={index} className="flex items-center mb-1">
                  {file.type === "image" ? (
                    <img
                      src={file.url}
                      alt={file.name}
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
                  <a
                    href={file.url}
                    download={file.name}
                    className="text-blue-500 underline"
                  >
                    {file.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
        <div className="mt-1 mb-1 text-sm font-medium break-words">
          {message.text}
        </div>
        <div className="text-xs text-right opacity-75">
          {new Date(message.timestamp).toLocaleTimeString()}
        </div>
      </div>
    </div>
  );
}
