import axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': '3e582661-3eb6-4f80-b19a-c4e42d786e8b'
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
    }
}

export const authAPI = {
    me(){
        return instance.get('auth/me')
            .then(response => response)
    },
    login(email: string, password: string, rememberMe: boolean = false){
        return instance.post('auth/login', {email, password, rememberMe})
    },
    logout(){
        return instance.delete('auth/login')
    }
}
