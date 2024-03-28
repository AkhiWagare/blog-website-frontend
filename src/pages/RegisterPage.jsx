import { useState } from "react"

export default function RegisterPage() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    async function register(ev) {
        ev.preventDefault()
        const response = await fetch('http://localhost:3000/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username,
                password
            })
        })

        alert(response.status === 200 ? "Registration Successful" : "Registrations Failed")
    }

    return (
        <form className="register" onSubmit={register}>
            <h1>Register</h1>
            <input type="text"
                placeholder="Username"
                value={username}
                onChange={e => setUsername(e.target.value)}
            />
            <input type="password"
                placeholder="Password"
                value={password}
                onChange={e => setPassword(e.target.value)}
            />
            <button>Register</button>
        </form>
    )
}