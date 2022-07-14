import React from 'react';
import {UsersPropsType} from "./UsersContainer";

export const Users = (props: UsersPropsType) => {

    const usersLists = props.usersPage.users.map(el => <div key={el.id}>
        <div>{el.name}</div>
        <div>{el.status}</div>
        <div>{el.location.country}</div>
        <div>{el.location.city}</div>
        <div>
            {el.followed
                ? <button onClick={() => { props.unfollow(el.id) }}>Unfollow</button>
                : <button onClick={() => { props.follow(el.id) }}>follow</button>
            }
        </div>
    </div>)

    return (
        <div>
            {usersLists}
        </div>
    );
};

