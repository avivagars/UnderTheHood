import { useState, useEffect, SyntheticEvent } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import Form from "react-bootstrap/Form";
import { db } from '../firebase';
import {collection, getDocs, onSnapshot, addDoc, updateDoc, doc, deleteDoc, setDoc} from "firebase/firestore";
import Button from "react-bootstrap/Button";

export function CarForm() {

  // const [newMake, setNewMake] = useState('');
  // const [newModel, setNewModel] = useState('');
  const [users, setUsers] = useState<any[]>([]);
  const usersRef = collection(db, "users");

  const [formData, setFormData] = useState({
    name: " ",
    email: " ",
    year: 0,
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


  const createUser = async (e: SyntheticEvent) => {
    e.preventDefault()
    await addDoc(usersRef, formData);

    alert("Form Successfully Submitted")
    // console.log("form submittedddd")
    setFormData({
    name: " ",
    email: " ",
    year: 0,
    make: " ",
    model: " ",
    issue: " ",
    media: " ",
    extra: " "
  })
}
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
    <Form onSubmit={createUser}>
      <Form.Group className="mb-3">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter name" name="name" value={formData.name} onChange={handleChange} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" name="email" value={formData.email} onChange={handleChange} />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Year</Form.Label>
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
        <Dropdown.Toggle className="mb-3" variant="success" id="dropdown-basic">
          General Issue:
        </Dropdown.Toggle>
        <Dropdown.Menu>
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
  );
     
}
