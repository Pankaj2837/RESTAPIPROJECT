import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";
import { Button, Container, Form, FormGroup, Input } from "reactstrap";
import base_url from "../api/myapi";
const Adduser = () =>{

    
    useEffect(()=>{
        document.title="Add New Users || Users Section";
    },[])

    const [user,setUser]= useState({});
    // form handler function
    const handleForm=(e)=>{
        console.log(user);
        postDataToServer(user);
        e.preventDefault();
    }

    const postDataToServer = (data) =>{
        axios.post(`${base_url}/users`,data).than((response)=>
        {
            console.log(response);
            console.log("success");
        },(error)=>{
            console.log(error);
            console.log("error");
        })
    }

    return(
        <Fragment>
            <h1 className="text-center my-3">Fill User name to add into user list</h1>
          <Form onSubmit={handleForm}>
              <FormGroup>
                  <label> User Id</label>
                  <Input type="text" placeholder="enter your Userid"
                  name="userid" id="userid"
                  onChange={(e)=>{
                      setUser({...user,id:e.target.value})
                  }}/>
              </FormGroup>
              <FormGroup>
                  <label> User Name</label>
                  <Input type="text" placeholder="enter your name"
                  name="username" id="username"
                  onChange={(e)=>{
                      setUser({...user,userName:e.target.value})
                  }}/>
                  
              </FormGroup>

              <Container className="text-center">
                  <Button color="success" type="submit">Submit</Button>
                  <Button color="warning m-3" type="reset">Cancel</Button>
              </Container>

          </Form>

        </Fragment>

    )
}
export default Adduser;