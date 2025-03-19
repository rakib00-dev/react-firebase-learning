import { doCreateUserWithEmailAndPassword } from '../firebase';
import { useState } from 'react';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const createUser = () => {
    doCreateUserWithEmailAndPassword(email, password);
  };
  return (
    <div className="signup-page">
      <label htmlFor="email">Email</label>
      <input
        type="email"
        name="email"
        id="email"
        required
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />

      <label htmlFor="password">Password</label>
      <input
        type="password"
        name="password"
        id="password"
        required
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />
      <button onClick={createUser}>submit</button>
    </div>
  );
};

export default SignUp;
