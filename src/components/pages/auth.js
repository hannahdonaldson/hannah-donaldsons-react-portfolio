import React, { Component } from 'react';
import Login from '../my-auth/login';
import image from '../../../static/assets/images/auth/auth-image.jpg'

export default class  extends Component {
    render() {
        return(
            <div className = 'auth-page-wrapper'>
                <div className = 'left-column' 
                style = {{
                    backgroundImage: `url(${image})`
                }}
                />

                <div className = 'Right-column'>
                <Login />
                </div>
            </div>
        )
    }
}
