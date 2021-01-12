import React, { useContext } from 'react'
import { UserContext } from '../providers/UserProvider'


const Profile = () => {

    const { currentUser } = useContext(UserContext);
    const userMsg = currentUser? `${currentUser.name} is logged in with email ${currentUser.email}`: `No user is logged in`;

    return (
        <div>
            <h2>This is the Profile Page</h2>
            {userMsg}
        </div>
    )
}

export default Profile;