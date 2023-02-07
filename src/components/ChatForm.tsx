import { collection, getDocs, limit, orderBy, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase";
import { Auth } from "./Auth";

export function ChatForm() {
    const [form, setForm] = useState<Array<any>>([]);
    const usersCollectionRef = collection(db, "users");
    console.log(usersCollectionRef)
  
    useEffect(() => {
      const getUsers = async () => {
        const data = await getDocs(usersCollectionRef);
        const lastForm = query(usersCollectionRef, orderBy("createdAt", "desc"), limit(1));
        setForm([lastForm])
        // setForm(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        
      };
  
      getUsers();
    }, []);
  
    return (
      <div>
        {form.map((message) => {
  
        return (
         <div className="fs-4">
          {' '}
          <div>Name: {message.name}</div>
          <div>Year: {message.year}</div>
          <div>Make: {message.make}</div>
          <div>Model: {message.model}</div>
          <div>Problem: {message.issue}</div>
          <div>Problem Description: {message.extra}</div>
          <div>Photos: {message.media}</div>
      
          </div>
        );
      })}
      </div>
    );
  }