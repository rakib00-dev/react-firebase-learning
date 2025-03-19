import './app.css';
import { doCreateUserWithEmailAndPassword } from './firebase';
import SignUp from './pages/Signup';

function App() {
  return (
    <div className="App">
      <SignUp />
    </div>
  );
}

export default App;
