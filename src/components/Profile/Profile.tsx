import React from 'react';
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {UserProfileInfoType} from "../../redux/profile-reducer";

type ProfilePropsType = {
    isOwner: boolean
    profile: UserProfileInfoType | null
    status: string
    updateStatusTC: (status: string) => void
    updateProfileInfoTC: (profile: UserProfileInfoType) => void
    savePhoto: (photo: any) => void
}

export const Profile = ( props: ProfilePropsType) => {
    return (
        <div>
            <ProfileInfo
                savePhoto={props.savePhoto}
                isOwner={props.isOwner}
                profile={props.profile}
                status={props.status}
                updateProfileInfoTC={props.updateProfileInfoTC}
                updateStatusTC={props.updateStatusTC}/>
            <MyPostsContainer/>
        </div>
    );
};

