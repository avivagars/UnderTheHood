import { Button, Nav, Navbar as NavbarBS } from "react-bootstrap";
import { NavLink } from "react-router-dom";
export function HomePage () {
    return (
        <div className=""> 
            <h1 className= "text-center">Get word from a specialist</h1>
            <h2 className="text-center"> What type of help are you looking for?</h2>
            <div className="container">
                <div className="text-center align-middle btn-group">
                    <div>
                    <Nav.Link to="/form" as={NavLink}> 
                        <Button type="button" className="btn btn pull-right btn-primary btn-lg">Pricing</Button>
                    </Nav.Link>
                    </div>
                    <Nav.Link to="/form" as={NavLink}> 
                        <Button type="button" className="btn btn pull-right btn-primary btn-lg">Diagnostics</Button>
                    </Nav.Link>
                    <Nav.Link to="/form" as={NavLink}> 
                        <Button type="button" className="btn btn pull-right btn-primary btn-lg">Other</Button>
                    </Nav.Link>
                </div>
            </div> 
            </div>
    )
}
