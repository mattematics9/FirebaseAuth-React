import React, { useContext, useState } from 'react'
import { UserContext } from '../providers/UserProvider'
import { auth, firestore } from '../firebase/config'


const Login = () => {

    const { setCurrentUser } = useContext(UserContext);

    let [email, setEmail] = useState('');
    let [password, setPassword] = useState('');

    const handleSubmit = (e, email, password) => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(email, password).then(userAuth => {
            firestore.collection('users').doc(userAuth.user.uid).get().then(user => {
                setCurrentUser({
                    name: user.data().name,
                    email: userAuth.user.email
                })
            })
        })
    }

    const handleChange = (e) => {
        if (e.target.id === 'email-login'){
            email = e.target.value;
        } else {
            password = e.target.value
        }
    }


    return (
        <div>
            <form onSubmit={(e) => handleSubmit(e, email, password)}>
                <label htmlFor="email-login">Email:</label>
                <input onChange={handleChange} type="email" name="email-login" id="email-login" placeholder="Enter Your Email"/>
                <label htmlFor="password-login">Password:</label>
                <input onChange={handleChange} type="password" name="password-login" id="password-login" placeholder="Enter Your Password"/>
                <button>Login</button>
            </form>
        </div>
    )
}

export default Login
