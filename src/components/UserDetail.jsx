import React from "react";
import { useLocation } from "react-router-dom";

const UserDetail = () => {
    const {
        state: { user },
    } = useLocation();

    return (
        <div>
            <p>Hello</p>
            <p>
                My name is {user.name}, and I'm {user.age} years old
            </p>
        </div>
    );
};

export default UserDetail;
