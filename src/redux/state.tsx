export type PostDataType = {
    message: string
}
export type MessagesDataType = {
    id: number
    message: string
}
export type DialogsDataType = {
    name: string
    id: number
    urlId: string
    imgUrl: string
}

export type DialogsPageType = {
    dialogsData: Array<DialogsDataType>
    messagesData: Array<MessagesDataType>
}
export type ProfilePageType = {
    postsData: Array<PostDataType>
}

export type StateDataType = {
    dialogsPage: DialogsPageType
    profilePage: ProfilePageType
}
export type StoreDataType = {
    _state: StateDataType
}

export const store = {
    _state: {
        dialogsPage: {
            dialogsData: [
                {name: 'Bagira', id: 1, urlId:'1', imgUrl:'https://upload.wikimedia.org/wikipedia/commons/1/1c/Misha_Collins_by_Gage_Skidmore.jpg'},
                {name: 'Lili', id: 2, urlId:'2', imgUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhoAszGJIxLF8UX-vwdCgrb-9dKZ0Ct5tqrZm_bgJ9OJ0DYc2Kodj2x492UCThtsAMTNo&usqp=CAU'},
                {name: 'Davyd', id: 3, urlId:'3', imgUrl:'https://images4.fanpop.com/image/photos/19300000/Misha-Collins-at-LACon-2011-misha-collins-19347605-667-1000.jpg'},
                {name: 'Yana', id: 4, urlId:'4', imgUrl:'https://images4.fanpop.com/image/photos/19300000/Misha-Collins-at-LACon-2011-misha-collins-19347605-667-1000.jpg'},
                {name: 'Roki Balbo', id: 5, urlId:'5', imgUrl:'https://upload.wikimedia.org/wikipedia/commons/1/1c/Misha_Collins_by_Gage_Skidmore.jpg'}
            ],
            messagesData: [
                {id: 1, message: 'To configure the message, edit the default subject line and message body that are provided.'},
                {id: 2, message: 'With the aid of this number, you can generate an error message text.'},
                {id: 3, message:'To send an SMS message to a subscriber who has the service activated, you need to type the text of the message and the subscriber number of the addressee in the special form in the right part of the web page.' },
                {id: 4, message:'The parameters allow setting recipient\'s WM-ID, subject and message text.' }
            ]
        },
        profilePage: {
            postsData: [
                { message: "Hello my fried!!!"},
                { message: "What are you doing?"},
                { message: "Lets go to play football, dear Davyd!"}
            ]
        }
    }
}