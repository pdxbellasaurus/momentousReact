import React, { useState, useContext } from 'react';
import API from '../utils/API';
import GlobalContext from '../utils/GlobalState';

function Login() {
    const [formObject, setFormObject] = useState({})
const userData = useContext(GlobalContext)
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
        .then(res => {
            if (res.data.loggedIn ){
                //can use context now
                userData.onUpdate(res.data)
                // window.location.replace(`http://localhost3000/users/${res.data.id}`)
            }
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