import React from 'react';
import {Post} from "./Post/Post";
import {PostDataType} from "../../../../redux/state";

type MyPostsPropsType = {
    postsData: Array<PostDataType>
    addPost: () => void
    onChangeHandler: (text: string) => void
}


export const MyPosts: React.FC<MyPostsPropsType> = (props) => {

    let newPostText  = React.createRef<HTMLTextAreaElement>()
    const onAddPost = () => {
        if(newPostText.current) {
            props.addPost()
            newPostText.current.value = ''
        }
    }

    const onChangeHandler = () => {
        if(newPostText.current) {
            let text = newPostText.current.value
            props.onChangeHandler(text)
        }
    }

    let postsElements = props.postsData.map((m, index) => <div key={index + 1}>
        <Post message={m.message}/>
    </div>)

    return (
        <div>
            <div>
                <textarea
                    ref={newPostText}
                    onChange={onChangeHandler}
                    placeholder={'post body'}
                />
            </div>
            <div>
                <button onClick={onAddPost}>Create comment</button>
            </div>
            <div>
                {postsElements}
            </div>
        </div>
    );
};

