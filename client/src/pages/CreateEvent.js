import React, { useState, useContext } from 'react'
import API from '../utils/API';
import GlobalContext from '../utils/GlobalState';

function CreateEvent() {
    const [formObject, setFormObject] = useState({})
    const { id } = useContext(GlobalContext);
    console.log(id)

    function handleInputChange(event) {
        const { name, value } = event.target;
        setFormObject({...formObject, [name]: value})
      };

    function handleFormSubmit(event) {
        event.preventDefault();
        if (formObject.title && formObject.description) {
          API.saveEvent({
            title: formObject.title,
            description: formObject.description,
            start_date: formObject.start_date,
            owner: id
          })
            .catch(err => console.log(err));
        }
      };

    return(
        <div>
            <form>
                <input onChange={handleInputChange} type="text" placeholder="event title" name="title" />
                <textarea onChange={handleInputChange} placeholder="event description" name="description" />
                <input label="start date" type="datetime-local" name="start_date" onChange={handleInputChange} />
                <button type="submit" onClick={handleFormSubmit}>submit event</button>
            </form>
        </div>
    )
}

export default CreateEvent;