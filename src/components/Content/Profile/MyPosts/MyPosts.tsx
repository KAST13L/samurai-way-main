import React from 'react';
import {Post} from "./Post/Post";
import {MyPostsPropsType} from "./MyPostsContainer";
import {Field, InjectedFormProps, reduxForm} from "redux-form";

export const MyPosts = React.memo((props: MyPostsPropsType) => {

    console.log('render')

    const onSubmit = (formData: AddPostFormType) => {
        props.addPost(formData.postMessage)
    }

    let postsElements = props.profilePage.postsData.map((m, index) => <div key={index + 1}>
        <Post message={m.message}/>
    </div>)

    return (
        <div>
            <div>
                <AddNewPostReduxForm onSubmit={onSubmit}/>
            </div>
            <div>
                {postsElements}
            </div>
        </div>
    );
})

type AddPostFormType = {
    postMessage: string
}

const AddPostForm: React.FC<InjectedFormProps<AddPostFormType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field name={'postMessage'} component={'input'} placeholder={'post message...'}/>
            <button>Post</button>
        </form>
    )
}

const AddNewPostReduxForm = reduxForm<AddPostFormType>({form: 'addNewPost'})(AddPostForm)


