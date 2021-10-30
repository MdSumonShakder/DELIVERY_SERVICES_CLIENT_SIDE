import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import { useState, useEffect } from 'react';
import initializeAuthentication from "../pages/Login/Firebase/Firebase.init";


initializeAuthentication();

const useFirebase = () => {
  const [users, setUsers] = useState({});
  const [loading, setLoading] = useState(true);


 
  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();
  const singInGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider)
      .finally(() => setLoading(false));
  }

  // observe user state change
  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, users => {
      if (users) {
        setUsers(users);
      }
      else {
        setUsers({})
      }
      setLoading(false);
    });
    return () => unsubscribed;
  }, [])

  const logOut = () => {
    setLoading(true);
    signOut(auth)
      .then(() => { })
      .finally(() => setLoading(false));
  }

  return {
    users,
    loading,
    logOut,
    singInGoogle,
    
   

  }
}

export default useFirebase;