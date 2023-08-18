import { v1 } from "uuid";
import { ActionTypes } from "../redux-store";


const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

let initialState:ProfileStateType = {
    posts: [
      { id: v1(), valuePost: "hi, it's my first post", like: 0 },
      { id: v1(), valuePost: "how are you?", like: 4 },
    ],
    newPostText: 'newPost'
  }
export const profileReducer = ( state: ProfileStateType = initialState, action: ActionTypes) => {

    switch(action.type) {
        case ADD_POST:
            let post: PostsType = {id: v1(), valuePost: state.newPostText, like: 0,};
            return {...state, posts: [...state.posts, post], newPostText: ''};
        case UPDATE_NEW_POST_TEXT:
            return {...state, newPostText: action.newText};
        default: 
          return state;
    }
}

export const addPostAC = () => {return {type: ADD_POST} as const}
export const updateNewPostTextAC = (newText:string) => {return {type: UPDATE_NEW_POST_TEXT, newText} as const}

export type PostsType = {
  id: string;
  valuePost: string;
  like: number;
};
export type ProfileStateType = {
  posts: PostsType[];
  newPostText: string
}