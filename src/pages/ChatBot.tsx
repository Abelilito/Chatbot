import { useChatStore } from "@/store/useChatStore";
import ChatForm from "../components/ChatFrom";
import ChatMessages from "../components/ChatMessages";

export const ChatBot = () => {
  const messages = useChatStore((state) => state.messages);

  function handleShowMessages() {
    if (messages.length > 0) {
      return <ChatMessages />;
    }
  }

  return (
    <>
      <div className="flex-1 items-center flex flex-col gap-10">
        {handleShowMessages()}
        <div
          className={
            "bg-white flex justify-center pb-[5rem] w-full " +
            (messages.length > 0 && "fixed bottom-0")
          }
        >
          <ChatForm />
        </div>
      </div>
    </>
  );
};
