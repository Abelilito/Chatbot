export interface ChatType {
  id: number;
  user_name: string;
  text: string;
}

type ChatStates = {
  messages: Array<ChatType>;
};

type ChatActions = {
  addMessage: (user_name: string, text: string) => void;
  clearChat: () => void;
};

export type ChatStoreType = ChatStates & ChatActions;
