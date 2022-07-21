import React from 'react';
import axios from "axios";
import {UsersPropsType} from "./UsersContainer";

export class Users extends React.Component<UsersPropsType> {

  componentDidMount() {
      axios.get('https://social-network.samuraijs.com/api/1.0/users').then((response) => {
          this.props.setUser(response.data.items)
      })
  }

    render() {
        return <div>
            {this.props.usersPage.users.map(el => <div key={el.id} style={{ marginTop:'15px',display:'flex', justifyContent:'inherit', border:'2px solid black',borderRadius:'60px 0'}}>
                <div style={{textAlign:'center', padding:'10px'}}>
                    <img style={{width:'100px',border:'1px solid black', borderRadius:'50%'}} src={el.photos.small ? el.photos.small : 'https://sverhestestvennoe.club/img/nx7liljhj3.jpg'} alt="hi"/>

                    <div>
                        {el.followed
                            ? <button onClick={() => { this.props.unfollow(el.id) }}>Unfollow</button>
                            : <button onClick={() => { this.props.follow(el.id) }}>follow</button>
                        }
                    </div>
                </div>
                <div style={{paddingTop:'15px',}}>
                    <div>Name: {el.name}</div>
                    <div>ID: {el.id}</div>
                    <div>{el.status}</div>
                </div>

            </div>)}
        </div>;
    }
}

/*
export const Users = (props: UsersPropsType) => {

    if (props.usersPage.users.length === 0) {
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then((response) => {
            props.setUser(response.data.items)
        })
    }

    const usersLists = props.usersPage.users.map(el => <div key={el.id} style={{ marginTop:'15px',display:'flex', justifyContent:'inherit', border:'2px solid black',borderRadius:'60px 0'}}>
        <div style={{textAlign:'center', padding:'10px'}}>
            <img style={{width:'100px',border:'1px solid black', borderRadius:'50%'}} src={el.photos.small ? el.photos.small : 'https://sverhestestvennoe.club/img/nx7liljhj3.jpg'} alt="hi"/>

            <div>
                {el.followed
                    ? <button onClick={() => { props.unfollow(el.id) }}>Unfollow</button>
                    : <button onClick={() => { props.follow(el.id) }}>follow</button>
                }
            </div>
        </div>
        <div style={{paddingTop:'15px',}}>
            <div>Name: {el.name}</div>
            <div>ID: {el.id}</div>
            <div>{el.status}</div>
        </div>

    </div>)

    return (
        <div>
            {usersLists}
        </div>
    );
};
*/

