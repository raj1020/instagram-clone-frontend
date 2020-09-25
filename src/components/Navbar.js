import React, { useContext } from 'react';
import {Link} from 'react-router-dom';
import { UserContext } from '../App';


const NavBar = () => {

    const {state, dispatch} = useContext(UserContext);
   
    const renderList = () => {
      if(state) {
        return (<div>
                  <li><Link to="profile">Profile</Link></li>
                  <li><Link to="create">CreatePost</Link></li>
        </div>)
      } else {
        return (
          <div>
              <li><Link to="login">Login</Link></li>
              <li><Link to="signup">Signup</Link></li>
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
