// import { v1 } from "uuid";
// import { addPostAC, profileReducer, updateNewPostTextAC } from "./reducers/profileReducer";
// import { addMessageAC, dialogsReducer, updateNewMessageTextAC } from "./reducers/dialogsReducer";

export type StoreType = {
  _callSubscriber: () => void
  subscribe: (fn: () => void) => void
}

// export type ActionTypes = 
//   ReturnType<typeof addPostAC> 
// | ReturnType<typeof updateNewPostTextAC> 
// | ReturnType<typeof addMessageAC>
// | ReturnType<typeof updateNewMessageTextAC>

// let store: StoreType = {
//   _state:  {
//     profile: {
//       posts: [
//         { id: v1(), valuePost: "hi, it's my first post", like: 0 },
//         { id: v1(), valuePost: "how are you?", like: 4 },
//       ],
//       newPostText: 'newPost'
//     },
  
//     dialogs: {
//       dialogsItem: [
//         { id: v1(), name: "Vanya" },
//         { id: v1(), name: "Dima" },
//         { id: v1(), name: "Vitya" },
//         { id: v1(), name: "Jenya" },
//         { id: v1(), name: "Polina" },
//       ],
//       messages: [
//         { id: v1(), message: "hi" },
//         { id: v1(), message: "hello" },
//         { id: v1(), message: "how are you?" },
//         { id: v1(), message: "where are you from?" },
//         { id: v1(), message: "i am from Belarus" },
//         { id: v1(), message: "hi" },
//       ],
//       newMessageText: 'Hello'
//     },
//   },
//   _callSubscriber: () => {},
//   getState() { return this._state},
//   subscribe(fn) {
//     this._callSubscriber = fn
//  },
//  dispatch(action) {
//   this._state.profile = profileReducer(this._state.profile, action)
//   this._state.dialogs = dialogsReducer(this._state.dialogs, action)
//   this._callSubscriber();
//  }
// }

// export type PostsType = {
//   id: string;
//   valuePost: string;
//   like: number;
// };
// export type DialogsItemType = {
//   id: string;
//   name: string;
// };

// export type MessagesType = {
//   id: string;
//   message: string;
// };

// export type DialogsStateType = {
//   dialogsItem: DialogsItemType[];
//   messages: MessagesType[];
//   newMessageText:string;
// };
// export type ProfileStateType = {
//   posts: PostsType[];
//   newPostText: string
// }

// export type StateType = {
//   profile: ProfileStateType
//   dialogs: DialogsStateType
// };

// export default store