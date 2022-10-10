import React, {useState} from 'react';
import s from "./ProfileInfo.module.css";
import {UserProfileInfoType} from "../../../redux/profile-reducer";
import {Preloader} from "../../../common/Preloader";
import {EditableSpanWithHooks} from "../ProfileStatus/ProfileStatusWithHooks";
import {SubmitHandler, useForm} from "react-hook-form";

type ProfileInfoPropsType = {
    profile: UserProfileInfoType | null
    status: string
    updateStatusTC: (status: string) => void
    isOwner: boolean
    savePhoto: (photo: any) => void
    updateProfileInfoTC: (profile: UserProfileInfoType) => void
}

export const ProfileInfo = (props: ProfileInfoPropsType) => {

    const [editMode, setEditMode] = useState<boolean>(false)

    if (!props.profile) {
        return <Preloader/>
    }

    const onPhotoSave = (e: any) => {
        if (e.target.files.length) {
            props.savePhoto(e.target.files[0])
        }
    }

    return (
        <div className={s.profileInfo}>
            <span className={s.img}>
                <img
                    src={props.profile?.photos.large || 'https://lastfm.freetls.fastly.net/i/u/300x300/8607d5df1af4d247369b1581f512b46b.jpg\''}
                    alt="hi"/>
            </span>
            <span className={s.info}>
                <div><b>Status: </b>
                    <EditableSpanWithHooks status={props.status}
                                           callback={props.updateStatusTC}
                                           isOwner={props.isOwner}/></div><hr/>
                <div><h2>ID: <span style={{color: 'red'}}>{props.profile?.userId}</span></h2>
                </div><hr/>
                {!editMode ? <div>
                    {props.isOwner && <button onClick={() => setEditMode(true)}>Edit info</button>}
                    <div><h3>Name: <span style={{color: 'red'}}>{props.profile?.fullName}</span></h3></div>
                    <hr/>
                    <div><b>About me:</b> {props.profile?.aboutMe || '---'}</div>
                    <hr/>
                    <div><b>Work?:</b> {props.profile?.lookingForAJobDescription || '---'}</div>
                    <hr/>
                </div> : <EditFormData onPhotoSave={props.savePhoto} updateProfileInfoTC={props.updateProfileInfoTC}
                                       profile={props.profile}
                                       setEditMode={setEditMode}/>}
            </span>
        </div>
    );
};

type EditFormDataType = {
    profile: UserProfileInfoType
    setEditMode: (editMode: boolean) => void
    updateProfileInfoTC: (profile: UserProfileInfoType) => void
    onPhotoSave: (photo: any) => void
}

export const EditFormData = (props: EditFormDataType) => {

    const {register, handleSubmit} = useForm<UserProfileInfoType>();
    const onSubmit: SubmitHandler<UserProfileInfoType> = data => {
        props.updateProfileInfoTC(data)
        props.setEditMode(false)
    };

    return <div>
        <form onSubmit={handleSubmit(onSubmit)}>
            <button type={'submit'}>save changes</button>
            <div>
                <h3>Name: <input {...register("fullName", {required: true, maxLength: 20})} /></h3>
            </div><hr/>
            <div>
                <b>About me :</b> <input {...register("aboutMe", {required: true, maxLength: 200})} />
            </div><hr/>
            <div>
                <b>Work?:</b> <input {...register("lookingForAJobDescription", {required: true, maxLength: 200})} />
            </div><hr/>
        </form>
        <span><b>You want change image?: </b><input type={'file'}
                                                    onChange={props.onPhotoSave}/></span>
    </div>
}
