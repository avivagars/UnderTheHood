import React, { SyntheticEvent, useEffect, useRef, useState } from "react";
import firebase from "firebase/app";
import './ChatPage.css'
import {
  addDoc,
  collection,
  limit,
  orderBy,
  onSnapshot,
  query,
  serverTimestamp,
} from "firebase/firestore";

import { auth, db } from "../firebase";
import {
  CollectionHook,
  useCollection,
  useCollectionData,
} from "react-firebase-hooks/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import {
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { Auth } from "./Auth";
import { ChatForm } from "./ChatForm";
import { DocumentData } from "@firebase/firestore-types";
import person from "../person_circle.png"
import { Button, Container, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function ChatPage() {
  interface Message {
    data(): Message;
    text: string;
    displayName: string;
    uid: string;
    photoURL: string;
    id: string;
  }

  type ChatMessageProps = {
    message: Message;
    key: string;
  };

  interface Options {
    idField: string;
  }

  const [user] = useAuthState(auth);
  const formId = window.location.pathname.split('/').at(-1)

  const messageRef = collection(db, `users/${formId}/messages`);
  const queryRef = query(messageRef, orderBy("createdAt", "desc"), limit(20));
  const [messages] = useCollection(queryRef, { })



  
  const [formValue, setFormValue] = useState("");

  const scrollTo = useRef(null);

  const sendMessage = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!user || !formValue) return;

    const payload = {
      text: formValue,
      displayName: user.displayName,
      createdAt: serverTimestamp(),
      uid: user.uid,
      photoURL: user.photoURL,
    };

    await addDoc(messageRef, payload);
    console.log(auth);

    setFormValue("");
  };

//   useEffect(() => {
//     scrollTo.current.scrollIntoView({behavior: "smooth"})
//   }, [messages])

// useEffect(() => {
//     if (scrollTo.current) {
//       scrollTo.current.scrollIntoView({ behavior: "smooth" });
//     }
//   }, [messages]);


  

  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider);
  };

  const logOut = () => {
    signOut(auth);
  };

  function ChatMessage(props: ChatMessageProps) {
    if (!auth.currentUser) return null;
    const { text, displayName, uid, photoURL } = props.message;
    const className =
      auth.currentUser != null && uid === auth.currentUser.uid
        ? "sent"
        : "received";

      // const className = uid === auth.currentUser.uid ? "sent" : "received"
    return (
      <div className={className}>
        <h1 className="name">{displayName}</h1>
        <p>{text}</p>

        <img src={photoURL} alt="" />
      </div>
    );
  }




  return (
    <>
     <h6 className="fs-1">
      <ChatForm/>
      </h6>
    <div className="Chat">
     
      
      <div className="header"></div>
      <img className="img-fluid mx-auto d-block" style={{width: 150, height: 180 }} src={person} alt="person-icon" />
      <h1 className="fs-3">Messages</h1>
      
      <div className="messages">
        <div ref={scrollTo}></div>
        {messages &&
          messages.docs.map((msg) => (
            <ChatMessage key={msg.id} message={msg.data() as Message} />
          ))}
      </div>
      <form className="sendMessage">
        <input
          value={formValue}
          onChange={(e) => setFormValue(e.target.value)}
        />
        <button onClick={(e) => sendMessage(e)}>Send</button>
      </form>
      <div className="buttons">
        {!user ? (
          <button className="login" onClick={() => googleSignIn()}>
            Login With Google
          </button>
        ) : (
          <button className="login" onClick={() => logOut()}>
            Log out
          </button>
        )}
       <Nav.Link to="/map" as={NavLink}>
        <button value="Submit Form" type="submit"> End Chat </button>
       </Nav.Link>
      </div>
    </div>
    </>
  );
}
export default ChatPage;
