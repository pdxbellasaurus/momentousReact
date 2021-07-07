import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import API from '../utils/API';
import GlobalContext from '../utils/GlobalState';

function Login() {
    const [formObject, setFormObject] = useState({})
    const userData = useContext(GlobalContext)
    const history = useHistory()
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
                history.push("/profile")
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