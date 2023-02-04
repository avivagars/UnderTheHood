import { collection, getDocs } from "firebase/firestore";
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
        setForm(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      };
  
      getUsers();
    }, []);
  
    return (
      <div>
        <Auth/>
        {form.map((message) => {
  
        return (
         <div>
          {' '}
          <h1>Name: {message.name}</h1>
          <h1>Year: {message.year}</h1>
          <h1>Make: {message.make}</h1>
          <h1>Model: {message.model}</h1>
          <h1>Problem: {message.issue}</h1>
          <h1>Problem Description: {message.extra}</h1>
          <h1>Photos: {message.media}</h1>
      
          </div>
        );
      })}
      </div>
    );
  }