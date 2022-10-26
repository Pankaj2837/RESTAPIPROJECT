
import axios from "axios";
import React,{useState} from "react";
import { toast } from "react-toastify";
import { Button, Card, CardBody, CardSubtitle, CardText, Container } from "reactstrap";
import base_url from "../api/myapi";
const User = ({user,update}) =>{

    const deleteUser = (id) =>{
        axios.delete(`${base_url}/users/${id}`).then(
            (response)=>{
                console.log(response);
                console.log("success");
                toast.success("course deleted");
                update(id);
            },
            (error)=>{
                console.log(error);
                toast.success("course not deleted server problem");
            }
        )
    }

    const [groupuser,setgroupUser]= useState({});
    // form handler function
    const addUserInGroup=(e)=>{
        console.log(user);
        postDataToServer(user);
    }
return(
    <Card>
    <CardBody>
        <CardSubtitle className="text-center">{user.id}</CardSubtitle>
        <CardText className="text-center">{user.userName}</CardText>

        <Container className="text-center">
            <Button 
            color="primary"
            onClick={(e)=>{setgroupUser({groupuser,groupusername:e.user.id,userid:e.user.userName})}}>Update</Button>
            <Button 
            color="warning m-3"
            onClick={()=>{deleteUser(user.id)}}>Delete</Button>
        </Container>
    </CardBody>
</Card>
)
}
export default User;