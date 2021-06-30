import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import API from '../utils/API'

function SingleEvent() {
    const [event, setEvent] = useState({})
    let { id } = useParams();

    const [owner, setOwner] = useState("")

    useEffect(() => {
        API.getEvent(id)
          .then(res => {
            setOwner(res.data.owner[0].firstName)
            setEvent(res.data)})
          .catch(err => console.log(err));
      }, [])

    
    return(
        <div>
            <div className="card">
            <div className="card-header">
                <div className="card-header-title">
                  {event.title} by {owner}
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