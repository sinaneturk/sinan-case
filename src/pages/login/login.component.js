import Modal from "react-modal";
import React ,{ useState } from "react";
import DropDownLocal from "../../shared/drop-down-local/drop-down-local.component";
import {AiOutlineCloseSquare} from 'react-icons/ai'
import { setUser, setUserName, setUserEmail, setUserPassword, setUserLoggedIn} from "../../redux/actions/user.actions";
import { connect } from 'react-redux'

//styles
import './login.style.css'

function Login(
    {
        modalIsOpen,
        closeModal,
        updateLocal,
        local_vocab,
        local,
        setUserName,
        setUserEmail,
        setUserPassword,
        setUserLoggedIn,
        user
    }){

    const modalStyles = {
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          transform: 'translate(-50%, -50%)',
          backgroundColor:'rgb(151 136 221)'
        },
    };


    const logUserIn = (e) => {
        e.preventDefault();
        setUserLoggedIn(true)
        setUser(user)
        closeModal();
    }

    return (
        <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            style={modalStyles}
            contentLabel="Example Modal"
            shouldCloseOnOverlayClick={false} 
        >
            <div className="modal-head">
                <div className="title-dd-container">
                    <h5 className="login-title">{local_vocab.Login}</h5>
                    <DropDownLocal local={local} updateLocal={updateLocal} local_vocab={local_vocab}/>
                </div>
                
                <AiOutlineCloseSquare 
                className="close-modal" 
                color="red" 
                size={25} 
                onClick={closeModal}/>
            </div>
            
            <form>
                <div className="form-conroller">
                    <span className="controller-name">{local_vocab.name}</span>
                    <input  placeholder={local_vocab.name_please} className="controller-field" type="text"  onChange={(e)=>{setUserName(e.target.value)}}/>
                </div>
               
                <div className="form-conroller">
                    <span className="controller-name">{local_vocab.email}</span>
                    <input  placeholder={local_vocab.mail_please} className="controller-field" type="text"  onChange={(e)=>{setUserEmail(e.target.value)}} />
                </div>

                <div className="form-conroller">
                    <span className="controller-name">{local_vocab.password}</span>
                    <input className="controller-field" type="password" onChange={(e)=>{setUserPassword(e.target.value)}} />
                </div>

                <button className="login-btn" onClick={logUserIn}>{local_vocab.Login}</button>
            </form>
        </Modal>
    )
}

const mapStateToProps = state => {
    console.log("USER=>", state.userReducer.user)
    console.log("IS_LOGGED_IN=>", state.userReducer.is_logged_in)
    return {
    user: state.userReducer.user,
    is_logged_in:state.userReducer.is_logged_in
    
  }};
  
  const mapDispatchToProps = dispatch => {
    return {
        setUser: (user) => { dispatch(setUser(user)) },
        setUserName: (user_name) => { dispatch(setUserName(user_name)) },
        setUserEmail: (user_email) => { dispatch(setUserEmail(user_email)) },
        setUserPassword: (user_password) => { dispatch(setUserPassword(user_password)) },
        setUserLoggedIn: (is_logged_in) => { dispatch(setUserLoggedIn(is_logged_in)) },
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(Login);
  