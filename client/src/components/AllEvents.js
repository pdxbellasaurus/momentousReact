import React from 'react'

function AllEvents() {
    return(
    <div className="allEvents container columns">
        <div className="card column">
            <div className="card-header">
                <div className="card-header-title">
                    Fake Event #1
                </div>
            </div>
            <div className="card-content">
                This is a fake event to test the layout for this page.
            </div>
            <div className="card-footer">
                <a href="/">RSVP</a>
            </div>
        </div>
        <div className="card column">
            <div className="card-header">
                <div className="card-header-title">
                    Fake Event #2
                </div>
            </div>
            <div className="card-content">
                This is a fake event to test the layout for this page.
            </div>
            <div className="card-footer">
                <a href="/">RSVP</a>
            </div>
        </div>
        <div className="card column">
            <div className="card-header">
                <div className="card-header-title">
                    Fake Event #3
                </div>
            </div>
            <div className="card-content">
                This is a fake event to test the layout for this page.
            </div>
            <div className="card-footer">
                <a href="/">RSVP</a>
            </div>
        </div>
    </div>
    )
}

export default AllEvents;