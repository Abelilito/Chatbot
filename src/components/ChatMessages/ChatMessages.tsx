import { useChatStore } from "@/store/useChatStore";
import { useEffect, useRef } from "react";

export const ChatMessages = () => {
  const messages = useChatStore((state) => state.messages);
  const addMessage = useChatStore((state) => state.addMessage);
  const chatBoxMessage = useRef<null | HTMLDivElement>(null);
  let botMsgs = ["Hello, comment vas tu", "REPOND!!!", "Alors...", "CIAO!!"];

  useEffect(() => {
    let interval = setInterval(() => {
      const random = Math.floor(botMsgs.length * Math.random());
      addMessage("Bot", botMsgs[random]);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  if (chatBoxMessage.current !== null) {
    chatBoxMessage.current.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <>
      <div className="flex flex-col gap-8 mb-[18rem] overflow-auto p-4 w-full md:w-[40%]">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={
              " flex " +
              (msg.user_name === "Human" ? "justify-end" : "justify-start")
            }
            ref={chatBoxMessage}
          >
            <div
              className={
                "p-[10px] rounded-2xl font-sm " +
                (msg.user_name === "Human"
                  ? "bg-blue-600 text-white text-start"
                  : "text-neutral-800")
              }
            >
              {msg.text}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
