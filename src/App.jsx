import './app.css';
import SignUp from './pages/Signup';
import SignIn from './pages/SignIn';
import { useFirebase } from './context/Firebase';

function App() {
  const firebase = useFirebase();
  console.log(firebase);

  return (
    <div className="App">
      <input type="email" placeholder="email" required />
      <input type="password" placeholder="password" required />
      <button>Put Data</button>
      {/* <SignUp /> */}
      {/* <SignIn /> */}
    </div>
  );
}

export default App;
