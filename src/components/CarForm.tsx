import { useState } from "react";
import Dropdown from 'react-bootstrap/Dropdown';
import Form from 'react-bootstrap/Form';

export function CarForm() {

  return (
    <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Year</Form.Label>
        <Form.Control type="number" placeholder="Enter the four digit year" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Make</Form.Label>
        <Form.Control type="text" placeholder="Car Make" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Model</Form.Label>
        <Form.Control type="text" placeholder="Car Model" />
      </Form.Group>
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        General Issue:
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    <Form.Group className="mb-3" controlId="formFile">
        <Form.Label>Upload Photos/Videos/Audio</Form.Label>
        <Form.Control type="file" placeholder=".jpg, .png...." />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Anything additional you would like to share with the specialist?</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
    <div>
      <input type="submit" value="Submit Form" />
    </div>
  </Form>
  );
};

