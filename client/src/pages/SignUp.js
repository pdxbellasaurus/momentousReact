import React, { useContext, useState } from 'react'
import { useHistory } from 'react-router-dom';
import API from '../utils/API';
import GlobalContext from '../utils/GlobalState';

function SignUp() {
    const [formObject, setFormObject] = useState({})
    const userData = useContext(GlobalContext)
    let history = useHistory()

    function handleInputChange(event) {
        const { name, value } = event.target;
        setFormObject({...formObject, [name]: value})
      };

    function handleFormSubmit(event) {
        event.preventDefault();
        API.saveUser({
            username: formObject.username,
            firstName: formObject.firstName,
            lastName: formObject.lastName,
            password: formObject.password,
            email: formObject.email
        })
        .then(res => {
            if (res.data.loggedIn) {
            userData.onUpdate(res.data)
            console.log("saving the user")
            history.push("/profile")
            }
        })
        .catch(err => {
            console.log(err)
        })
    };

    return(
        <div>
            <form>
                <input onChange={handleInputChange} type="text" placeholder="username" name="username" />
                <input onChange={handleInputChange} type="text" placeholder="first name" name="firstName" />
                <input onChange={handleInputChange} type="text" placeholder="last name" name="lastName" />
                <input onChange={handleInputChange} placeholder="password" type="password" name="password" />
                <input onChange={handleInputChange} placeholder="email" type="email" name="email" />
                <button type="submit" onClick={handleFormSubmit}>submit</button>
            </form>
        </div>
    )
}

export default SignUp;