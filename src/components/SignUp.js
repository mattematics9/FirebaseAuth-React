import React, { useContext, useState } from 'react'
import { UserContext } from '../providers/UserProvider'
import { auth, firestore } from '../firebase/config'

const SignUp = () => {

    const { setCurrentUser } = useContext(UserContext);

    let [name, setName] = useState('');
    let [email, setEmail] = useState('');
    let [password, setPassword] = useState('');


    const handleSubmit = (e, name, email, password) => {
        e.preventDefault();
        auth.createUserWithEmailAndPassword(email, password).then(userAuth => {
            firestore.collection('users').doc(userAuth.user.uid).set({name})
                .then(() => {
                    setCurrentUser({name, email})
                })
        })
    }

    const handleChange = (e) => {
        if(e.target.id === 'name-sign-up'){
            name = e.target.value;
        } else if (e.target.id === 'email-sign-up'){
            email = e.target.value;
        } else {
            password = e.target.value
        }
    }

    return (
        <div className="component">
            <h1>Sign Up</h1>
            <form onSubmit={(e) => handleSubmit(e, name, email, password)}>
                <label htmlFor="name-sign-up">Name</label>
                <input onChange={handleChange} type="text" id="name-sign-up" name="name-sign-up" placeholder="Enter Your Name"/>
                <label htmlFor="email-sign-up">Email</label>
                <input onChange={handleChange} type="email" id="email-sign-up" name="email-sign-up" placeholder="Enter Your Email"/>
                <label htmlFor="password-sign-up">Password</label>
                <input onChange={handleChange} type="text" id="password-sign-up" name="password-sign-up" placeholder="Enter Your Password"/>
                <button>Login</button>
            </form>
        </div>
    )
}

export default SignUp
