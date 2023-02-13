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
        <div className = 'buttons'>
        {!user ? <button className="login" onClick={() => googleSignIn()}>Login With Google</button> : 
        <button className="login" onClick={() => logOut()}>Log out</button>}
      </div>
    );
};
  