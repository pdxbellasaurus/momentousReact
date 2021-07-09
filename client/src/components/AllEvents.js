import React, { useEffect, useState } from 'react'
import API from '../utils/API'
import { Link } from 'react-router-dom'

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
    <div className="section is-centered-mobile-tablet columns is-3 is-multiline">
        {events.length ? (
            events.map(event => {
               return( 
                <div className="card column is-12-mobile is-8-tablet is-6-desktop is-4-widescreen is-3-fullhd" id="card-style" key={event._id}>
                    <div className="card-header">
                        <div className="card-header-title card-color-black">
                            <Link to={"/events/" + event._id}>{event.title}</Link>
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