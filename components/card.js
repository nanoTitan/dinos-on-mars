// card.js


import React, { useState } from 'react';
import styles from '../styles/Card.module.scss';

const Card = (props) => {
    const [image, setImage] = useState(props.image);
    const [title, setTitle] = useState(props.title);
    const [body, setBody] = useState(props.body);

    return (
        <div className={styles.card}>
            <img src={image} />
            <h3>{title}</h3>
            <p>{body}</p>
        </div>
    )
}

export default Card;