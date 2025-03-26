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

  const deleteUser = () => {
    user.delete().then(console.log('your account deleted successfully'));
  };

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
      <h1>hello {user.email} welcome</h1>
      <button onClick={() => signOut(auth)}>logout</button>
      <button onClick={deleteUser}>delete account</button>
    </div>
  );
}

export default App;
