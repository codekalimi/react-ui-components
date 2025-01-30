import logo from './logo.svg';
import './App.css';
import Greetings from "./components/Greetings";
import UserCard from "./components/UserCard";
import Counter from "./components/Counter";
import UserList from "./components/UserList";
import AddUser from "./components/AddUser";
import MyButton from "./components/Button";
import MyTypography from "./components/Typography";
import TextField from "./components/TextField";
import Card from "./components/Card";
import UserForm from "./components/UserForm";
import Data from "./components/AppBar";

function App() {
  return (
    <div className="App">
      <div>
        <Greetings />
          <UserCard username="Aamir Kalimi" email="codekalimi@gmail.com" />
          <Counter/>
          <UserList/>
          <AddUser/>
          <MyButton/>
        <MyTypography/>
        <TextField/>
        <Card/>
        <UserForm/>
        <Data/>
      </div>
    </div>
  );
}

export default App;