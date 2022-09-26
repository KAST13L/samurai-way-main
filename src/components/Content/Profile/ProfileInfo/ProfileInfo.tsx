import React from 'react';
import s from "./ProfileInfo.module.css";
import {UserProfileInfoType} from "../../../../redux/profile-reducer";
import {Preloader} from "../../../../common/Preloader";
import {ProfileStatus} from "../ProfileStatus/ProfileStatus";
import {ProfileStatusWithHooks} from "../ProfileStatus/ProfileStatusWithHooks";

type ProfileInfoPropsType = {
    profile: UserProfileInfoType | null
    status: string
    updateStatusTC: (status: string) => void
}

export const ProfileInfo = (props: ProfileInfoPropsType) => {
    if (!props.profile) {
        return <Preloader/>
    }
    
    return (
        <div className={s.profileInfo}>
            <span className={s.img}>
                <img
                    src={props.profile?.photos.large || 'https://lastfm.freetls.fastly.net/i/u/300x300/8607d5df1af4d247369b1581f512b46b.jpg\''}
                    alt="hi"/>
            </span>
            <span className={s.info}>
                <div><h2>ID: <span style={{color: 'red'}}>{props.profile?.userId}</span></h2></div><hr/>
                <div><h3>Name: <span style={{color: 'red'}}>{props.profile?.fullName}</span></h3></div><hr/>
                <div><b>Status:</b> <ProfileStatusWithHooks status={props.status} updateStatusTC={props.updateStatusTC}/></div><hr/>
                <div><b>About me:</b> {props.profile?.aboutMe}</div><hr/>
                <div><b>Work?:</b> {props.profile?.lookingForAJobDescription}</div><hr/>
            </span>
        </div>
    );
};