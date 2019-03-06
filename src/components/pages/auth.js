import React, { Component } from 'react';
import Login from '../my-auth/login';
import image from '../../../static/assets/images/auth/auth-image.jpg'

export default class  extends Component {
    constructor(props) {
        super(props);

        this.handleSuccessfullAuth = this.handleSuccessfullAuth.bind(this)
        this.handleUnsuccessfullAuth = this.handleUnsuccessfullAuth.bind(this)
    }

    handleSuccessfullAuth() {
        this.props.handleSuccessfullLogin();
        this.props.history.push("/");
    }

    handleUnsuccessfullAuth() {
        this.props.handleUnsuccessfullLogin();
    }

    render() {
        return(
            <div className = 'auth-page-wrapper'>
                <div className = 'left-column' 
                style = {{
                    backgroundImage: `url(${image})`
                }}
                />

                <div className = 'Right-column'>
                <Login
                    handleSuccessfullAuth = {this.handleSuccessfullAuth}
                    handleUnsuccessfullAuth = {this.handleUnsuccessfullAuth}
                />
                </div>
            </div>
        )
    }
}
