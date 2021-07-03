import React, { useContext } from 'react'
import GlobalContext from '../utils/GlobalState';

function Profile() {
    const {username} = useContext(GlobalContext)
    return(
        <div>
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
    )
}

export default Profile;