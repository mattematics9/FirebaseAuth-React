import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../providers/UserProvider'

const LoggedInLinks = () => {
    const { setCurrentUser } = useContext(UserContext);
    const handleClick = () => {
        setCurrentUser(null);
    }

    return (
        <div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/" onClick={handleClick}>Logout</Link></li>
            </ul>
        </div>
    )
}

export default LoggedInLinks
