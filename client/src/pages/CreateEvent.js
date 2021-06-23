import React, { useState } from 'react'
import API from '../utils/API';

function CreateEvent() {
    const [formObject, setFormObject] = useState({})

    function handleInputChange(event) {
        const { name, value } = event.target;
        setFormObject({...formObject, [name]: value})
      };

    function handleFormSubmit(event) {
        event.preventDefault();
        if (formObject.title && formObject.author) {
          API.saveEvent({
            title: formObject.title,
            description: formObject.description,
            start_date: formObject.start_date
          })
            .catch(err => console.log(err));
        }
      };

    return(
        <div>
            <form>
                <input onChange={handleInputChange} type="text" placeholder="event title" name="title" />
                <textarea onChange={handleInputChange} placeholder="event description" name="description" />
                <input label="start date" name="start_date" onChange={handleInputChange} />
                <button type="submit" onClick={handleFormSubmit}>submit event</button>
            </form>
        </div>
    )
}

export default CreateEvent;