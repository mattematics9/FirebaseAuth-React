import React, { useContext } from 'react'
import { UserContext } from '../providers/UserProvider'
import LoggedInLinks from './LoggedInLinks'
import SignedOutLinks from './SignedOutLinks'

const Navbar = () => {

    const {currentUser} = useContext(UserContext);
    const links = currentUser? <LoggedInLinks/>: <SignedOutLinks/>;

    return (
        <nav>
            {links}
        </nav>
    )
}

export default Navbar
