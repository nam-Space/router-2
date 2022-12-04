import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Users from "./components/Users";
import UserDetail from "./components/UserDetail";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/users" element={<Users />} />
                <Route path="/user" element={<UserDetail />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
