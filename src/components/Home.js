import React from "react";
import { Button } from "reactstrap";
import { useEffect } from "react";
const Home = () => {

useEffect(()=>{
  document.title="Home Page || Users Section";
},[])

    return(
        <div>
          <h1 className="display-3">Hello, world!</h1>
          <p className="lead">This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</p>
          <hr className="my-2" />
          <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
          <p className="lead">
            <Button outline color="primary">Learn More</Button>
          </p>
      </div>
    )
}
export default Home;