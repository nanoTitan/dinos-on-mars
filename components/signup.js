// signup.js

import React, {useState} from 'react';
import styles from '../styles/Signup.module.scss';



const Signup = (props) => {
    const handleSubmit = (event) => {
        event.preventDefault();

    }
    
    return (
        <div className={styles.signup}>
            <form onSubmit={handleSubmit}>
                <input type="email" id="email" placeholder="Enter your email address"></input>
                <button type="submit">Join Email List</button>
            </form>
        </div>
    )
}

export default Signup;