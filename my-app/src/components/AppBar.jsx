import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import UserForm from "./UserForm";

function Navbar() {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" sx={{ flexGrow: 1 }}>
                    MyApp
                </Typography>
                <Button color="inherit" component={Link} to="/">
                    Home
                </Button>
                <Button color="inherit" component={Link} to="/add">
                    Add User
                </Button>
            </Toolbar>
        </AppBar>
    );
}


function Data() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/add" element={<UserForm />} />
            </Routes>
        </Router>
    );
}

export default Data;