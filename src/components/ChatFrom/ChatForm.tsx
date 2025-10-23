import { useFormik } from "formik";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useChatStore } from "@/store/useChatStore";

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
    <>
      <form
        onSubmit={formik.handleSubmit}
        className="w-[50%] flex justify-center"
      >
        <div className="grid w-full max-w-sm items-center gap-3">
          <Textarea
            placeholder="Ecris ton message ici"
            name="messageContent"
            value={formik.values.messageContent}
            onChange={(e) => {
              formik.handleChange(e);
            }}
          />

          <Button variant="outline" type="submit">
            Envoyer
          </Button>
        </div>
      </form>
    </>
  );
};
