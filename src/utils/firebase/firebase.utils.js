// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore'

import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword
} from 'firebase/auth'

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB0SvgtcL8715Nzgz-gU972SriOgTur9dg",
  authDomain: "crwn-db-8a6eb.firebaseapp.com",
  projectId: "crwn-db-8a6eb",
  storageBucket: "crwn-db-8a6eb.appspot.com",
  messagingSenderId: "827254972777",
  appId: "1:827254972777:web:03ebee9286a4beb99d5df8"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: 'select_account',
});


export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);

/* create user in firestore database after being authenticated */

/*create a new db */
export const db = getFirestore()
/* create user docRef then doc awaiting auth to happen */

export const createUserDocumentFromAuth = async (userAuth , info ={}) => {
  const userDocRef = doc(db, 'users', userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...info
      });
    } catch (error) {
      console.log('error creating the user', error.message);
    }
  }

  return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};

