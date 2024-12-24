import React, { useState } from 'react';
import { Link } from 'react-router-dom';
let Mail =null;
let Pass =null;


function Create({ onFormSubmit }) {
    const [formValues, setFormValues] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormValues({
            ...formValues,
            [name]: value
        });
        
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        onFormSubmit(formValues);
        console.log('Form submitted', formValues);
        Mail=formValues.email;
        Pass=formValues.password;

    };

    return (
        
        <form onSubmit={handleSubmit} className="create-account-form">
            <h1>Create Account</h1>
            <div>
                <label>First Name</label>
                <input
                    type="text"
                    name="firstName"
                    value={formValues.firstName}
                    onChange={handleChange}
                    placeholder="First Name"
                />
            </div>
            <div>
                <label>Last Name</label>
                <input
                    type="text"
                    name="lastName"
                    value={formValues.lastName}
                    onChange={handleChange}
                    placeholder="Last Name"
                />
            </div>
            <div>
                <label>Email</label>
                <input
                    type="email"
                    name="email"
                    value={formValues.email}
                    onChange={handleChange}
                    placeholder="Email"
                />
            </div>
            <div>
                <label>Password</label>
                <input
                    type="password"
                    name="password"
                    value={formValues.password}
                    onChange={handleChange}
                    placeholder="Password"
                />
            </div>
            <div>
                <label>Confirm Password</label>
                <input
                    type="password"
                    name="confirmPassword"
                    value={formValues.confirmPassword}
                    onChange={handleChange}
                    placeholder="Confirm Password"
                />
            </div>
            
            <button type="submit">Create Account</button>
            <Link to="/signin">
            <p>signin</p>
            </Link>
        </form>
    );
}

export default Create;


