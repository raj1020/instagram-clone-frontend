import React, { useContext, useRef, useEffect, useState } from 'react';
import {Link, useHistory} from 'react-router-dom';
import { UserContext } from '../App';
import M from 'materialize-css';


const NavBar = () => {

    const searchModal = useRef(null)
    const [search, setSearch] = useState('')
    const {state, dispatch} = useContext(UserContext);
    const history = useHistory();

  useEffect(() => {
    M.Modal.init(searchModal.current);
    
  }, [])

    const renderList = () => {
      if(state) {
        return (<div>
                  <li key = "1"><i data-target="modal1" className="material-icons modal-trigger" style = {{color: "black"}}>search</i></li>
                  <li key = "2"><Link to="/profile">Profile</Link></li>
                  <li key = "3"><Link to="/create">CreatePost</Link></li>
                  <li key = "4"><Link to="/postsifollow">Posts I follow</Link></li>
                  <button className="btn  #c62828 red darken-3"
                            onClick={() => {
                              localStorage.clear();
                              dispatch({type: "CLEAR"})
                              history.push("/login");
                            }}
                        >

                            Log Out
                        </button>

        </div>)
      } else {
        return (
          <div>
              <li><Link to="/login">Login</Link></li>
              <li><Link to="/signup">Signup</Link></li>
          </div>
        );
      }
    };
    return (
        <nav>
        <div className="nav-wrapper white">
          <Link to= {state ? "/" : "/login"} className="brand-logo left">Instagram</Link>
          <ul id="nav-mobile" className="right">
            
            {renderList()}
          </ul>
        </div>
      
        <div id="modal1" className="modal" ref ={searchModal} style ={{color: "black"}}>
          <div className="modal-content">

            <input 
                type= "text"
                placeholder = "Search Users"
                value = {search}
                onChange = {(e) => setSearch(e.target.value)  }
            />
            <ul className="collection">
              <li className="collection-item">Alvin</li>
              <li className="collection-item">Alvin</li>
              <li className="collection-item">Alvin</li>
              <li className="collection-item">Alvin</li>
              <li className="collection-item">Alvin</li>
              <li className="collection-item">Alvin</li>
              <li className="collection-item">Alvin</li>
              <li className="collection-item">Alvin</li>
              <li className="collection-item">Alvin</li>
            </ul>
          </div>
          <div className="modal-footer">
            <a  className="modal-close waves-effect waves-green btn-flat">Agree</a>
          </div>
        </div>
          
      </nav>
    );
}


export default NavBar;