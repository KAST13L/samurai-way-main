import axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': 'a57175e0-51e3-4982-a51a-d064dcc76b26'
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
    },
    getUserProfile (userId: string) {
        return instance.get('profile/' + userId).then(response => response.data)
    }
}
export const authAPI = {
    me(){
        return instance.get('auth/me').then(response => response.data)
    }
}
