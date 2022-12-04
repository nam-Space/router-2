import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const handleChangeEmail = (e) => {
        setEmail(e.target.value);
    };

    const handleChangePass = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = () => {
        if (email === "admin@gmail.com" && password === "letmein") {
            navigate("/users");
        } else {
            alert("Something wrong!");
        }
    };

    return (
        <div className="container pt-3">
            <form action="">
                <div className="mb-3 row">
                    <label
                        htmlFor="staticEmail"
                        className="col-sm-2 col-form-label"
                    >
                        Email
                    </label>
                    <div className="col-sm-10">
                        <input
                            type="text"
                            className="form-control"
                            id="staticEmail"
                            value={email}
                            onChange={handleChangeEmail}
                        />
                    </div>
                </div>
                <div className="mb-3 row">
                    <label
                        htmlFor="inputPassword"
                        className="col-sm-2 col-form-label"
                    >
                        Password
                    </label>
                    <div className="col-sm-10">
                        <input
                            type="password"
                            className="form-control"
                            id="inputPassword"
                            value={password}
                            onChange={handleChangePass}
                        />
                    </div>
                </div>
                <button
                    className="btn btn-success"
                    type="submit"
                    onClick={handleSubmit}
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default Login;
