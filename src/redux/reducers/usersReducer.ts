import {ActionTypes} from "../redux-store";
import {AppDispatch} from '../../hooks/hooks';
import {usersApi} from '../../api/usersApi';

let initialState: UsersStateType = {
    users: [],
    pageSize: 5,
    totalUserCount: 105,
    currentPage: 1,
    isPreloader: false
}
export const usersReducer = (state: UsersStateType = initialState, action: ActionTypes) => {

    switch (action.type) {
        case "FOLLOWED":
            return {...state, users: state.users.map(u => u.id === action.userId ? {...u, followed: !u.followed} : u)};
        case "SET_USERS":
            return {...state, users: action.users}
        case "CHANGE_CURRENT_PAGE":
            return {...state, currentPage: action.pageNumber}
        case "SET_TOTAL_COUNT":
            return {...state, totalUserCount: action.numberUsers}
        case "CHANGE_STATUS_PRELOADER":
            return {...state, isPreloader: action.isPreloader}
        default:
            return state;
    }
}

export const followedUserAC = (userId: number) => ({type: "FOLLOWED", userId} as const);
export const setUsersAC = (users: UserType[]) => ({type: "SET_USERS", users} as const);
export const changeCurrentPageAC = (pageNumber: number) => ({type: "CHANGE_CURRENT_PAGE", pageNumber}as const)
export const setTotalCountAC = (numberUsers: number) => ({type: "SET_TOTAL_COUNT", numberUsers} as const)
export const changeStatusPreloaderAC = (isPreloader: boolean) => ({type:"CHANGE_STATUS_PRELOADER", isPreloader}as const)


export const getUsersTC = (currentPage: number, pageUsers: number) => (dispatch:AppDispatch) => {
    usersApi.getUsers(currentPage,pageUsers)
        .then(res => {
            dispatch(setTotalCountAC(res.data.totalCount))
            dispatch(setUsersAC(res.data.items))

        }).finally(() => {
        dispatch(changeStatusPreloaderAC(false))
    })
}
export type UserType = {
    "name": string,
    "id": number,
    "uniqueUrlName": string | null,
    "photos": {
        "small": string | null,
        "large": string | null
    },
    "status": string | null,
    "followed": boolean
}

export type UsersStateType = {
    users: UserType[]
    pageSize: number
    totalUserCount: number
    currentPage: number
    isPreloader: boolean

}