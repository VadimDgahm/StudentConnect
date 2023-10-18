import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true
})


export const profileApi = {
    getUser(userId: number){
        return instance.get(`/profile/${userId}`)
    },
    getStatus (userId:number) {
        return instance.get(`/profile/status/${userId}`)
    },
    updateStatus(status: string) {
        return instance.put('profile/status', {status})
    }
}

