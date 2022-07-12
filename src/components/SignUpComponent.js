import React from 'react';
import '../App.css'
import { useEffect, useState } from 'react';
import useLocalStorage from '../hooks/useLocalStorage'

const SignUp = () => {

    const [text, setText] = useLocalStorage('Login', '');
    const [nameRegister, setNameRegister] = useState('')
    const [passwordRegister, setPasswordRegister] = useState()
    const [completeLogin, setCompleteLogin] = useState(text || [])

    useEffect(() => {
        setText(completeLogin)
      
    }, [completeLogin])

    useEffect(() => {
      localStorage.getItem('Login')   
      
    }, [])    
    
    const handleSubmit = (e) => {
        if ((nameRegister || passwordRegister) === '') {
            alert('Debe completar los campos')
            e.preventDefault();
        } else {
            alert('Te has registrado correctamente!')
            let newLogin = []
            newLogin = [...completeLogin,nameRegister+passwordRegister]
            setCompleteLogin(newLogin)
        }

        console.log('perfect submit!')       
      
    };
    return (
        <div className="login-div">
            <form className=''>
                <input
                    className=""
                    type='text'
                    value={nameRegister}
                    name="Username"
                    placeholder="Your Username"
                    onChange={({ target }) => setNameRegister(target.value)}
                />
                <input
                    type='password'
                    className=""
                    value={passwordRegister}
                    name="Password"
                    placeholder="Your Password"
                    onChange={({ target }) => setPasswordRegister(target.value)}
                />
                <input
                    onClick={handleSubmit}
                    className=''
                    type='button'
                    value='REGISTER'
                />
            </form>

        </div>
    )
}

export default SignUp;