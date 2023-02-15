import { useState, SyntheticEvent } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import Form from "react-bootstrap/Form";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import "react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import { Container, Row } from "react-bootstrap";


export function CarForm() {
  // create state for form Data
  const [formData, setFormData] = useState({
    name: " ",
    email: " ",
    zip: " ",
    year: 2023,
    make: " ",
    model: " ",
    issue: "Select Issue",
    media: " ",
    extra: " ",
  });
  // create state for file upload
  const [fileUrl, setFileUrl] = useState<string | undefined>("");

  // grab the url name and display it on the top
  const issue = window.location.pathname.split("/").at(-1);
  console.log(issue);

  // take values of form and add them to state
  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prevState) => {
      return {
        ...prevState,
        [e.target.name]: e.target.value,
      };
    });
  };
// take dropdown value and add to state
  const handleSelectDropdown = (e: any) => {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        issue: e.target.name,
      };
    });
  };

// uploads media files to fb storage
  const onFileUploadChange = async (e: React.SyntheticEvent<HTMLInputElement>) => {
    const file = e.currentTarget.files![0];
    const storage = getStorage();
    const storageRef = ref(storage, file.name);
    const fileRef = uploadBytesResumable(storageRef, file);
    await fileRef;
    setFileUrl(await getDownloadURL(storageRef));
  };
// allows user to see the file 
  // const onSubmitMedia = async (e: SyntheticEvent) => {
  //   e.preventDefault();
  //   console.log("submitted");
  //   return <img src={fileUrl} alt="from Firebase" />;
  // };

  // submits form to database, resets form
  const usersRef = collection(db, "users");
  const navigate = useNavigate();
  const submitForm = async (e: SyntheticEvent) => {
    e.preventDefault();
    const doc = await addDoc(usersRef, formData);
    

    navigate(`/chat/${doc.id}`);

    alert("Form Successfully Submitted");
    alert("You are being connected with a specialist...")
    setFormData({
      name: " ",
      email: " ",
      zip: " ",
      year: 2023,
      make: " ",
      model: " ",
      issue: " ",
      media: " ",
      extra: " ",
    });
    return <img src={fileUrl} alt="from Firebase" />;
  };

//creates validation for form 
  const form = document.querySelector("form");
  form?.addEventListener("submit", (e) => {
    if (!form?.checkValidity()) {
    }
    form.classList.add("was-validated");
  });

  return (
    <div className="container">
      <header className="h-100 d-flex align-items-center justify-content-center display-5">{issue} Form</header>
      <header className="fs-3" style={{paddingTop: "40px", paddingBottom: "20px"}}>
        Please fill in the following information...
      </header>
      <Form onSubmit={submitForm} style={{paddingBottom: "20px"}}>
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter name"
            name="name"
            value={formData.name}
            onChange={handleFormChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            name="email"
            value={formData.email}
            onChange={handleFormChange}
          />
          <div className="invalid-feedback">Invalid email</div>
          <div className="valid-feedback"></div>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Zip Code </Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter your zip code"
            name="zip"
            value={formData.zip}
            onChange={handleFormChange}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Year</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter the four digit year"
            name="year"
            value={formData.year}
            onChange={handleFormChange}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label style = {{marginRight: "5px"}}>Make</Form.Label>
          <Form.Label className="text-secondary">(i.e Toyota, BMW, Subaru...)</Form.Label>
          <Form.Control
            type="text"
            placeholder="Car Make"
            name="make"
            value={formData.make}
            onChange={handleFormChange}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label style = {{marginRight: "5px"}}>Model</Form.Label>
          <Form.Label className="text-secondary">(i.e Corolla, M3, Outback...)</Form.Label>
          <Form.Control
            type="text"
            placeholder="Car Model..."
            name="model"
            value={formData.model}
            onChange={handleFormChange}
          />
        </Form.Group>

        <Dropdown>
          <Dropdown.Toggle
            className="mb-3 form-select"
            variant="success"
            id="dropdown-basic"
          >
            {formData.issue}
          </Dropdown.Toggle>
          <Dropdown.Menu className="form-select" onSelect={handleFormChange}>
            <Dropdown.Item
              eventKey="Lights & Electrical"
              name="Lights & Electrical"
              onClick={handleSelectDropdown}
            >
              Lights & Electrical
            </Dropdown.Item>
            <Dropdown.Item 
              eventKey="AC/Thermostat"
              name="AC/Thermostat"
              onClick={handleSelectDropdown}>
              AC/Thermostat
            </Dropdown.Item>
            <Dropdown.Item 
              eventKey="Tires"
              name="Tires"
              onClick={handleSelectDropdown}>
              Tires
            </Dropdown.Item>
            <Dropdown.Item 
              eventKey="Brakes & Alignment"
              name="Brakes & Alignment"
              onClick={handleSelectDropdown}>
              Brakes & Alignment
            </Dropdown.Item>
            <Dropdown.Item 
              eventKey="Battery & Engine"
              name="Battery & Engine"
              onClick={handleSelectDropdown}>
              Battery & Engine
            </Dropdown.Item>
            <Dropdown.Item 
              eventKey="Exterior/ Body"
              name="Exterior/ Body"
              onClick={handleSelectDropdown}>
              Exterior/ Body
            </Dropdown.Item>
            <Dropdown.Item 
              eventKey="Interior"
              name="Interior"
              onClick={handleSelectDropdown}>
              Interior
            </Dropdown.Item>
            <Dropdown.Item 
              eventKey="General Tuning"
              name="General Tuning"
              onClick={handleSelectDropdown}>
              General Tuning
            </Dropdown.Item>
            <Dropdown.Item 
              eventKey="Oil & Filter"
              name="Oil & Filter"
              onClick={handleSelectDropdown}>
              Oil & Filter
            </Dropdown.Item>
            <Dropdown.Item 
              eventKey="Other"
              name="Other"
              onClick={handleSelectDropdown}>
              Other
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
       
        <Form.Group className="mb-3">
          <Form.Label>
            Anything additional you would like to share with the specialist?
          </Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            type="text"
            name="extra"
            value={formData.extra}
            onChange={handleFormChange}
          />
        </Form.Group>
        <div>
        <input type="file" onChange={onFileUploadChange} multiple></input>
        {/* <button>Upload Files to Storage</button> */}
      </div>
      <img height="200" src={fileUrl} alt="" />
      <Container className="text-center align-middle">
        <Button style ={{margin: "20px", padding: "10px"}}value="Submit Form" type="submit">
          {" "}
          Submit Form
        </Button>
      </Container>  
      </Form>
      
    </div>
  );
}
