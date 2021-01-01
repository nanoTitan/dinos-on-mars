
import React, {usestate} from 'react';
import styles from '../styles/Header.module.scss';


const Header = () => {


    return (
        <div className={styles.header}>
            <div className={styles['desktop-header']}>
                <img src="logo_white_200x200.png" />
                <a href="http://dinosonmars.com" className={styles['header-logo']}>
                    <h1 className={styles.title}>Dinos on Mars</h1>
                </a>
            </div>
            <div className={styles['mobile-header']}>
                <a href="http://dinosonmars.com">
                    <h1 className={styles.title}>Dinos on Mars</h1>
                </a>
            </div>
        </div>
    )
}

export default Header;