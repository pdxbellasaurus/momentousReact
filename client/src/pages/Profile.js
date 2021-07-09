import React, { useContext, useEffect, useState } from 'react'
import GlobalContext from '../utils/GlobalState';
import API from '../utils/API';
import { Link } from 'react-router-dom'

function Profile() {
    const {username, id} = useContext(GlobalContext)
    const [events, setEvents] = useState([])

    function loadEvents()  {
        API.getEvents()
        .then(res => {
            const filteredEvents = res.data.filter(event => event.owner[0]._id === id);

            setEvents(filteredEvents);
        })
        .catch(err => {
            console.log(err)
        })
    }

    useEffect(() => {
        loadEvents()
    }, [])

    return(
        <div className="container is-fluid">
            <div class="section">
            <div className="card column">
            <div className="card-header">
                <div className="card-header-title">
                    {username}
                </div>
            </div>
            <div className="card-content">
                This is a fake user card to test the layout for this page.
            </div>
            </div>
        </div>
        {events.length ? events.map(event => {
            return (<div>
            <div className="card column">
            <div className="card-header">
                <div className="card-header-title">
                    <Link to={"/events/" + event._id}>{event.title}</Link>
                </div>
            </div>
            <div className="card-content">
                {event.description}
            </div>
            </div>
            </div>
        )}) : <p>No events yet!</p>}
        </div>
        
    )
}

export default Profile;