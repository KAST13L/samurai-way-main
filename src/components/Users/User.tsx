import React from 'react';
import s from "./Users.module.css";
import {NavLink} from "react-router-dom";
import {UserType} from "../../redux/users-reducer";

type UserPropsType = {
    followingInProgress: Array<number>
    unfollowTC: (id: number) => void
    followTC: (id: number) => void
} & UserType

export const User: React.FC<UserPropsType> = (props) => {

    return <div className={s.usersArray}>
        <div style={{textAlign: 'center', padding: '10px'}}>

            <NavLink to={`profile/${props.id}`}>
                <img
                    src={props.photos.small ? props.photos.small : 'https://lastfm.freetls.fastly.net/i/u/300x300/8607d5df1af4d247369b1581f512b46b.jpg'}
                    alt="hi"/>
            </NavLink>
            <div>
                {props.followed
                    ? <button disabled={props.followingInProgress.some(id => id === props.id)} onClick={() => {
                        props.unfollowTC(props.id)
                    }}>Unfollow</button>
                    : <button disabled={props.followingInProgress.some(id => id === props.id)} onClick={() => {
                        props.followTC(props.id)
                    }}>follow</button>
                }
            </div>
        </div>
        <div className={s.userInfo}>
            <div>Name: {props.name}</div>
            <div>ID: {props.id}</div>
            <div>{props.status}</div>
        </div>
    </div>
}

