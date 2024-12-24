import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {User} from './create.js';

function Signin({ formData }){
    return(
<div>
            {formData ? ( // Check if formData exists
                <>
                    <p>Email: {formData.email}</p>
                    <p>Password: {formData.password}</p>
                </>
            ) : (
                <p>No form data submitted yet.</p>
            )}
        </div>

    )
}

export default Signin;