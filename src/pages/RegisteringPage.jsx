import { useState } from "react";
import { useNavigate } from "react-router-dom";

const RegisteringPage = ({ setSession }) => {
    const [email, setEmail] = useState("");
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [status, setStatus] = useState(null);
    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch("http://localhost:8080/api/users/register", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, userName, password }),
            });

            if (!res.ok) throw new Error("Registration failed");
            const user = await res.json();
            setSession(user);
            setStatus({ success: true, message: "Registration successful!" });
            navigate("/");
        } catch (err) {
            setStatus({ success: false, message: "Registration failed." });
        }
    };

    return (
        <main className="flex flex-col items-center bg-background-default min-h-screen p-2 sm:p-4">
            <h1 className="text-accent-main text-3xl sm:text-5xl font-bold mb-2 text-center">Register</h1>
            <p className="text-gray-600 text-center mb-4 sm:mb-6 max-w-md">
                Create your CityQuest account
            </p>
            <form
                className="bg-white rounded-xl shadow-lg p-4 sm:p-8 w-full max-w-md flex flex-col gap-6"
                onSubmit={handleRegister}
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
                        onChange={e => setEmail(e.target.value)}
                        className="w-full rounded-md border p-2"
                        required
                    />
                </div>
                <div>
                    <label className="block text-base sm:text-lg font-semibold mb-2" htmlFor="userName">
                        Username
                    </label>
                    <input
                        id="userName"
                        type="text"
                        placeholder="Username"
                        value={userName}
                        onChange={e => setUserName(e.target.value)}
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
                        onChange={e => setPassword(e.target.value)}
                        className="w-full rounded-md border p-2"
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="bg-accent-main text-white px-6 py-2 rounded-lg font-bold hover:bg-accent-dark transition"
                >
                    Register
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

export default RegisteringPage;
