import React from "react";
import { useState, useEffect } from "react";
import '../App.css'

const Login = ( {isIncluded} ) => {

    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [loginComplete, setLoginComplete] = useState('')

    useEffect(() => {
      setLoginComplete(userName+password)
    
    }, [userName, password] )
    

    const handleSubmit = () => {
       
        isIncluded = localStorage.getItem('Login').includes(loginComplete)
        isIncluded ? alert('Correct Login') : alert('This account is not registered. Please sign up.')
        
    };
    return (
        <div className="login-div">
            <form onSubmit={handleSubmit} className='login'>
                <input
                    className=""
                    type='text'
                    valye={userName}
                    name="Username"
                    placeholder="Your Username"
                    onChange={({ target }) => setUserName(target.value)}
                />
                <input
                    type='text'
                    className=""
                    valye={password}
                    name="Password"
                    placeholder="Your Password"
                    onChange={({ target }) => setPassword(target.value)}
                />
                <input
                    onClick={handleSubmit}
                    className=''
                    type='button'
                    value='LOGIN'
                />
            </form>
        </div>
    )
}

export default Login;