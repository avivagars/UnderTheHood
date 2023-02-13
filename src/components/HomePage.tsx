import {
  Button,
  Col,
  Container,
  Nav,
  Navbar as NavbarBS,
  Row,
} from "react-bootstrap";
import { NavLink } from "react-router-dom";
import car from "../car6.jpg";
import { Footer } from "../components/Footer";
import { useState } from "react";

export function HomePage() {
  const [issue, setIssue] = useState("");
  const handleIssue = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log("I was clicked");
    setIssue(e.target.value);
  };
  return (
    <Container
      fluid
      style={{
        backgroundImage: `url(${car})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "100vh",
        width: "100vw",
        marginLeft: 0,
        marginRight: 0,
        marginTop: 0,
        marginBottom: 0,
        paddingLeft: 0,
        paddingBottom: 0,
        paddingTop: 0,
        paddingRight: 0,
        objectFit: "cover",
      }}
    >
      <Container fluid className="">
        <Row className="row-cols gy-5 gx-1">
          <Col
            style={{
              width: 100,
              marginTop: 120,
            }}
            className="h-100 d-flex align-items-center justify-content-center display-1"
          >
            Get Word From A Specialist
          </Col>
        </Row>
        <Row className="gy-5">
          <Col
            style={{ marginTop: 60 }}
            className="h-100 d-flex align-items-center justify-content-center fs-3"
          >
            What type of help are you looking for?
          </Col>
        </Row>
      </Container>
      <Container className="gy-2" style={{ marginTop: 30 }}>
        <Row className="text-center align-middle btn-group container row">
          <Col>
            <Nav.Link to="/form/Pricing" as={NavLink}>
              <Button
                value="Pricing"
                style={{ width: "9rem", height: "4rem" }}
                type="button"
                className="btn btn-success btn-lg"
              >
                Pricing
              </Button>
            </Nav.Link>
          </Col>
          <Col>
            <Nav.Link to="/form/Diagnostic" as={NavLink}>
              <Button
                style={{ width: "9rem", height: "4rem" }}
                type="button"
                className="btn btn-success btn-lg"
              >
                Diagnostics
              </Button>
            </Nav.Link>
          </Col>
          <Col>
            <Nav.Link to="/form/Other" as={NavLink}>
              <Button
                style={{ width: "9rem", height: "4rem" }}
                type="button"
                className="btn btn-success btn-lg "
              >
                Other
              </Button>
            </Nav.Link>
          </Col>
        </Row>
      </Container>
      <Footer></Footer>
    </Container>
  );
}
