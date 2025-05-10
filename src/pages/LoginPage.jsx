import { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = ({ setSession }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
            const res = await fetch(`http://localhost:8080/api/users/login?email=${encodeURIComponent(email)}&password=${encodeURIComponent(password)}`, {
                method: "POST"
            });

            if (!res.ok) throw new Error("Login failed");
            const user = await res.json();
            setSession(user);
            navigate("/");
        } catch (err) {
            alert("Login failed. Check credentials.");
        }
    };

    return (
        <div>
            <h2>Login</h2>
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleLogin}>Login</button>
        </div>
    );
};

export default LoginPage;
