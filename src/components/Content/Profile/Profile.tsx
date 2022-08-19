import React from 'react';
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {UserProfileInfoType} from "../../../redux/profile-reducer";

type ProfilePropsType = {
    profile: UserProfileInfoType | null
    status: string
    updateStatusTC: (status: string) => void
}

export const Profile = ( props: ProfilePropsType) => {
    return (
        <div>
            <ProfileInfo profile={props.profile} status={props.status} updateStatusTC={props.updateStatusTC}/>
            <MyPostsContainer/>
        </div>
    );
};

