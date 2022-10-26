import React, { useEffect } from "react";
import { useState } from "react";
import User from "./User";
import base_url from "./../api/myapi";
import axios from "axios";


const Allusers = ()=>{

    useEffect(()=>{
        document.title=" Check All Users || Users Section";
    },[]);
    
    const[user, setUsers] = useState([]);
    
    //calling loading course function
    
    useEffect(()=>{ getAllusersFromServer() },[]);


    //function to call url

    const getAllusersFromServer = () =>{
        axios.get(`${base_url}/users`).then(
            (response)=>{
                //for success
                console.log(response.data);
                setUsers(response.data);
            },
            //for error
            (error)=>{
                console.log(error)
            }
        )
    };

    const updateUsers = (id) => {
        setUsers(user.filter((c) => c.id !== id));
    }

    return(
        <div className="text-center">
            <h1>All Users</h1>
            <p>List of users are as follows:</p>

            {
                user.length > 0 ? 
                user.map((item)=><User key={item.id} user={item} update={updateUsers}/>):"No courses aer found"
            }
        </div>

    )
}
export default Allusers;