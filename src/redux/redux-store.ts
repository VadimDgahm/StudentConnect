import { combineReducers, createStore } from "redux";
import { addPostAC, profileReducer, updateNewPostTextAC } from "./reducers/profileReducer";
import { addMessageAC, dialogsReducer, updateNewMessageTextAC } from "./reducers/dialogsReducer";
import { addNewNews, newsReducer } from "./reducers/newsReducer";

let reducers = combineReducers(
    {
        dialogs: dialogsReducer,
        profile: profileReducer,
        news: newsReducer
    }
)
export const store = createStore(reducers)
export type RootStore = typeof store
export type RootState = ReturnType<typeof store.getState>
export type ActionTypes = 
  ReturnType<typeof addPostAC> 
| ReturnType<typeof updateNewPostTextAC> 
| ReturnType<typeof addMessageAC>
| ReturnType<typeof updateNewMessageTextAC>
| ReturnType<typeof addNewNews>