import {deletePostAC, ProfileReducer, UserProfileInfoType} from "./profile-reducer";

const initialState = {
    postsData: [
        {id: 1, message: "Hello my fried!!!"},
        {id: 2, message: "What are you doing?"},
        {id: 3, message: "Lets go to play football, dear Davyd!"}
    ],
    profile: null as UserProfileInfoType | null,
    status: ''
}

it('length post data should be decremented', () => {
    let action = deletePostAC(2)

    let newState = ProfileReducer(initialState, action)

    expect(newState.postsData.length).toBe(2)
})