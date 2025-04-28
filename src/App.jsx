import './App.css';
import React from 'react';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import { addDoc, collection, getFirestore } from 'firebase/firestore';
import { app } from './firebase';

const firestoreDB = getFirestore(app);

function App() {
  const writeData = async () => {
    const result = await addDoc(collection(firestoreDB, '/cities'), {
      name: 'Rajshahi',
      pinCode: 123,
      lat: 456,
      long: 789,
    });
    console.log('Result:', result);
  };

  const makeSubData = async () => {
    const place = await addDoc(
      collection(firestoreDB, '/cities/yGVkcgri4uiXgd8jJYx3/places'),
      {
        name: 'Rangpur Polytechnic Institute',
        date: Date.now(),
      }
    );
    console.log({ place });
  };

  return (
    <div className="App">
      <button onClick={writeData}>Add data</button>
      <button onClick={makeSubData}>Put sub data</button>
    </div>
  );
}

export default App;
