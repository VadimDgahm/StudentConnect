import { v1 } from "uuid";
import { ActionTypes } from "../redux-store";

const UPDATE_NEW_MESSAGE_TEXT = "UPDATE_NEW_MESSAGE_TEXT";
const ADD_MESSAGE = "ADD_MESSAGE";

let initialState: DialogsStateType = {
  dialogsItem: [
    { id: v1(), name: "Vanya" },
    { id: v1(), name: "Dima" },
    { id: v1(), name: "Vitya" },
    { id: v1(), name: "Jenya" },
    { id: v1(), name: "Polina" },
  ],
  messages: [
    { id: v1(), message: "hi" },
    { id: v1(), message: "hello" },
    { id: v1(), message: "how are you?" },
    { id: v1(), message: "where are you from?" },
    { id: v1(), message: "i am from Belarus" },
    { id: v1(), message: "hi" },
  ],
  newMessageText: "Hello",
};
export const dialogsReducer = (
  state: DialogsStateType = initialState,
  action: ActionTypes
): DialogsStateType => {
  switch (action.type) {
    case ADD_MESSAGE:
      let body: MessagesType = { id: v1(), message: state.newMessageText };
      return { ...state, messages: [...state.messages, body], newMessageText: '' };
    case UPDATE_NEW_MESSAGE_TEXT:
      return { ...state, newMessageText: action.newMessage };
    default:
      return state;
  }
};

export const addMessageAC = () => ({ type: ADD_MESSAGE } as const);
export const updateNewMessageTextAC = (newMessage: string) =>
  ({ type: UPDATE_NEW_MESSAGE_TEXT, newMessage } as const);

export type DialogsItemType = {
  id: string;
  name: string;
};

export type MessagesType = {
  id: string;
  message: string;
};
export type DialogsStateType = {
  dialogsItem: DialogsItemType[];
  messages: MessagesType[];
  newMessageText: string;
};
