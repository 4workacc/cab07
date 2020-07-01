import React from 'react';
import './LoginPage.scss';

import { connect } from 'react-redux';
import ALoginIn from '../../redux/actions/ALogIn';

class LoginPage extends React.Component {
    constructor ( props ) {
        super ( props );
        this.clickLPSubmit = this.clickLPSubmit.bind( this );
    }
    clickLPSubmit(){
        this.props.LP_tryToLogin("asd");       
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
let mapDispatch = dispatch => {
    return {
        LP_tryToLogin : (usNamePass) => dispatch ( ALoginIn( usNamePass ))
    }
}
export default connect(mapState, mapDispatch ) (LoginPage);
