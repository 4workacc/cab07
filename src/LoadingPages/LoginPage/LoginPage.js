import React from 'react';
import './LoginPage.scss';

class LoginPage extends React.Component {
    constructor ( props ) {
        super ( props )
    }
    clickLPSubmit(){
        alert();
    }
    render(){
        return (
            <div className = "LoginPage">               
                    <input 
                        type="text" 
                        id="login" 
                        className="fadeIn second" 
                        name="login" 
                        placeholder="login" />
                    <input 
                        type="text" 
                        id="password" 
                        className="fadeIn third" 
                        name="login" 
                        placeholder="password" />
                    <input 
                        type="submit" 
                        className="fadeIn fourth LPsubmit" 
                        value="Log In"
                        onClick = { this.clickLPSubmit }/>               
            </div>
        )
    }
}

export default LoginPage;
