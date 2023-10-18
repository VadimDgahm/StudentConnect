import {applyMiddleware, combineReducers, createStore} from 'redux';
import {
        addPostAC,
        changePreloaderAC,
        profileReducer,
        setUserProfileType, setUserStatusAC,
        updateNewPostTextAC
} from './reducers/profileReducer';
import {addMessageAC, dialogsReducer, updateNewMessageTextAC} from "./reducers/dialogsReducer";
import {addNewNews, newsReducer} from "./reducers/newsReducer";
import {
        changeCurrentPageAC,
        changeStatusPreloaderAC,
        followedUserAC,
        setTotalCountAC,
        setUsersAC,
        usersReducer
} from './reducers/usersReducer';
import {
        authReducer,
        changeAuthStatusPreloaderAC,
        getCaptchaAC,
        getMeUserACType,
        setAuthAC
} from './reducers/authReducer';
import thunk from 'redux-thunk';

let reducers = combineReducers(
    {
        dialogs: dialogsReducer,
        profile: profileReducer,
        news: newsReducer,
        usersPage: usersReducer,
        auth: authReducer
    }
)
export const store = createStore(reducers,applyMiddleware(thunk))
export type RootState = ReturnType<typeof store.getState>
export type ActionTypes = 
  ReturnType<typeof addPostAC> 
| ReturnType<typeof updateNewPostTextAC> 
| ReturnType<typeof addMessageAC>
| ReturnType<typeof updateNewMessageTextAC>
| ReturnType<typeof addNewNews>
| ReturnType<typeof followedUserAC>
| ReturnType<typeof setUsersAC>
| ReturnType<typeof changeCurrentPageAC>
| ReturnType<typeof setTotalCountAC>
| setUserProfileType
| ReturnType<typeof setAuthAC>
| ReturnType<typeof changeStatusPreloaderAC>
|ReturnType<typeof changePreloaderAC>
| ReturnType<typeof changeAuthStatusPreloaderAC>
| ReturnType<typeof setUserStatusAC>
| getMeUserACType
| ReturnType<typeof getCaptchaAC>