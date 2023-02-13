import { collection, doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { db } from "../firebase";

export function ChatForm() {
    const [form, setForm] = useState<Array<any>>([]);
    const usersCollectionRef = collection(db, "users");
    const formId = window.location.pathname.split('/').at(-1)
    const docRef = doc(usersCollectionRef, formId)
    

    useEffect (() => {
      getDoc(docRef)
    .then((doc) => {
      setForm([doc.data()] )
      console.log(doc.data)
    })
    }, []);
  
    return (
      <div>
        {form.map((message, index) => {
  
        return (
         <Card key={index} className="fs-4">
          {' '}
          <div>Name: {message.name}</div>
          <div>Year: {message.year}</div>
          <div>Make: {message.make}</div>
          <div>Model: {message.model}</div>
          <div>Problem: {message.issue}</div>
          <div>Problem Description: {message.extra}</div>
          </Card>
        );
      })}
      </div>
    );
  }