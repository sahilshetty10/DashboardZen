import React, { useState, useEffect, useRef } from "react";

const ChatBox = () => {
  const [messages, setMessages] = useState([
    { user: false, text: "Hi! I'm your AI assistant. How can I assist you?" },
  ]);
  const [query, setQuery] = useState("");
  const [queryDisabled, setQueryDisabled] = useState(false);

  const messagesEndRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    let newMessage = { user: true, text: query };
    setMessages((prevMessages) => [...prevMessages, newMessage]);
    getAiResponse(query);
    setQuery("");
    setQueryDisabled(true);
  };

  const getAiResponse = async (query) => {
    try {
      const response = await fetch(
        "https://901de120-80e1-47be-b8a5-bbbc8f2fc452-00-2h1a0hsuensjs.riker.replit.dev/api/chatgpt/ask",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ question: query }),
        },
      );
      const data = await response.json();
      console.log(data);
      let newMessage = { user: false, text: data.data.answer };
      setMessages((prevMessages) => [...prevMessages, newMessage]);
      setQueryDisabled(false);
    } catch (err) {
      console.error(err);
    }
  };
  // https://901de120-80e1-47be-b8a5-bbbc8f2fc452-00-2h1a0hsuensjs.riker.replit.dev/api/chatgpt/ask

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="bg-container row-span-4 flex flex-col justify-between gap-4">
      <h2 className="container-title">Chat Box</h2>
      <div className="chat-container flex h-full flex-col gap-4 overflow-auto">
        {messages.map((message, index) => (
          <p
            key={index}
            className={
              message.user
                ? "w-fit self-end rounded-[15px] bg-green-400 p-4"
                : "w-fit self-start rounded-[15px] bg-blue-400 p-4"
            }
          >
            {message.text}
          </p>
        ))}
        <div ref={messagesEndRef} />
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="w-full rounded-[15px] border bg-slate-100 px-8 py-4"
          placeholder="Ask something"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          id="query-box"
          {...(queryDisabled && { disabled: true })}
        />
      </form>
    </div>
  );
};

export default ChatBox;
