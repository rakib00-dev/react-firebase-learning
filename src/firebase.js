import { initializeApp } from 'firebase/app';
import { set, ref, getDatabase, get, child } from 'firebase/database';

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
export const realtimeDB = getDatabase(app);

export const putData = (key, data) => {
  set(ref(realtimeDB, key), data);
};

export const getdata = () => {
  get(child(ref(realtimeDB), 'grandfather')).then((snapshot) => {
    console.log(snapshot.val());
  });
};
