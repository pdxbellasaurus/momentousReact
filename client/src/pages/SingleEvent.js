import React, {useState, useEffect, useContext} from 'react'
import { useParams } from 'react-router-dom'
import API from '../utils/API'
import GlobalContext from '../utils/GlobalState'

function SingleEvent() {
    const [event, setEvent] = useState({});
    let { id } = useParams();
    console.log(id);
    const userData = useContext(GlobalContext);
    console.log(userData.id);
    const [owner, setOwner] = useState("");
    const [formObject, setFormObject] = useState({});
    const [guests, setGuests] = useState([]);

    function handleInputChange(event) {
      const { name, value } = event.target;
      setFormObject({...formObject, [name]: value})
    };

    useEffect(() => {
        API.getEvent(id)
          .then(res => {
            setOwner(res.data.owner[0])
            setEvent(res.data)})
          .catch(err => console.log(err));
      }, [])

      const handleRSVP = (event) => {
        event.preventDefault();
        API.getEvent(id)
          .then(res => {
            setGuests(res.data.guests);
            console.log(guests);
            API.updateEvent(id, {
               guests: [
                  ...guests,
           {
              user: userData.id,
              comment: formObject.comment
            }
          ]
          })
        })
      }
    let newStartDate = new Date(event.start_date).toLocaleString()
    let newEndDate = new Date(event.end_date).toLocaleString()
      console.log(event.venue)
    return(
        <div>
            <div className="card">
            <div className="card-header">
                <div className="card-header-title">
                  {event.title} by {owner.firstName} {owner.lastName}
                  <p>from {newStartDate} to {newEndDate}</p>
                  <p>at {event.venue}</p>
                </div>
            </div>
            <div className="card-content">
          
                {event.description}
            </div>
        </div>
        <form onSubmit={handleRSVP}>
          <textarea label="comment" name="comment" onChange={handleInputChange}></textarea>
          <button type="submit">RSVP</button>
        </form>
        {event.guests ? <ol>
        {event.guests.map((guest, index) => {
          return (
            <li key={index}>
              {guest.user.firstName} {guest.user.lastName}: {guest.comment}
            </li>
          )
        })}
        </ol> : <p>No guests yet!</p>}
        </div>
    )
}

export default SingleEvent;