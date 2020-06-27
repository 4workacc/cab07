import React from 'react';
import './LoginPage.scss';

import { connect } from 'react-redux';

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
                        placeholder={""+this.props.ss}/>
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

let mapState = ( state ) =>{
    return {
        ss: state.curUserId
    }
}
export default connect(mapState)(LoginPage);
