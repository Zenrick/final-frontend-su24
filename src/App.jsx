import './App.css';
import { BrowserRouter, Link } from "react-router-dom";

function App() {
  return (
    <>
      <h1>WELCOME</h1>
      <Link to="/employees"><button>All Employees</button></Link>
      <Link to="/tasks"><button>All Tasks</button></Link>
    </>
  );
}

export default App;
