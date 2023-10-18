import { v1 } from "uuid";
import { ActionTypes } from "../redux-store";
import {AppDispatch} from '../../hooks/hooks';
import {profileApi} from '../../api/profileApi';
import {setAuthTC} from './authReducer';


const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

let initialState:ProfileStateType = {
    aboutMe:'',
    userId: '',
    lookingForAJob: true,
    lookingForAJobDescription:"",
    fullName: "",
    contacts: {
        github: "",
        vk: "",
        facebook: "",
        instagram: "",
        twitter: "",
        website: "",
        youtube: "",
        mainLink: "",
    },
    photos: {
        small: "",
        large: "",
    },
    posts: [],
    isLoader: true,
    status: ''
  }
export const profileReducer = ( state: ProfileStateType = initialState, action: ActionTypes):ProfileStateType => {
    switch(action.type) {
        case ADD_POST:
            let post: PostsType = {id: v1(), valuePost: action.value, like: 0,};
            return {...state, posts: [...state.posts, post]};
        case 'SET_USER_PROFILE': {
            return {...action.userProfile, posts: [],isLoader: false, status: '' }
        }
        case 'CHANGE_STATUS_PRELOADER':{
            return {...state, isLoader: action.isPreloader}
        }
        case "SET_USER_STATUS": {
            return {...state, status: action.status}
        }
        default: 
          return state;
    }
}

export const addPostAC = (value: string) => {return {type: ADD_POST, value} as const}
export const updateNewPostTextAC = (newText:string) => {return {type: UPDATE_NEW_POST_TEXT, newText} as const}
export  const setUserProfileAC= (userProfile: ProfileResponseType) => ({type: "SET_USER_PROFILE", userProfile}as const)
export const changePreloaderAC = (isLoader: boolean) => ({type: "IS_LOADER" as const, isLoader})
export const setUserStatusAC = (status: string) => ({type:"SET_USER_STATUS" as const, status})

export const getUserTC = (userId: number) => (dispatch: AppDispatch) => {
    profileApi.getUser(userId)
        .then(res => {
            dispatch(setUserProfileAC(res.data))
            dispatch(setAuthTC())
            dispatch(getUserStatusTC(userId))
        })}
export const getUserStatusTC = (userId: number) => async (dispatch: AppDispatch) => {
   let res = await profileApi.getStatus(userId)
    dispatch(setUserStatusAC(res.data))
    dispatch(changePreloaderAC(false))
}
export const updateStatusTC = (value: string) => async (dispatch: AppDispatch) => {
    try {
        await profileApi.updateStatus(value)
    }catch (e) {
      
    }

}
export type PostsType = {
    id: string;
    valuePost: string;
    like: number;
};
export type ProfileResponseType = {
    aboutMe: string
    userId: string
    lookingForAJob: boolean
    lookingForAJobDescription:string
    fullName: string
    contacts: {
        github: string
        vk: string
        facebook: string
        instagram: string
        twitter: string
        website: string
        youtube: string
        mainLink: string
    }
    photos: {
        small: string
        large: string
    }
}
export type ProfileStateType = ProfileResponseType & {
    posts: PostsType[]
    isLoader: boolean
    status: string
}
export type setUserProfileType = ReturnType<typeof setUserProfileAC>