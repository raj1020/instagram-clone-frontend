import React, {useEffect, useState, useContext} from 'react';
import {UserContext} from '../../App';
import { useParams } from 'react-router-dom';



const Profile = ()  => {

    const [userProfile, setProfile] =useState(null);
    const {state, dispatch} =  useContext(UserContext);
    const {userid } = useParams();
   

    useEffect(() => {
        fetch(`/user/${userid}`, {
            headers: {
                "Authorization": "Bearer "+ localStorage.getItem("jwt")
            }
        }).then(res => res.json())
        .then(result => {
            console.log("result: ",result);
            setProfile(result);
            
        })
       
    }, [])

        return (
            <> {userProfile ?
            <div style = {{maxWidth: "550px", margin:"0px auto"}}>
                <div style= {{
                    display: "flex",
                    justifyContent: "space-around",
                    margin: "18px 0px",
                    borderBottom: "1px solid grey"
                }}>
                    <div>
                        <img style = {{width: "160px", height: "160px", borderRadius: "80px"}}
                        src = "https://images.unsplash.com/photo-1596616066331-f23c78f41ee2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                        alt= "pretty lady" />
                    </div>
                    <div>
                        <h4>{ userProfile.user.name }</h4>
                        <h5>{ userProfile.user.email }</h5>
                        <div style= {{display:"flex", justifyContent: "space-between", width: "108%"}}>

                            <h5>{userProfile.posts.length} posts</h5>
                            <h5>560 followers</h5>
                            <h5>401 following</h5>

                        </div>
                    </div>
                </div>


                <div className= "gallery">

                {userProfile.posts.map(item => {
                    return <img key ={item._id} className= "item" src = {item.photo} alt={item.title}/>
                })}
                    


                </div>
            </div>
             :
             <h5>Loading......</h5>} </>
            
        )
};

export default Profile;