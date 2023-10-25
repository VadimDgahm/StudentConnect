import {v1} from 'uuid';
import {ActionTypes} from '../redux-store';
import login from '../../components/Login/Login';
import {AppDispatch} from '../../hooks/hooks';
import {appApi, LoginDataType} from '../../api/apiApp';
import {getUserTC, ProfileResponseType} from './profileReducer';
import {profileApi} from '../../api/profileApi';
import {deflateRaw} from 'zlib';
const SET_AUTH = "SET_AUTH"
export type StateAuthReducerType = {
    dataUser: ProfileResponseType
    isAuth: boolean,
    email: string | null,
    id: number | null,
    login: string | null,
    isInitialized: boolean
    captcha: null | string
}
let initialState: StateAuthReducerType = {
    dataUser: {
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
        }
    },
    isAuth: false,
    email: null,
    id: null,
    login: null,
    isInitialized: false,
    captcha: null
};
export const authReducer = (state: StateAuthReducerType = initialState, action: ActionTypes): StateAuthReducerType => {
    switch (action.type) {
        case SET_AUTH:
            return {...state,...action.payload, isAuth: action.payload.id === null ? false: true }
        case 'AUTH/CHANGE_STATUS_LOADER': {
            return {...state,isInitialized: action.isInitialized}
        }
        case "SET_ME_USER":
            return {...state, dataUser: action.data}
        case 'GET_CAPTCHA':
            return {...state,captcha: action.url}
        default:
            return state;
    }
};
export const setAuthAC = (email: string | null, id: number| null, login: string | null) => ({ type: SET_AUTH, payload: {email, id, login}}as const)
export const changeAuthStatusPreloaderAC = (isInitialized: boolean) => ({type: "AUTH/CHANGE_STATUS_LOADER" as const, isInitialized})
export const getMeUserAC = (data:ProfileResponseType) => ({type: 'SET_ME_USER' as const, data})
export const getCaptchaAC = (url: string | null) => ({type:'GET_CAPTCHA' as const, url})

export const setAuthTC = () => (dispatch: AppDispatch) => {
    appApi.me()
        .then(res => {
            if(res.data.resultCode === 0){
                const{email,id,login} = res.data.data
                dispatch(setAuthAC(email,id,login))
                dispatch(getMeUserTC(Number(id)))
            }
            else {
                dispatch(setAuthAC(null,null,null))
            }
        }).finally(() => {
        dispatch(changeAuthStatusPreloaderAC(true))
    })
}
export type getMeUserACType = ReturnType<typeof getMeUserAC>

export const getMeUserTC = (id: number) => async (dispatch: AppDispatch) => {
   let res = await profileApi.getUser(id)
    dispatch(getMeUserAC(res.data))
}
export const logoutTC = () => async (dispatch: AppDispatch) => {
    let res = await appApi.logout()
    dispatch(setAuthAC(null,null,null))
}

export const loginTC = (data: LoginDataType) =>  async (dispatch: AppDispatch) => {
        let res = await appApi.login(data)
        if(res.data.resultCode === 0){
            dispatch(setAuthTC())
        }else if(res.data.resultCode === 10){
            dispatch(captchaTC())
        }
        else{
            dispatch(getCaptchaAC(null))
            return res
        }

}
export const captchaTC = () => async (dispatch: AppDispatch) => {
    let res = await appApi.captcha()
    dispatch(getCaptchaAC(res.data.url))
}
