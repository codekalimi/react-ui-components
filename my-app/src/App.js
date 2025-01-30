import logo from './logo.svg';
import './App.css';
import Greetings from "./components/Greetings";
import UserCard from "./components/UserCard";
import Counter from "./components/Counter";
import UserList from "./components/UserList";
import AddUser from "./components/AddUser";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <div>
        <Greetings />
          <UserCard username="Aamir Kalimi" email="codekalimi@gmail.com" />
          <Counter/>
          <UserList/>
          <AddUser/>
      </div>
    </div>
  );
}

export default App;