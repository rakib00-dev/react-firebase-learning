import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_apiKey,
  authDomain: import.meta.env.VITE_authDomain,
  projectId: import.meta.env.VITE_projectId,
  storageBucket: import.meta.env.VITE_storageBucket,
  messagingSenderId: import.meta.env.VITE_messagingSenderId,
  appId: import.meta.env.VITE_appId,
  databaseURL: import.meta.env.VITE_databaseURL,
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export const doCreateUserWithEmailAndPassword = (email, password) => {
  createUserWithEmailAndPassword(auth, email, password).then((res) =>
    alert('success')
  );
};
