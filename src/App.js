import { Link, Route, Routes , useLocation } from "react-router-dom";
import React ,{ useState } from "react";
import { AiFillCrown ,  AiOutlineBars, AiOutlineClose} from 'react-icons/ai';
import Modal from 'react-modal';
import { connect } from "react-redux";
 
//own components
import Home from "./pages/home/home.component";
import Movie from './pages/movie/movie.component'
import ContactUs from "./pages/contact-us/contact-us.component";
import Login from "./pages/login/login.component";
import DropDownLocal from "./shared/drop-down-local/drop-down-local.component";
import { local_vocab } from "./shared/local/local";
import Footer from "./shared/footer/footer.component";

//styling
import './App.css'
import './pages/login/login.style.css'
import { setUserLoggedIn } from "./redux/actions/user.actions";


Modal.setAppElement('#root');

function App(props) {
  const [local , setLocal] = useState({ lang:'TR', dropDownStatus:false });
  const [modalIsOpen, setIsOpen] = useState(false);
  const [userInfo , setUserInfo] = useState({});
  const [is_dd_open , setIsDDOpen] = useState(false);
  const [is_rsb_open , setRSB] = useState(false);

  const updateLocal = (local_obj) =>{
   
    if(local_obj.lang !== undefined){
      if(local.lang !== local_obj.lang){
      
        local_vocab.setLanguage(local_obj.lang.toLowerCase());
       
        setLocal({...local , ...local_obj});
      }
    }

    setLocal({
      ...local,
      ...local_obj
    })
  }

  const login = (user_data) => {
    setUserInfo({
      ...userInfo,
      ...user_data
    })
  }

  const logout = () => {
    props.setUserLoggedIn(false)
  }

  
   local_vocab.setLanguage(local.lang.toLowerCase());

  const location = useLocation();
  let title , menu;
  if( location.pathname === '/contact-us' ){
    title = local_vocab.contact_page_title;
    menu = <Link  className="nav-link"  to= "" >{local_vocab.home_page_title}</Link>
  }else{
    title = local_vocab.home_page_title;
    menu = <Link  className="nav-link"  to= "contact-us" >{local_vocab.contact_page_title}</Link>
  }

  function openModal() {
    setIsOpen(true);
    setUserInfo({});
  }

  function closeModal() {
    setIsOpen(false);
  }

  const toggleMenu = () => {
    setRSB(!is_rsb_open);
  }


  let dropDownClasses = is_dd_open ? "drop-down-mail-logout dd-visible": "drop-down-mail-logout dd-hidden";
  let rigth_side_bar_classes = is_rsb_open ? "right-side-head-bar rsb-visible" : "right-side-head-bar rsb-hidden";
  
  let mobile_menu_toggler = is_rsb_open ? 
   <AiOutlineClose color="#e1f5de" size={20} className="icon hamburger" onClick={toggleMenu} /> : 
   <AiOutlineBars color="#e1f5de" size={20} className="icon hamburger" onClick={toggleMenu} />

  let login_based_component =  !props.is_logged_in ? 
    <div className="login-name-container">
      <button className="login-btn" onClick={()=>{openModal()}}>{local_vocab.Login}</button>
    </div>
    :
    <div className="loged-in-name-container">
        <p onClick={() => setIsDDOpen(!is_dd_open)} className="user-name">{props.user.name}</p>
        <div className={dropDownClasses}>
            <span className="user-mail">{props.user.email}</span>
            <button className="log-out-btn" onClick={logout}>{local_vocab.Logout}</button>
        </div>
    </div>

    return (
      <div className="App">
       
       <div className="body-container">
            <div className="head-bar">

              <div className="left-side-head-bar" >
                <AiFillCrown color="#e1f5de" size={80} className="icon" />
                <p className="title">{title}</p>
              </div>
              
              <div className={rigth_side_bar_classes}>
                <nav>
                  <Link  className="nav-link"  to= "movie" >{local_vocab.movie}</Link>
                   {menu}
                </nav>

                <DropDownLocal local={local} updateLocal={updateLocal} local_vocab={local_vocab}/>
                 
                {login_based_component}
               
              </div>
             
              {mobile_menu_toggler}
              
            </div>

            <Routes>
              <Route path="/" element={<Home local_vocab={local_vocab}/>} />
              <Route path="/movie" element={<Movie local_vocab={local_vocab}/>} />
              <Route path="/contact-us" element={<ContactUs local_vocab={local_vocab} user_info={userInfo} />} />
            </Routes>
          </div>


         <Login
         modalIsOpen = {modalIsOpen}
         closeModal = {closeModal}
         updateLocal = {updateLocal}
         local={local} 
         local_vocab={local_vocab}
         login={login}
         />

          <Footer />
      </div>
    );
 
}

const mapStateToProps = state => {
  return {
  is_logged_in: state.userReducer.is_logged_in,
  user: state.userReducer.user,
  
}};

const mapDispatchToProps = dispatch => {
  return {
    setUserLoggedIn: (is_logged_in) => { dispatch(setUserLoggedIn(is_logged_in)) },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
