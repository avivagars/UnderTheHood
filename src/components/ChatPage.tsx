import React, { useEffect, useRef, useState } from 'react';
import firebase from 'firebase/app';
import {addDoc, collection, limit, orderBy, query, serverTimestamp} from 'firebase/firestore';

import { auth, db } from '../firebase';
import { useCollection, useCollectionData } from 'react-firebase-hooks/firestore';
import { useAuthState } from 'react-firebase-hooks/auth';
import { GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';

// interface Message {
//     text: string,
//     displayName: string,
//     uid: string,
//     photoURL: string,
//     id: string
// }

// type ChatMessageProps = {
//     message: Message,
//     key: string
// }

export function ChatPage () {

    // interface Message {
    //     text: string,
    //     displayName: string,
    //     uid: string,
    //     photoURL: string,
    //     id: string
    // }
    
    // type ChatMessageProps = {
    //     message: Message,
    //     key: string
    // }
    // const [user] = useAuthState(auth)

    // const messageRef = collection(db, "messages")
    // const queryRef = query(messageRef, orderBy("createdAt", 'desc'), limit(20))
    // // const [messages] = useCollectionData(collection(db,"id"))
    // // ERROR ONE
    // const [messages]:[Message[] | undefined, boolean, Error | undefined]  = useCollection(queryRef, {idField: "id"})
    // // const [messages] : [Message[] | undefined, boolean, Error | undefined] = useCollectionData<Message>(queryRef, {idField: 'id'})
  
    // const [formValue, setFormValue] = useState('')
  
    // const scrollTo = useRef(null)
  
    // const sendMessage = async(e: React.FormEvent) => {
    //   e.preventDefault()
  
    //   if (!user || !formValue) return
      
    //   const payload = {
    //     text: formValue, 
    //     displayName: user.displayName,
    //     createdAt: serverTimestamp(), 
    //     uid: user.uid,
    //     photoURL: user.photoURL}
  
    //     await addDoc(messageRef, payload)
    //     console.log(auth)
  
    //     setFormValue("")
  
    // }
  
    // // useEffect(() => {
    // //   scrollTo.current.scrollIntoView({behavior: "smooth"})
    // // }, [messages])
  
    // const googleSignIn = () => {
    //   const provider = new GoogleAuthProvider();
    //   return signInWithPopup(auth, provider);
    // }
  
    // const logOut = () => {
    //   signOut(auth)
    // }

    
    
    // function ChatMessage(props: ChatMessageProps){
    //   if (!auth.currentUser) return
    //   const {text, displayName, uid, photoURL} = props.message
    //   const className = auth.currentUser != null && uid === auth.currentUser.uid ? 'sent' : 'received'
  
    // //   const className = uid === auth.currentUser.uid ? "sent" : "received"
    //   return (
    //     <div className={className}> 
          
    //         <h1 className='name'>{displayName}</h1>
    //         <p>{text}</p>
         
    //       <img src={photoURL} alt=""/>
  
    //     </div>
  
    //   )
  
    // }
  
    return (
      <div className="App">
        {/* <div className = "header"></div>
        <h1>Messages</h1>
        <div className= "messages"> 
          <div ref={scrollTo}></div> */}
          {/* ERROR 2 */}
          {/* {messages && messages.map(msg => <ChatMessage key={msg.id}
          message={msg.data()}/>)}
          </div>
  
        <form>
          <input value={formValue} onChange={(e) => setFormValue(e.target.value)}/>
          <button onClick={(e) => sendMessage(e)}>Send</button>
          
  
        </form>
  
  
        <div className = 'buttons'>
          {!user ? <button className="login" onClick={() => googleSignIn()}>Login With Google</button> : 
          <button className="login" onClick={() => logOut()}>Log out</button>}
        </div> */}
        
      </div>
    );
   
    
}
