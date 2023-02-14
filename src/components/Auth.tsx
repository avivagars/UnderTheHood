import { GoogleAuthProvider, signOut, signInWithPopup} from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";

export function Auth () {
    const [user] = useAuthState(auth);

    const googleSignIn = () => {
        const provider = new GoogleAuthProvider();
        return signInWithPopup(auth, provider);
      };
    
      const logOut = () => {
        signOut(auth)
      };
      
    return (
        <div className = ''>
        {!user ? <button 
        style={{ height: "3rem", position: "relative" }}
        className="btn btn-success rounded-pill" 
        onClick={() => googleSignIn()}>Login</button> : 
        <button 
        style={{ height: "3rem", position: "relative" }}
        className=" btn btn-success rounded-pill" 
        onClick={() => logOut()}>Log Out</button>}
      </div>
    );
};
  