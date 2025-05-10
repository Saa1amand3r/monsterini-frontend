import { useState } from "react";
import { useNavigate } from "react-router-dom";

const RegisteringPage = ({ setSession }) => {
    const [email, setEmail] = useState("");
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleRegister = async () => {
        try {
            const res = await fetch("/api/users/register", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, userName, password }),
            });

            const user = await res.json();
            setSession(user);
            navigate("/");
        } catch (err) {
            alert("Registration failed.");
        }
    };

    return (
        <div>
            <h2>Register</h2>
            <input placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
            <input placeholder="Username" value={userName} onChange={e => setUserName(e.target.value)} />
            <input placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} type="password" />
            <button onClick={handleRegister}>Register</button>
        </div>
    );
};

export default RegisteringPage;
