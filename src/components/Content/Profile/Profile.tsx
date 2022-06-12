import React from 'react';
import {MyPosts} from "./MyPosts/MyPosts";
import {PostDataType} from "../../../redux/state";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";

type ProfilePropsType = {
    postsData: Array<PostDataType>
}

export const Profile: React.FC<ProfilePropsType> = (props ) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts postsData={props.postsData}/>
        </div>
    );
};

