import { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { userContext } from '../UserContext'

export default function LoginPage() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const { setUserinfo } = useContext(userContext)

    // const [redirect, setRedirect] = useState(false)
    const navigate = useNavigate()

    async function login(ev) {
        ev.preventDefault();
        const response = await fetch('http://localhost:3000/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username,
                password
            }),
            credentials: 'include',
        });

        if (response.ok) {
            // setRedirect(true)
            response.json().then(userInfo => {

                setUserinfo(userInfo)

                fetch('http://localhost:3000/profile', {
                    method: 'GET',
                    credentials: 'include',

                })
                navigate('/')

            })
        } else {
            alert('Invalid credentials! Please try again')
        }
    }

    return (
        <form className="login" onSubmit={login}>
            <h1>Login</h1>
            <input type="text"
                placeholder="Username"
                value={username}
                onChange={ev => setUsername(ev.target.value)}
            />
            <input type="password"
                placeholder="Password"
                value={password}
                onChange={ev => setPassword(ev.target.value)}
            />
            <button>Login</button>
        </form >
    )
}