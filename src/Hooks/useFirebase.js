import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged,createUserWithEmailAndPassword } from "firebase/auth";
import { useState, useEffect } from 'react';
import initializeAuthentication from "../pages/Login/Firebase/Firebase.init";


initializeAuthentication();

const useFirebase = () => {
  const [users, setUsers] = useState({});
  const [loading, setLoading] = useState(true);


 ///// GOOGLE SIGN-IN
  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();
  const singInGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider)
      .finally(() => setLoading(false));
  };

//// EMAIL-PASSWORD SIGN-IN 
const registerEmailAndPassword=(email,password)=>{
 return createUserWithEmailAndPassword(auth, email, password)

}



  // observe user state change
  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (users) => {
      if (users) {
        setUsers(users);
      }
      else {
        setUsers({})
      }
      setLoading(false);
    });
    return () => unsubscribed()
  }, []);

  

  const logOut = () => {
    setLoading(true);
    signOut(auth)
      .then(() => {
        setUsers({})
       }).catch((error)=>{

       })
      .finally(() => setLoading(false));
  }

  return {
    users,
    setUsers,
    loading,
     logOut,
    singInGoogle,
    registerEmailAndPassword
    
    
   

  }
}

export default useFirebase;