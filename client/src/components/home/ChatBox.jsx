import React, { useState, useEffect, useRef } from "react";

const ChatBox = () => {
  const [messages, setMessages] = useState([]);
  const [query, setQuery] = useState("");
  const [queryDisabled, setQueryDisabled] = useState(false);

  const messagesEndRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    let message = { user: true, text: query };
    Test([...messages, message]);
    setMessages([...messages, message]);
    setQuery("");
    setQueryDisabled(true);
  };

  // testing api

  async function Test(messages) {
    let prompt =
      "This is a conversation between User and Llama, a friendly chatbot. Llama is helpful, kind, honest, good at writing, and never fails to answer any requests immediately and with precision.";
    messages.forEach((message) => {
      if (message.user) {
        prompt += ` \n\nUser: ${message.text}`;
      } else {
        prompt += ` \n\nLlama: ${message.text}`;
      }
    });
    prompt += " \n\nLlama: ";
    let payload = {
      stream: false,
      n_predict: 400,
      temperature: 0.7,
      stop: ["</s>", "Llama:", "User:"],
      repeat_last_n: 256,
      repeat_penalty: 1.18,
      top_k: 40,
      top_p: 0.95,
      min_p: 0.05,
      tfs_z: 1,
      typical_p: 1,
      presence_penalty: 0,
      frequency_penalty: 0,
      mirostat: 0,
      mirostat_tau: 5,
      mirostat_eta: 0.1,
      grammar: "",
      n_probs: 0,
      min_keep: 0,
      image_data: [],
      cache_prompt: true,
      api_key: "",
      slot_id: 0,
      prompt: prompt
    };
    let response = await fetch("http://127.0.0.1:8080/completion", {
      method: "POST",
      body: JSON.stringify(payload),
    });
    let data = await response.json();
    let answer = data.content;
    setMessages([...messages, { user: false, text: answer }]);
    setQueryDisabled(false);
  }
  // done testing api

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
