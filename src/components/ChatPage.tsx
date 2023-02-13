import React, { SyntheticEvent, useEffect, useRef, useState } from "react";
import './ChatPage.css'
import {
  addDoc,
  collection,
  limit,
  orderBy,
  query,
  serverTimestamp,
} from "firebase/firestore";

import { auth, db } from "../firebase";
import {
  useCollection,
} from "react-firebase-hooks/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import {
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { ChatForm } from "./ChatForm";
import person from "../person_circle.png"
import { Col, Nav, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { getStorage, ref, listAll, getDownloadURL } from "firebase/storage";
import { url } from "inspector";

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
  const[fileUrl, setFileUrl] = useState<any>([]);
  

useEffect(() => {
  function listAllItems(): void {
    const storage=getStorage();
    const listRef = ref(storage)
  // Find all the prefixes and items.
  listAll(listRef)
  .then((res: { items: { name: string; }[]; }) => {
    res.items.forEach(async (item: { name: string; }) => {
     const url = await loadImages(item.name)
      setFileUrl((arr: string[])=>[...arr, url]);
    })
  })
  .catch((err: { message: any; }) => {
    alert(err.message);
  })
  };
  listAllItems()
  

},[])

  const loadImages = async (imageName: string): Promise<string>  => {
    const storage = getStorage();
    let url = ""
    await getDownloadURL(ref(storage, `${imageName}`)).then(response => {
      console.log(response)
     url = response
    })
    return url
  };


console.log(fileUrl)
  

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


    return (
      <div className={className}>
        <div>
        <h1 className="name">{displayName}</h1>
        <p>{text}</p>
        </div>
        <img src={photoURL} alt="" />
      </div>
    );
  }




  return (
    <>
    <Row>
      <Col>
     <h6 className="fs-1">
      <ChatForm/>
      </h6>
      </Col>
      <Col>
      {/* {fileUrl} */}
      {fileUrl.map((img: string, index: any) => (
        <Col key={index}>
          <img width="200px" height="200px" src={img} alt=""/>
        </Col>
      ))}
      
      
      </Col>
    </Row>
     
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
        <button className="btn btn-dark btn-lg" style={{width: "9rem"}} onClick={(e) => sendMessage(e)}>Send</button>
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
        <button className="btn btn-success"value="Submit Form" type="submit"> End Chat </button>
       </Nav.Link>
      </div>
    </div>
    </>
  );
}
export default ChatPage;
