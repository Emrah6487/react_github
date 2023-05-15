import React, { Component } from 'react'
import User from './User'

export class UserList extends Component {

constructor(props) {
  super(props)

  this.state = {
    users: [
        {
            id: "1",
            name: "Sadık Turan",
            username: "sadikturan",
            avatar_url: "https://avatars.githubusercontent.com/u/19492591?v=4",
            github_url: "https://github.com/sadikturan",
            website: "https://sadikturan.com",
            followers: "4157"
        },
        {
            id: "2",
            name: "Sadık Turan",
            username: "sadikturan",
            avatar_url: "https://avatars.githubusercontent.com/u/19492591?v=4",
            github_url: "https://github.com/sadikturan",
            website: "https://sadikturan.com",
            followers: "4157"
        },
        {
            id: "3",
            name: "Sadık Turan",
            username: "sadikturan",
            avatar_url: "https://avatars.githubusercontent.com/u/19492591?v=4",
            github_url: "https://github.com/sadikturan",
            website: "https://sadikturan.com",
            followers: "4157"
        }
    ]
  }
}

  render() {
    return (
      <div>
        {this.state.users.map(user =>(
          <User user={user} key={user.id}/>
        ))}
      </div>
    )
  }
}

export default UserList