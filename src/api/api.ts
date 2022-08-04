import axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': 'a57175e0-51e3-4982-a51a-d064dcc76b26'
    }
})

export const getUsers = (currentPage: number, pageSize: number) => {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`)
        .then(response => response.data)
}

export const followAxios = (id: number) => {
    return instance.post(`follow/${id}`)
        .then(response => response.data )
}
export const unfollowAxios = (id: number) => {
    return instance.delete(`follow/${id}`)
        .then(response => response.data )
}
export const getUserProfile = (userId: string) => {
    return instance.get('profile/' + userId).then(response => response.data)
}