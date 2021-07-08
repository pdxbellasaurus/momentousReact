import React from 'react'
import AllEvents from '../components/AllEvents';

function Home() {
    return(
        <div>
            <div className="section title-class">
                Momentous Events
            </div>
            <div className="section">
            <AllEvents />
            </div>
            <div className="section">

            </div>
        </div>
    )
}

export default Home;