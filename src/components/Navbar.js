import React, { useContext, useRef, useEffect, useState } from 'react';
import {Link, useHistory} from 'react-router-dom';
import { UserContext } from '../App';
import M from 'materialize-css';


const NavBar = () => {

    const searchModal = useRef(null)
    const [search, setSearch] = useState('');
    const [userDetails, setUserDetails] = useState([]);
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

    const fetchUser = (query) => {
      setSearch(query)
      fetch('/search-users', {
        method: "post",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          query
        })
      }).then(res =>  res.json())
      .then(results => {
        setUserDetails(results.user)
      })

    }
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
                onChange = {(e) => fetchUser(e.target.value)  }
            />
            <ul className="collection">

            {userDetails.map(item => {
              return <Link to= {
                item._id!== state._id ? "/profile/"+item._id : "/profile"}
              onClick={() =>{
                M.Modal.getInstance(searchModal.current).close()
                setSearch('')
              }}
              ><li className="collection-item">{item.email}</li></Link>
               
            })}

            </ul>
          </div>
          <div className="modal-footer">
            <a  className="modal-close waves-effect waves-green btn-flat" onClick={() => {setSearch('')}}>Close</a>
          </div>
        </div>
          
      </nav>
    );
}


export default NavBar;