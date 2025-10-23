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
      <div
        className="
        border border-solid border-stone-200 w-[50%] rounded-2xl p-4 flex flex-col gap-8 h-[20rem] overflow-auto 
      "
      >
        {messages.map((msg, index) => (
          <div
            key={index}
            className={
              "w-full flex " +
              (msg.user_name === "Human" ? "justify-end" : "justify-start")
            }
            ref={chatBoxMessage}
          >
            <div className="w-[50%]">
              <div
                className={
                  "p-[10px] rounded-2xl font-sm " +
                  (msg.user_name === "Human"
                    ? "bg-blue-600 text-white text-start"
                    : "text-neutral-800 bg-stone-100")
                }
              >
                {msg.text}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
