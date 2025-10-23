import { useChatStore } from "@/store/useChatStore";
import { Button } from "../ui/button";
import { X } from "lucide-react";

export const ClearChat = () => {
  const messages = useChatStore((state) => state.messages);

  function clear(messages) {
    messages.length = 0;
  }
  console.log(messages);

  if (messages.length > 0) {
    return (
      <>
        <Button
          className="
          rounded-full py-[20px] px-8 bg-red-900 hover:bg-red-800 shadow-[2px_1px_2px_gray] 
          active:shadow-[0_0_0_white]
        "
          onClick={() => clear(messages)}
        >
          <X />
        </Button>
      </>
    );
  }
};
