import './app.css';
import SignUp from './pages/Signup';
import SignIn from './pages/SignIn';
import { database, useFirebase } from './context/Firebase';
import React from 'react';
import { ref, set } from 'firebase/database';

function App() {
  const firebase = useFirebase();

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  return (
    <div className="App">
      <input
        type="email"
        placeholder="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="password"
        required
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        onClick={() => {
          firebase.signUpUserWithEmailAndPassword(email, password);
          firebase.putData(email.split('@')[0], { email, password });
        }}
      >
        Put Data
      </button>
      {/* <SignUp /> */}
      {/* <SignIn /> */}
    </div>
  );
}

export default App;
