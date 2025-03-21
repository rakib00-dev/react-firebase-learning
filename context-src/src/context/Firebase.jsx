import { initializeApp } from 'firebase/app';
import { getDatabase, ref, set } from 'firebase/database';
import {
  createUserWithEmailAndPassword,
  getAuth,
  reauthenticateWithCredential,
} from 'firebase/auth';
import React from 'react';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_apiKey,
  authDomain: import.meta.env.VITE_authDomain,
  projectId: import.meta.env.VITE_projectId,
  storageBucket: import.meta.env.VITE_storageBucket,
  messagingSenderId: import.meta.env.VITE_messagingSenderId,
  appId: import.meta.env.VITE_appId,
  databaseURL: import.meta.env.VITE_databaseURL,
};

const firebaseApp = initializeApp(firebaseConfig);

const firebaseAuth = getAuth(firebaseApp);
export const database = getDatabase(firebaseApp);

export const FirebaseContext = React.createContext(null);

export const useFirebase = () => {
  return React.useContext(FirebaseContext);
};

export const FirebaseProvider = ({ children }) => {
  const signUpUserWithEmailAndPassword = (email, password) => {
    return createUserWithEmailAndPassword(firebaseAuth, email, password);
  };

  const putData = (key, data) => {
    return set(ref(database, `users/${key}`), data);
  };

  return (
    <FirebaseContext.Provider
      value={{ signUpUserWithEmailAndPassword, putData }}
    >
      {children}
    </FirebaseContext.Provider>
  );
};
