import React from 'react';

const Profile = ()  => {
        return (
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
                        <h4>Harry Sharma</h4>
                        <div style= {{display:"flex", justifyContent: "space-between", width: "108%"}}>

                            <h5>40 posts</h5>
                            <h5>560 followers</h5>
                            <h5>401 following</h5>

                        </div>
                    </div>
                </div>


                <div className= "gallery">
                    <img className= "item" src = "https://images.unsplash.com/photo-1522508115664-391162d98bd1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80" alt="Indian police in happy mood"/>
                    <img className= "item" src = "https://images.unsplash.com/photo-1522508115664-391162d98bd1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80" alt="Indian police in happy mood"/>
                    <img className= "item" src = "https://images.unsplash.com/photo-1522508115664-391162d98bd1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80" alt="Indian police in happy mood"/>
                    <img className= "item" src = "https://images.unsplash.com/photo-1522508115664-391162d98bd1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80" alt="Indian police in happy mood"/>
                    <img className= "item" src = "https://images.unsplash.com/photo-1522508115664-391162d98bd1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80" alt="Indian police in happy mood"/>
                    <img className= "item" src = "https://images.unsplash.com/photo-1522508115664-391162d98bd1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80" alt="Indian police in happy mood"/>
                    <img className= "item" src = "https://images.unsplash.com/photo-1522508115664-391162d98bd1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80" alt="Indian police in happy mood"/>


                </div>
            </div>
        )
};

export default Profile;