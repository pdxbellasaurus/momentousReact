import React, { useState, useContext } from 'react'
import API from '../utils/API';
import GlobalContext from '../utils/GlobalState';
import DateTimePicker from 'react-datetime-picker'
import GeoapifySearch from '../components/GeoapifySearch';

function CreateEvent() {
    const [formObject, setFormObject] = useState({})
    const [startDate, setStartDate] = useState(new Date())
    const [endDate, setEndDate] = useState(new Date())
    const [venue, setVenue] = useState({})
    const { id } = useContext(GlobalContext);
    console.log(id)

    

    function handleInputChange(event) {
        const { name, value } = event.target;
        setFormObject({...formObject, [name]: value})
      };

    function handleFormSubmit(event) {
        event.preventDefault();
        if (formObject.title && formObject.description) {
          console.log(venue)
          API.saveEvent({
            title: formObject.title,
            description: formObject.description,
            start_date: startDate.toLocaleDateString(),
            end_date: endDate.toLocaleDateString(),
            owner: id,
            venue: venue
          })
            .catch(err => console.log(err));
        }
      };

    return(
        <div>
            <form>
                <input onChange={handleInputChange} type="text" placeholder="event title" name="title" />
                <textarea onChange={handleInputChange} placeholder="event description" name="description" />
                <DateTimePicker value={startDate} onChange={setStartDate} name="start_date" />
                <DateTimePicker value={endDate} onChange={setEndDate} name="end_date" />
                <GeoapifySearch type="text" onChange={setVenue}/>
                <button type="submit" onClick={handleFormSubmit}>submit event</button>
            </form>
        </div>
    )
}

export default CreateEvent;