// hero.js

import React, { useState } from 'react';
import styles from "../styles/Hero.module.scss";
import Signup from '../components/signup';
import formatStyles from '../styles/Format.module.scss';


const Hero = (props) => {
    const [image, setImage] = useState(props.image);

    return (
        <div className={styles.hero}>
            <h2 className={styles.subtitle}><div>Sensational science</div>Breathtaking virtual reality</h2>
            <div className={`${styles['hero-signup']} ${formatStyles["col-6"]} ${formatStyles["col-s-6"]}}`}>
                <Signup />
            </div>
        </div>
    )
}

export default Hero;