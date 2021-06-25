import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import API from '../utils/API'

function SingleEvent() {
    const [event, setEvent] = useState({})

    let { id } = useParams();

    useEffect(() => {
        API.getEvent(id)
          .then(res => setEvent(res.data))
          .catch(err => console.log(err));
      })

    return(
        <div>
            <div className="card">
            <div className="card-header">
                <div className="card-header-title">
                    {event.title}
                </div>
            </div>
            <div className="card-content">
                {event.description}
            </div>
        </div>
        </div>
    )
}

export default SingleEvent;