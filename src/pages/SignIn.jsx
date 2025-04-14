import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';
import { app } from '../firebase';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signInUser = () => {
    signInWithEmailAndPassword(getAuth(app), email, password).then((value) =>
      alert('success')
    );
  };

  return (
    <div className="signin-page">
      <h1>SignIn Page</h1>
      <label htmlFor="email">Enter your Email</label>
      <input
        type="email"
        name="signin email"
        id="signin email"
        required
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />

      <label htmlFor="password">Enter your Password</label>
      <input
        type="password"
        name="signin  password"
        id="signin password"
        required
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />
      <button onClick={signInUser}>submit</button>
    </div>
  );
};

export default SignIn;
