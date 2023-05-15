import React, { Component } from 'react'

export class User extends Component {



    //img-fluid demek;idth:100%; ve height:auto; 
    render() {
        const {avatar_url,name,followers,github_url,website} = this.props.user;
        return (
            
            <div className="card mb-3">
                <div className="row g-0">
                    <div className="col-md-3">
                        <img className='img-fluid rounded-start w-100' src={avatar_url} alt={name} />
                    </div>
                    <div className="col-md-9">
                        <div className="card-body">
                            <h3 className="cart-title">{name}</h3>
                            <hr/>
                            <p className='follow'>Followers: {followers}</p>
                            <a target="_blank" rel="noreferrer" href={github_url} className='btn btn-primary' >Github Profile</a>
                            <a target="_blank" rel="noreferrer"href={website} className='btn btn-primary ms-2' >Wepsite</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default User