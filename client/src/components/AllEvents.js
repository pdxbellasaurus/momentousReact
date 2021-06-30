import React, { useEffect, useState } from 'react'
import API from '../utils/API'

function AllEvents() {
    const [events, setEvents] = useState([])

    useEffect(() => {
        loadEvents()
    }, [])

    function loadEvents() {
        API.getEvents()
            .then(res => {
                setEvents(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }

    return(
    <div className="allEvents container columns">
        {events.length ? (
            events.map(event => {
               return( <div className="card column" key={event._id}>
            <div className="card-header">
                <div className="card-header-title">
                    <a href={"/events/" + event._id}>{event.title}</a>
                </div>
            </div>
            <div className="card-content">
                {event.description}
            </div>
            <div className="card-footer">
                <a href="/">RSVP</a>
            </div>
        </div> )
            })
        ) : (
            <h3>No events yet!</h3>
        )}
    </div>
    )
}

export default AllEvents;