import React, { useContext } from 'react';
import {Link, useHistory} from 'react-router-dom';
import { UserContext } from '../App';


const NavBar = () => {

    const {state, dispatch} = useContext(UserContext);
    const history = useHistory();
    const renderList = () => {
      if(state) {
        return (<div>
                  <li><Link to="/profile">Profile</Link></li>
                  <li><Link to="/create">CreatePost</Link></li>
                  <li><Link to="/postsifollow">Posts I follow</Link></li>
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
      </nav>
    );
}


export default NavBar;