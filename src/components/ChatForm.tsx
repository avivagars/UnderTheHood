import { collection, doc, getDoc, getDocs, limit, orderBy, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { db } from "../firebase";
import { Auth } from "./Auth";

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
    


    
  
    // useEffect(() => {
    //   const getUsers = async () => {
    //     const data = await getDocs(usersCollectionRef);
    //     setForm(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));

        // const docSnap = await getDoc(usersCollectionRef);
        // setForm([docSnap])
        
        


        // const q = query(collection(db, 'users'), where("model", '==', "civic"));
        // setForm([q])
        // console.log(q)
        // console.log(formId)

        

        // const form = await getDoc(doc(db, 'users', formId))
        // console.log("form", form)
        // usersCollectionRef.doc(formId).get()
        // const lastForm = query(usersCollectionRef, orderBy("createdAt", "desc"), limit(1));
        // setForm([lastForm])
        // console.log('forms', data.docs[data.docs.length-1].id)
        
        
    //   };
  
    //   getUsers();
    // }, []);
  
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