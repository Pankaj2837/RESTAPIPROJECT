import React from "react";
import { Link } from "react-router-dom";
import { ListGroup } from "reactstrap";

const Menues = () =>{
    return(
        <ListGroup>
            <Link tag="a" className="list-group-item list-group-item-action" to="/" action>Home</Link>
            <Link tag="a" className="list-group-item list-group-item-action" to="/add-user" action>Add Users</Link>
            <Link tag="a" className="list-group-item list-group-item-action" to="/view-user" action>View Users</Link>
            <Link tag="a" className="list-group-item list-group-item-action" to="#!" action>About</Link>
        </ListGroup>
    )
}
export default Menues;