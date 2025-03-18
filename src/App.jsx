import './app.css';
import { getDatabase, set, ref } from 'firebase/database';
import { app } from './firebase';

const db = getDatabase(app);

function App() {
  const putData = () => {
    set(ref(db, 'users/rakib'), { id: 1, name: 'rakib hasan', age: 18 });
    alert('putted data successfully');
  };

  return (
    <div className="App">
      <h1>Firebase React App</h1>
      <button onClick={putData}>Put Data</button>
    </div>
  );
}

export default App;
