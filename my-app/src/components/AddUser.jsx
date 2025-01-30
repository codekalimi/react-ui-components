import {useState} from "react";

const AddUser = ({onAdd}) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        onAdd({name, email});
        setName("");
        setEmail("");
    }

    return (
        <div>
            <h1>Add User</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Username:</label>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
                </div>
                <div>
                    <label>Email:</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <button type='submit'>Add User</button>
            </form>
        </div>
    );
}

export default AddUser;