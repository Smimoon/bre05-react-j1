import './App.css';
import Student from './student.jsx';
const students = [
  { notes: [12, 11, 10], name: "Alan" },
  { notes: [18, 10, 19], name: "Alice" },
  { notes: [10, 9, 11], name: "Bernard" },
  { notes: [11, 17, 19], name: "Sophie" },
];
function App() {

  return (
    <section>
      <h2>Étudiants</h2>
      <ul>
        {users.map((user, i) => <li key = {i}></li>
      </ul>
    </section>
  );
}

export default App;