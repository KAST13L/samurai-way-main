import React from 'react';
import s from "./Users.module.css";
import {UserType} from "../../../redux/users-reducer";
import {Paginator} from "../../../common/Paginator";
import {User} from "./User";

type UsersPropsType = {
    onPageChanged: (page: number) => void
    totalUserCount: number
    users: Array<UserType>
    pageSize: number
    currentPage: number
    followingInProgress: Array<number>
    unfollowTC: (id: number) => void
    followTC: (id: number) => void
}

export const Users: React.FC<UsersPropsType> = (props) => {
    let pagesCount = Math.ceil(props.totalUserCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return <div className={s.usersPage}>
        <Paginator currentPage={props.currentPage} pageSize={props.pageSize} totalUserCount={props.totalUserCount}
                   onPageChanged={props.onPageChanged}/>
        {props.users.map(el => <User
            /*id={el.id}
            photos={el.photos}
            name={el.name}
            status={el.status}*/
            {...el}
            followingInProgress={props.followingInProgress}
            followTC={props.followTC}
            unfollowTC={props.unfollowTC}

        />)}
    </div>;
};

