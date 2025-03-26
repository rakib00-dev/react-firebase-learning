import './app.css';
import SignUp from './pages/Signup';
import SignIn from './pages/SignIn';
import React, { useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import { app } from './firebase';

const auth = getAuth(app);

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        console.log('you are logged out');

        setUser(null);
      }
    });
  }, []);

  console.log(user);

  if (user === null) {
    return (
      <>
        <SignUp />
        <SignIn />
      </>
    );
  }

  return (
    <div className="App">
      <h1>
        hello {user.email} & your id is {user.uid.slice(0.5) + '...'}
      </h1>
      <button onClick={() => signOut(auth)}>logout</button>
    </div>
  );
}

export default App;
