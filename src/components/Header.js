import React from "react";
import { Card, CardBody } from "reactstrap";

const Header = () =>{
    return(
        <div>
            <Card className="my-1 bg-warning">
                <CardBody>
                <h1 className="text-center my-1">Welcome to User Page</h1>
                </CardBody>
            </Card>
            <br></br>
        </div>
    )
}

export default Header;