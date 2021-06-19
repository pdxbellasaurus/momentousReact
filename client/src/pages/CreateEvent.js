import React from 'react'

function CreateEvent() {
    return(
        <div>
            <form>
                <input type="text" placeholder="event title" />
                <textarea placeholder="event description" />
                <button type="submit">submit event</button>
            </form>
        </div>
    )
}

export default CreateEvent;