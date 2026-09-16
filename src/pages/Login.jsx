import { useState } from "react";
import { useNavigate } from "react-router-dom";


export const Login = () => {
    const [name, setName] = useState("");
    const navigate = useNavigate();

    const handleLogin= () => {
        if (name == "") return alert("Name is required")

        navigate(`/dashboard/profile/${name}/27`)
    }

    return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100vh" }}>
            <h1>Login</h1>
            <input
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <button onClick={handleLogin}>Login</button>
        </div>
    )
}