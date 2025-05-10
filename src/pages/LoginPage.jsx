import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = ({ setSession }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [status, setStatus] = useState(null);
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch("http://localhost:8080/api/users/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password })
            });

            if (!res.ok) throw new Error("Login failed");
            const user = await res.json();
            setSession(user);
            setStatus({ success: true, message: "Login successful!" });
            navigate("/");
        } catch (err) {
            setStatus({ success: false, message: "Login failed. Check credentials." });
        }
    };

    return (
        <main className="flex flex-col items-center bg-background-default min-h-screen p-2 sm:p-4">
            <h1 className="text-accent-main text-3xl sm:text-5xl font-bold mb-2 text-center">Login</h1>
            <p className="text-gray-600 text-center mb-4 sm:mb-6 max-w-md">
                Sign in to your CityQuest account
            </p>
            <form
                className="bg-white rounded-xl shadow-lg p-4 sm:p-8 w-full max-w-md flex flex-col gap-6"
                onSubmit={handleLogin}
            >
                <div>
                    <label className="block text-base sm:text-lg font-semibold mb-2" htmlFor="email">
                        Email
                    </label>
                    <input
                        id="email"
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full rounded-md border p-2"
                        required
                    />
                </div>
                <div>
                    <label className="block text-base sm:text-lg font-semibold mb-2" htmlFor="password">
                        Password
                    </label>
                    <input
                        id="password"
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full rounded-md border p-2"
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="bg-accent-main text-white px-6 py-2 rounded-lg font-bold hover:bg-accent-dark transition"
                >
                    Login
                </button>
                {status && (
                    <div
                        className={`mt-2 text-center font-semibold ${status.success ? "text-green-600" : "text-red-600"}`}>
                        {status.message}
                    </div>
                )}
            </form>
        </main>
    );
};

export default LoginPage;
