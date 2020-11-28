// hero.js

import React, { useState } from 'react';
import styles from "../styles/Hero.module.scss";
import Signup from '../components/signup';
import formatStyles from '../styles/Format.module.scss';


const Hero = (props) => {
    const [image, setImage] = useState(props.image);

    return (
        <div className={styles.hero} style={{ backgroundImage: `url('${props.image}')` }}>
            <h1 className={styles.title}>Dinos on Mars</h1>
            <div className={`${styles['hero-signup']} ${formatStyles["col-9"]} ${formatStyles["col-s-9"]}}`}>
                <Signup />
            </div>
        </div>
    )
}

export default Hero;