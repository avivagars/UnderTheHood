import { Button, Container } from "react-bootstrap"
export function HomePage () {
    return (
        <div> 
            <h1 className= "text-center">Get word from a specialist</h1>
            <h2 className="text-center"> What type of help are you looking for?</h2>
            <div className="container">
                <div className="text-centered">
                    <Button type="button" className="btn btn-primary btn-lg">Pricing</Button>
                    <Button className="btn btn-primary btn-lg">Diagnostics</Button>
                    <Button className="btn btn-primary btn-lg">Other</Button>
                </div>
            </div> 
            </div>
    )
}

