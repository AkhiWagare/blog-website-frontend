import { Link } from 'react-router-dom';
import { useState, useEffect, useContext } from 'react'
import { userContext } from './UserContext'

export default function Header() {
    const { userInfo, setUserinfo } = useContext(userContext)

    const fetchUsername = () => {
        fetch('http://localhost:3000/profile', {
            credentials: 'include',
        }).then(response => {
            response.json().then(userInfo => setUserinfo(userInfo))
        }).catch(err => console.log(err))
    }

    useEffect(() => { fetchUsername() }, [])

    function logout() {
        fetch('http://localhost:3000/logout', {
            credentials: 'include',
            method: 'POST'
        })
        setUserinfo(null)
    }

    const username = userInfo?.username

    return (
        <header>
            <Link to="/" className='logo'>MyBlog</Link>
            <nav>
                {username ? (
                    <>
                        <span>Hello, &nbsp;{username}</span>
                        <Link to="/create">Create new Post</Link>
                        <a onClick={logout}>Logout</a>
                    </>
                ) : (
                    <>
                        <Link to="/login">Login</Link>
                        <Link to="/register">Register</Link>
                    </>
                )}
            </nav>
        </header>
    )
}