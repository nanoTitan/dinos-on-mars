// signup.js

import React, {useState, useRef} from 'react';
import styles from '../styles/Signup.module.scss';


const Signup = (props) => {
    const [message, setMessage] = useState('');
    const [showInput, setShowInput] = useState(true);
    const emailInputEl = useRef(null);

    const subscribe = async(event) => {
        event.preventDefault();
        setMessage("");
        
        // Send a subscribe request
        const res = await fetch('/api/subscribe', {
            body: JSON.stringify({
                email: emailInputEl.current.value
            }),
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST'
        });
    
        const { error } = await res.json();
    
        if (error) {
            // If there was an error, update the message in state.
            setMessage(error);
            return;
        }
    
        // Clear the input value and show a success message.
        let email = emailInputEl.current.value;
        emailInputEl.current.value = '';
        setShowInput(false);
        setMessage(`A confirmation email has been sent to ${email}. If you don't see it, please check your spam folder.`);
    }
    
    return (
        <div>
            <div className={styles.signup}>
                <form onSubmit={subscribe}>
                    {showInput? 
                        <React.Fragment>
                            <label htmlFor="email">{'Email'}</label>
                            <input type="email" id="email" placeholder="Enter your email address" ref={emailInputEl}></input>
                            <button type="submit">Join the Launch</button>
                        </React.Fragment> : null
                    }
                    <div>
                        {message? message : null}
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Signup;