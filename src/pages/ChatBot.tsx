import { useChatStore } from "@/store/useChatStore";
import ChatForm from "../components/ChatFrom";
import ChatMessages from "../components/ChatMessages";
import ClearChat from "@/components/ClearChat";

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
        <div className="flex justify-end w-[50%]">
          <ClearChat />
        </div>
        {handleShowMessages()}
        <ChatForm />
      </div>
    </>
  );
};
