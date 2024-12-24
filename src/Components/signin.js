import React, { useState } from 'react';
import { Link,useNavigate  } from 'react-router-dom';

function Signin({ formData }){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loginError, setLoginError] = useState('');

    const navigate = useNavigate();

    const handleChange = (event) => {
        const { name, value } = event.target;
    
        if (name === "email") {
            setEmail(value);
        } else if (name === "password") {
            setPassword(value);
        }
    };
    

    const handleSubmit = (event) => {
        event.preventDefault();
        if(email===formData.email && password===formData.password){
            setLoginError('');
            navigate('/');
        }else {
            console.log(formData.email,formData.password)
            console.log(email,password)
            setLoginError('Invalid email or password.');
        }

        
    };

    return(
        <form onSubmit={handleSubmit} className="Signupage-form">
        <h1>Sign up</h1>
        <div>
                <label>Email</label>
                <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={handleChange}
                    placeholder="Email"
                />
            </div>
            <div>
                <label>Password</label>
                <input
                    type="password"
                    name="password"
                    value={password}
                    onChange={handleChange}
                    placeholder="Password"
                />
            </div>
            <button type="submit">Sign up</button>
            <div>
                {loginError}
            </div>
        </form>

    )
}

export default Signin;