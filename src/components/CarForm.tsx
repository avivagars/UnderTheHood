import { useState, useEffect } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import Form from "react-bootstrap/Form";
import { db } from '../firebase';
import {collection, getDocs, onSnapshot, addDoc, updateDoc, doc, deleteDoc} from "firebase/firestore";
import { Button } from "react-bootstrap";

export function CarForm() {

  const [newMake, setNewMake] = useState('');
  const [newModel, setNewModel] = useState('');
  const [users, setUsers] = useState<any[]>([]);
  const usersRef = collection(db, "users");

  const createUser = async () => {
    // await addDoc(usersRef, { make: newMake, model: newModel });
    console.log("whats up yal")
    // setNewMake("")
    // setNewModel("")
  };

  // useEffect(()=>
  // onSnapshot(collection(db, "users"), (snapshot) =>
  // setUsers(snapshot.docs.map((doc)=>({...doc.data()})))
  // ), []);

  // useEffect(() => {
  //   const getUsers = async () => {
  //     const data = await getDocs(usersRef);
  //     setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  //   };

  //   getUsers();
  // }, []);


  return (
    <div>
    <Form>
      <Form.Group className="mb-3">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Year</Form.Label>
        <Form.Control type="number" placeholder="Enter the four digit year" />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Make</Form.Label>
        <Form.Control type="text" placeholder="Car Make" onChange={(event) => {setNewMake(event.target.value)}}/>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Model</Form.Label>
        <Form.Control type="text" placeholder="Car Model" onChange={(event) => {setNewModel(event.target.value)}} />
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
      <Form.Group className="mb-3">
        <Form.Label>
          Anything additional you would like to share with the specialist?
        </Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
      <Button type="submit" value="Submit Form" onSubmit={createUser}> Submit Form</Button>
    </Form>
    
    {users.map((user) => {
      return (
        alert("Form Successfully Submitted")
      )
    })}
    </div>

    

  );
     
}
