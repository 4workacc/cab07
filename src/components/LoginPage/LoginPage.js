// import React from 'react';
// import './LoginPage.scss';

// import { connect } from 'react-redux';
// import ALoginIn from '../../redux/actions/ALogIn';

// import { useSelector } from 'react-redux';

// class LoginPage extends React.Component {
//     constructor ( props ) {
//         super ( props );
//         const curShowLoginPanel = useSelector( state => state.curShowLoginPanel );
//         this.state = {
//             isShowed : 1
//         }
//         this.clickLPSubmit = this.clickLPSubmit.bind( this );
//     }
    
//     clickLPSubmit(){
//         // fetch to server
//         // if login and pass exist -> tryToLogin
//         // else showErr
//         // this.props.LP_tryToLogin("asd");       
//         this.setState({            
//             isShowed : 0
//         })
//     }  
//     LP_fetchToServer() {
//         fetch("https://api.example.com/items")
//         .then(res => res.json())
//         .then(
//           (result) => {
//             this.setState({
//               isLoaded: true,
//               items: result.items
//             });
//           },
//           // Примечание: важно обрабатывать ошибки именно здесь, а не в блоке catch(),
//           // чтобы не перехватывать исключения из ошибок в самих компонентах.
//           (error) => {
//             this.setState({
//               isLoaded: true,
//               error
//             });
//           }
//         )
//     }
//     render(){
//         return (            
//             <div className = {"LoginPage LPop"+this.state.curShowLoginPanel}>               
//                     <input 
//                         type="text" 
//                         id="login" 
//                         className="fadeIn second" 
//                         name="login" 
//                         placeholder="Ваш логін"/>
//                     <input 
//                         type="text" 
//                         id="password" 
//                         className="fadeIn third" 
//                         name="login" 
//                         placeholder="Ваш пароль" />
//                     <input 
//                         type="submit" 
//                         className="fadeIn fourth LPsubmit" 
//                         value="Log In"
//                         onClick = { this.clickLPSubmit }/>               
//             </div>
//         )
//     }
// }

// let mapState = ( state ) =>{
//     return {
//         ss: state.curUserId
//     }
// }
// let mapDispatch = dispatch => {
//     return {
//         LP_tryToLogin : (usNamePass) => dispatch ( ALoginIn( usNamePass ))
//     }
// }
// export default connect(mapState, mapDispatch ) (LoginPage);


import React, { useState, useEffect} from 'react';
import "./LoginPage.scss";

import { useDispatch } from 'react-redux'; 
import { useSelector } from 'react-redux';

const LoginPage = () =>{

    const curShowLoginPanel = useSelector( state => state.curShowLoginPanel );
    const dispatch = useDispatch();
    
    return (
        <div className = {"LoginPage LPop"+curShowLoginPanel}>               
                     <input 
                       type="text" 
                      id="login" 
                        className="fadeIn second" 
                        name="login" 
                        placeholder="Ваш логін"/>
                    <input 
                        type="text" 
                        id="password" 
                        className="fadeIn third" 
                        name="login" 
                        placeholder="Ваш пароль" />
                    <input 
                        type="submit" 
                        className="fadeIn fourth LPsubmit" 
                        value="Log In"
                        onClick = {() => dispatch({
                            type : "SWITCH_LOGIN_PANEL",
                            newState : 0                    
                        })}/>               
        </div>
    )
}

export default LoginPage;