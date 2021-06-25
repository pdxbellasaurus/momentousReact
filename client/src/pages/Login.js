import React, { useState } from 'react'
import API from '../utils/API';

function Login() {
    const [formObject, setFormObject] = useState({})

    function handleInputChange(event) {
        const { name, value } = event.target;
        setFormObject({...formObject, [name]: value})
      };

    function handleFormSubmit(event) {
        event.preventDefault();
        API.loginUser({
            username: formObject.username,
            password: formObject.password
        })
    };

    return(
        <div>
            <form>
                <input onChange={handleInputChange} type="text" placeholder="username" name="username" />
                <input onChange={handleInputChange} placeholder="password" type="password" name="password" />
                <button type="submit" onClick={handleFormSubmit}>submit</button>
            </form>
        </div>
    )
}

export default Login;