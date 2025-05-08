import { initializeApp } from 'firebase/app';
import { set, ref, getDatabase, get, child, onValue } from 'firebase/database';
import { useEffect, useState } from 'react';

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

// get(child(ref(realtimeDB), 'grandfather/father')).then((snapshot) => {
//   console.log(snapshot.val());
// });
