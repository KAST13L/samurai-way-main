import React, {useState} from 'react';
import {Post} from "./Post/Post";

export const MyPosts = () => {

    const [posts, setPosts] = useState([
        {message: "Hello my fried!!!"},
        {message: "What are you doing?"},
        {message: "Lets go to play football, dear Davyd!"}
    ])
    const [post, setPost] = useState('')

    const createPost = () => {
        const newPost = {
            message: post
        }
        setPosts([...posts, newPost])
        setPost('')
    }

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
                <button onClick={createPost}>Create comment</button>
            </div>
            <div>
                {posts.map((m, index) => <div key={index+1}>
                    <Post message={m.message}/>
                </div>)}
            </div>
        </div>
    );
};

