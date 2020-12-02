// pages/index.js

import { useState, useEffect } from 'react';
import Head from 'next/head';
import fire from '../config/fire-config';
import Card from '../components/card';
import Hero from '../components/hero';
import Header from '../components/header';
import styles from '../styles/Home.module.scss';


const Home = (props) => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fire.firestore()
            .collection('blogs')
            .onSnapshot(snap => {
                const blogs = snap.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                }));
                setBlogs(blogs);
            });
    }, []);
    
    //console.log(blogs);

    const scrollTop = () =>{
        window.scrollTo({top: 0, behavior: 'smooth'});
    };
    
    return (
        <div>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Explorers Wanted - Dinos on Mars</title>
            </Head>
            {/* <h1>Blog</h1>
            <CreatePost />
            <ul>
                {blogs.map(blog =>
                    <li key={blog.id}>
                        <Link href="/blog/[id]" as={'/blog/' + blog.id}>
                            <a>{blog.title}</a>
                        </Link>
                    </li>
                )}
            </ul> */}
            {/* Insert these scripts at the bottom of the HTML, but before you use any Firebase services */}

            {/* Firebase App (the core Firebase SDK) is always required and must be listed first */}
            <script src="/__/firebase/8.1.1/firebase-app.js"></script>

            {/* If you enabled Analytics in your project, add the Firebase SDK for Analytics */}
            <script src="/__/firebase/8.1.1/firebase-analytics.js"></script>

            {/* Add Firebase products that you want to use */}
            <script src="/__/firebase/8.1.1/firebase-auth.js"></script>
            <script src="/__/firebase/8.1.1/firebase-firestore.js"></script>
            
            <div className="page-container">
                <Header />
                <Hero image="dino-rider.jpg" />
                <div className={[styles["text-section"], styles["text-section--whatis"]].join(' ')}>
                    <h2 className={styles["section-subtitle"]}>Dinos on What?</h2>
                    <p className={styles["section-text"]}>Dinos on Mars is a wonderful interactive application for VR and websites that allows anyone access to the best of museums, aquariums and science exhibits. Ride with us on a jaw-dropping experience that makes education feel magical through exploration and adventure.</p>
                </div>
                <div className={styles["image-section"]}>
                    <img src="blue-fur-raptor.jpg" />
                    <div>
                        <h2 className={styles["section-subtitle"]}>Give your kids the best</h2>
                        <p className={styles["section-text"]}>Provide them with access to interactive experiences that make learning engaging.</p>
                    </div>
                </div>
                <div className={styles['card-group']}>
                    <Card
                        title="Life-like experiences"
                        body="Experience exhibits up close and personal. See triceratops grazing or hear the roar from a T-Rex. To get a more realistic experience, you'd need a time machine."
                        image="blue-fur-raptor.jpg" />
                    <Card 
                        title="Interactive biology"
                        body="Skeletons are just a piece of the puzzle. Now you can see muscles, skin and historical holograms all in one place."
                        image="blue-fur-raptor.jpg" />
                    <Card 
                        title="Avoid the hassle"
                        body="Planning trips is expensive and time consuming. In addition, recent events of COVID-19 make being in crowds uncomfortable. Now you can take the worry and cost out of learning."
                        image="blue-fur-raptor.jpg" />
                </div>
                <div className={styles["text-section"]}>
                    <h2 className={styles["section-subtitle"]}>Want to try it out?</h2>
                    <p className={styles["section-text"]}>Signup to our email list to know when we launch.</p>
                    <button type="button" className={styles["section-button"]} onClick={scrollTop}>Connect to Mars</button>
                </div>
            </div>
        </div>
    )
}

export default Home;