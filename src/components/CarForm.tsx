import { useState, SyntheticEvent } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import Form from "react-bootstrap/Form";
import { db } from '../firebase';
import {collection, addDoc} from "firebase/firestore";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import 'react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css';
import RangeSlider from "react-bootstrap-range-slider";



export function CarForm() {

  const usersRef = collection(db, "users");

  const [formData, setFormData] = useState({
    name: " ",
    email: " ",
    zip: " ",
    year: 2023,
    make: " ",
    model: " ",
    issue: " ",
    media: " ",
    extra: " "
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData( prevState => {
      return {
        ...prevState,
        [e.target.name]: e.target.value
      }
    })
  }
  console.log(formData)

  const navigate = useNavigate();
  const createUser = async (e: SyntheticEvent) => {
    e.preventDefault()
    const doc = await addDoc(usersRef, formData);
    
    navigate(`/chat/${doc.id}`);

    alert("Form Successfully Submitted")
    setFormData({
    name: " ",
    email: " ",
    zip: " ",
    year: 2023,
    make: " ",
    model: " ",
    issue: " ",
    media: " ",
    extra: " "
  })
}

const form = document.querySelector('form')
form?.addEventListener('submit', e => {
  if(!form?.checkValidity()) {
    // e.preventDefault()
  }
  form.classList.add('was-validated')
})

  return (
    <div className='container'>
      <header className="fs-3">Please fill in the following information...</header>
    <Form onSubmit={createUser}>
      <Form.Group className="mb-3">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter name" name="name" value={formData.name} onChange={handleChange}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" name="email" value={formData.email} onChange={handleChange} />
        <div className="invalid-feedback">Invalid email</div>
        <div className="valid-feedback">correct</div>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Zip Code </Form.Label>
        <Form.Control type="number" placeholder="Enter your zip code" name="zip" value={formData.zip} onChange={handleChange}/>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Year</Form.Label>
        {/* <RangeSlider value={formData.year} onChange={handleChange}/> */}
        <Form.Control type="number" placeholder="Enter the four digit year" name="year" value={formData.year} onChange={handleChange}/>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Make</Form.Label>
        <Form.Control type="text" placeholder="Car Make..."  name="make" value={formData.make} onChange={handleChange}/>
        
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Model</Form.Label>
        <Form.Control type="text" placeholder="Car Model..." name="model" value={formData.model} onChange={handleChange} />
      </Form.Group>
    <Dropdown>
      <select className="form-select">
        <option>1</option>
        <option>2</option>
        <option>3</option>
      </select>
    </Dropdown>

      <Dropdown>
        <Dropdown.Toggle className="mb-3 form-select" variant="success" >
          General Issue:
        </Dropdown.Toggle>
        <Dropdown.Menu className="form-select">
          <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      <Form.Group className="mb-3" controlId="formFileMultiple">
        <Form.Label>Upload Photos/Videos/Audio</Form.Label>
        <Form.Control type="file" placeholder=".jpg, .png...." name="media" onChange={handleChange}/>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>
          Anything additional you would like to share with the specialist?
        </Form.Label>
        <Form.Control as="textarea" rows={3} type="text" name="extra" value={formData.extra} onChange={handleChange}/>
      </Form.Group>
      
      <Button value="Submit Form" type="submit"> Submit Form</Button>
      
    </Form>
    </div>
  );
};
