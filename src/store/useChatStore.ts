import { create } from "zustand";
import type { ChatStoreType } from "../types/chatStoreType";

export const useChatStore = create<ChatStoreType>((set) => ({
  messages: [],
  addMessage: (user_name, text) =>
    set((state) => {
      let newMsg = {
        id:
          state.messages.length > 0
            ? state.messages[state.messages.length - 1].id + 1
            : 1,
        user_name: user_name,
        text: text,
      };
      return {
        messages: [...state.messages, newMsg],
      };
    }),
  clearChat: () =>
    set((state) => ({
      messages: (state.messages = []),
    })),
}));
