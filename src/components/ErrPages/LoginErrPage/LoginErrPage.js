import React from 'react';
import './LoginErrPage.css';
// redux
import { connect } from 'react-redux';

class LoginErrPage extends React.Component {
    render(){
        return(
            <div className = "LoginErrPage">
                Login or pass incorrect
            </div>
        )
    }
}
let mapState = (state) =>{
    return {
        ss : state.curUserId
    }
}

let mapDispatch = (dispatch) => {}

export default connect(mapState, mapDispatch) (LoginErrPage);