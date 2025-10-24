import { useFormik } from "formik";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useChatStore } from "@/store/useChatStore";
import { SendHorizontal } from "lucide-react";
import ClearChat from "../ClearChat";

export const ChatForm = () => {
  const addMessage = useChatStore((state) => state.addMessage);

  const formik = useFormik({
    initialValues: {
      messageContent: "",
    },
    validateOnChange: true,
    onSubmit: (values) => {
      formik.resetForm();
      addMessage("Human", values.messageContent);
    },
  });

  return (
    <div className="flex flex-col w-full items-center">
      <div className="text-end w-full lg:w-[40%] mb-8 px-4 md:px-[7rem] lg:px-[0]">
        <ClearChat />
      </div>

      <form
        onSubmit={formik.handleSubmit}
        className="w-full lg:w-[40%] flex justify-center"
      >
        <div
          className="
          grid w-full items-center gap-3 border border-solid border-[#F0F0F0] p-4 rounded-[28px] mx-4 md:mx-[7rem] lg:mx-[0]
        "
        >
          <Textarea
            placeholder="Ecris ton message ici"
            name="messageContent"
            value={formik.values.messageContent}
            className="border-none shadow-none resize-none focus:border-none focus-visible:ring-offset-0 focus-visible:ring-0"
            onChange={(e) => {
              formik.handleChange(e);
            }}
          />

          <div className="text-end">
            <Button
              variant="outline"
              type="submit"
              className="size-max rounded-full bg-[#E8E8E8] hover:bg-white hover:text-blue-600 hover:border-blue-600"
            >
              <SendHorizontal />
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};
