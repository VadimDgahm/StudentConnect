import {RootState} from '../redux/redux-store';

export const selectors = {
    isAuth: (state: RootState) => state.auth.isAuth,
    userLogin: (state: RootState) => state.auth.login,
    userId: (state: RootState) => state.profile.userId,
    userData: (state: RootState) => state.auth.dataUser,
    captcha: (state: RootState) => state.auth.captcha
}
