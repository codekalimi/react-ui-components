import {useEffect, useState} from "react";
import axios from "axios";
import AddUser from "./AddUser";

const UserList = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/users")
            .then(response => {
                console.log(response.data);
                setUsers(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    let newUser = (user) => {
        console.log(user);
        setUsers([...users, {id: users.length + 1, ...user}]);
    };
    return(
        <div>
            <h2>User List</h2>
            <AddUser onAdd={newUser}/>
            <ul>
                {users.map(user => (
                    <li key={user.id}><h2>{user.name}</h2></li>
                ))}
            </ul>
        </div>
    )
}

export default UserList;