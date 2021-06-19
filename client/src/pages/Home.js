import React from 'react'
import AllEvents from '../components/AllEvents';

function Home() {
    return(
        <div>
            <div className="section">
                Momentous Events is an event planning site.
            </div>
            <div className="section">
            <AllEvents />
            </div>
        </div>
    )
}

export default Home;