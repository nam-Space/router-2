import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Users = () => {
    const navigate = useNavigate();

    const employees = [
        {
            id: 1,
            name: "Hoa",
            age: 20,
        },
        {
            id: 2,
            name: "Khánh",
            age: 25,
        },
        {
            id: 3,
            name: "Tú",
            age: 22,
        },
    ];

    const handleClick = (user) => {
        navigate(`/user`, {
            state: {
                user,
            },
        });
    };

    return (
        <table className="container table table-hover table-striped">
            <thead>
                <tr>
                    <td>ID</td>
                    <td>Name</td>
                    <td>Age</td>
                </tr>
            </thead>
            <tbody>
                {employees.map((user) => (
                    <tr key={user.id} onClick={() => handleClick(user)}>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.age}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default Users;
