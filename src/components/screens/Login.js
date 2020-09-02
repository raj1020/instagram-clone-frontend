import React from 'react';
import {Link} from 'react-router-dom';


const Login = ()  => {
        return (
                <div className = "mycard">
                    <div className = "card auth-card input-field">
                        <h2>Instagram</h2>
                        <input 
                            type= "email"
                            placeholder = "email"
                        />
                        <input 
                            type= "password"
                            placeholder = "password"
                        />
                        <button className="btn waves-effect waves-light #64b5f6 blue lighten-2"> 
                            Login
                        </button>
                        <div>
                            <Link to='/signup'> Don't have an account?</Link>
                        </div>
                       

                    </div>
                   
                </div>
        )
};

export default Login;