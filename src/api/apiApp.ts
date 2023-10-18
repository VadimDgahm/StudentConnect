import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true
})

type ResponsType<T = {}> = {
    resultCode: number;
    messages: string[];
    data: T;
};


export const appApi = {
    me(){
        return instance.get(`/auth/me`)
    },
    login(data: LoginDataType){
        return instance.post<ResponsType>(`/auth/login`, data)
    },
    logout(){
        return instance.delete(`/auth/login`)
    },
    captcha() {
        return instance.get('/security/get-captcha-url')
    }
}


export type LoginDataType ={
    email: string,
    password:string,
    rememberMe: boolean,
    captcha?: boolean
}