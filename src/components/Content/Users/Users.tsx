import React from 'react';
import s from "./Users.module.css";
import {UserType} from "../../../redux/users-reducer";
import {NavLink} from "react-router-dom";
import {followAxios, unfollowAxios} from "../../../api/api";

type UsersPropsType = {
    onPageChanged: (page: number) => void
    follow: (id: number) => void
    unfollow: (id: number) => void
    totalUserCount: number
    users: Array<UserType>
    pageSize: number
    currentPage: number
    setFollowingInProgress: (followingInProgress: boolean, id: number) => void
    followingInProgress: Array<number>
}

export const Users: React.FC<UsersPropsType> = (props) => {
    let pagesCount = Math.ceil(props.totalUserCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return <div>
        <div style={{textAlign: 'center'}}>
            {pages.map((p, index) => <span key={index}>
                    <span
                        className={s.page}
                        onClick={() => {
                            props.onPageChanged(p)
                        }}
                        style={props.currentPage === p
                            ? {color: 'red'}
                            : {}
                        }>{p}</span>-
                </span>)}
        </div>
        {props.users.map(el => <div key={el.id} style={{
            marginTop: '15px',
            display: 'flex',
            justifyContent: 'inherit',
            border: '2px solid black',
            borderRadius: '60px 0'
        }}>
            <div style={{textAlign: 'center', padding: '10px'}}>
                <NavLink to={`profile/${el.id}`}>
                    <img style={{width: '100px', border: '1px solid black', borderRadius: '50%'}}
                         src={el.photos.small ? el.photos.small : 'https://lastfm.freetls.fastly.net/i/u/300x300/8607d5df1af4d247369b1581f512b46b.jpg'}
                         alt="hi"/>
                </NavLink>
                <div>
                    {el.followed
                        ? <button disabled={props.followingInProgress.some( id => id === el.id)} onClick={() => {
                            props.setFollowingInProgress(true, el.id)
                            unfollowAxios(el.id).then((data) => {
                                if (data.resultCode === 0) {
                                    props.unfollow(el.id)
                                    props.setFollowingInProgress(false, el.id)
                                }
                            })

                        }}>Unfollow</button>
                        : <button disabled={props.followingInProgress.some( id => id === el.id)} onClick={() => {
                            props.setFollowingInProgress(true, el.id)
                            followAxios(el.id).then((data) => {
                                if (data.resultCode === 0) {
                                    props.follow(el.id)
                                    props.setFollowingInProgress(false, el.id)
                                }
                            })

                        }}>follow</button>
                    }
                </div>
            </div>
            <div style={{paddingTop: '15px',}}>
                <div>Name: {el.name}</div>
                <div>ID: {el.id}</div>
                <div>{el.status}</div>
            </div>
        </div>)}
    </div>;
};

