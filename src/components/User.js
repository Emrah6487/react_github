import React, { Component } from 'react'

export class User extends Component {



    //img-fluid demek;idth:100%; ve height:auto; 
    render() {
        const {avatar_url,login,html_url} = this.props.user;
        return (
            
            <div className="card mb-3">
                <div className="row g-0">
                    <div className="col-md-3">
                        <img className='img-fluid rounded-start w-100' src={avatar_url} alt={login} />
                    </div>
                    <div className="col-md-9">
                        <div className="card-body">
                            <h3 className="cart-title">{login}</h3>
                            <hr/>
                            <a target="_blank" rel="noreferrer" href={html_url} className='btn btn-primary' >Github Profile</a>
                          
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default User