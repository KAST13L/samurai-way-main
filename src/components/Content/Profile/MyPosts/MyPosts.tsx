import React, {useState} from 'react';
import {Post} from "./Post/Post";
import {PostDataType} from "../../../../redux/state";

type MyPostsPropsType = {
    postsData: Array<PostDataType>
}

export const MyPosts: React.FC<MyPostsPropsType> = (props) => {

    const [posts, setPosts] = useState(props.postsData)
    const [post, setPost] = useState('')

    const createPost = () => {
        const newPost = {
            message: post
        }
        setPosts([...posts, newPost])
        setPost('')
    }

    let postsElements = posts.map((m, index) => <div key={index + 1}>
        <Post message={m.message}/>
    </div>)

    return (
        <div>
            <div>
                <input
                    type={"text"}
                    value={post}
                    onChange={event => setPost(event.target.value)}
                    placeholder={'post body'}
                />
            </div>
            <div>
                <button disabled={!post} onClick={createPost}>Create comment</button>
            </div>
            <div>
                {postsElements}
            </div>
        </div>
    );
};

