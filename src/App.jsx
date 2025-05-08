import './App.css';
import React from 'react';
import {
  doc,
  getDoc,
  addDoc,
  query,
  getDocs,
  where,
  collection,
  getFirestore,
  updateDoc,
} from 'firebase/firestore';
import { app, putData } from './firebase';
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

  const getDocument = async () => {
    const ref = doc(
      firestoreDB,
      'cities/yGVkcgri4uiXgd8jJYx3/places/ohk6Je1r4hQ8ZryDI1k7'
    );
    const snap = await getDoc(ref);
    console.log(snap.data());
  };

  const getDocumentsByQuery = async () => {
    const docsQuery = query(
      collection(firestoreDB, 'users/RtP1VgMC2R3Y8v8GKjZn/purchases'),
      where('Price', '!=', Infinity)
    );

    const gettingDocs = await getDocs(docsQuery);

    console.log(gettingDocs);

    gettingDocs.forEach((doc) => {
      console.log(doc.data());
    });
  };

  const putDataToRealtimeDB = () => {
    putData('root/a/b', { id: 1 });
  };

  const update = async () => {
    const docRef = doc(firestoreDB, 'cities', 'GzoV5dwCZs8RAC15YKzi');
    const res = await updateDoc(docRef, {
      name: 'new Rajshahi',
      visited: false,
    });
    console.log(res);
  };

  return (
    <div className="App">
      <button onClick={writeData}>Add data</button>
      <button onClick={makeSubData}>Put sub data</button>
      <button onClick={getDocument}>Get data</button>
      <button onClick={getDocumentsByQuery}>Getting data by query</button>
      <button onClick={update}>Update city docs</button>
      <button onClick={putDataToRealtimeDB}>Realtime DB</button>
    </div>
  );
}

export default App;
