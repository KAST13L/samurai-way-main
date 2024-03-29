import axios from "axios";
import {UserProfileInfoType} from "../redux/profile-reducer";

const instance = axios.create({
        baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': 'bdde517a-46a7-467a-aaf3-bd81b358e84b'
    }
})


export const usersAPI = {
    getUsers (currentPage: number, pageSize: number){
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },
    followAxios (id: number) {
        return instance.post(`follow/${id}`)
            .then(response => response.data )
    },
    unfollowAxios (id: number) {
        return instance.delete(`follow/${id}`)
            .then(response => response.data )
    }
}

export const profileAPI = {
    getUserProfile (userId: string) {
        return instance.get('profile/' + userId)
            .then(response => response.data)
    },
    getStatus (userId: string) {
        return instance.get('profile/status/' + userId)
            .then(response => response.data)
    },
    updateUserStatus (status: string) {
        return instance.put('profile/status/', {status})
            .then(response => response.data)
    },
    updateUserInfo (profile: UserProfileInfoType) {
        return instance.put('profile/', profile)
            .then(response => response.data)
    },

    savePhoto (photoFile: any) {
        const formData = new FormData()
        formData.append('image', photoFile)
        return instance.put('profile/photo' , formData, {
            headers:{
                'Content-Type': 'multipart/form-data'
            }
        })
    }
}

export const authAPI = {
    me(){
        return instance.get('auth/me')
            .then(response => response)
    },
    login(email: string, password: string, rememberMe: boolean = false, captcha: string | null){
        return instance.post('auth/login', {email, password, rememberMe, captcha})
    },
    logout(){
        return instance.delete('auth/login')
    },
    getCaptcha(){
        return instance.get('security/get-captcha-url')
    }
}
