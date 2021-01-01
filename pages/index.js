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
                {/* <Header /> */}
                <Hero image="" />
                <img src="logo_white_200x200.png" className={styles["logo"]}/>
                <div className={[styles["text-section"], styles["text-section--whatis"]].join(' ')}>
                    <h2 className={styles["section-title"]}>Dinos on What?</h2>
                    <p className={styles["section-text"]}>Dinos on Mars is a wonderful interactive application for VR and websites that allows anyone access to the best of museums, aquariums and science exhibits. Ride with us on a jaw-dropping experience that makes education feel magical through exploration and adventure.</p>
                </div>
                <div className={styles["image-section"]}>
                    <div>
                        <h2 className={styles["section-title"]}>See the world as it existed millions of years ago</h2>
                        <p className={styles["section-text"]}>Sneak along with velociraptors in the jungle or witness giant sequoia tress 250 feet tall. To get a more realistic experience, you'd need a time machine.</p>
                    </div>
                    <img src="class_vr_dino.jpg" />
                </div>
                <div className={[styles["image-section"], styles["desktop-reverse-direction"]].join(" ")}>
                    <div>
                        <h2 className={styles["section-title"]}>Enjoy whenever and from wherever</h2>
                        <p className={styles["section-text"]}>Trips can be a hassle, expensive, and time consuming. Want to play fetch with a T-Rex in your PJs before bedtime? We got you covered</p>
                    </div>
                    <img src="feed_vr_dino.jpg" />
                </div>
                <div className={styles["image-section"]}>
                    <div>
                        <h2 className={styles["section-title"]}>Interactive exhibits that are truly interactive</h2>
                        <p className={styles["section-text"]}><i>Don't touch that, behave, and be quiet!</i><br/><br/>With rules like that, no wonder museums are boring. Now you can assemble skeletons, create dinosaurs, and get up close and personal. We make learning engaging.</p>
                    </div>
                    <img src="ar-exhibit-dino.jpg" />
                </div>
                <div className={styles['card-group']}>
                    <Card
                        title="Life-like experiences"
                        body="Our exhibits are true to size and shown with the latest known data to give the most accurate representations."
                        image="triceratops_right_16_9.png" />
                    <Card
                        title="Become a scientist"
                        body="Trace the evolution of animals and identify long lost species. You'll learn skills used in paleontology, anthropolgy, and biology along the way."
                        image="dna_editing.jpg" />
                    <Card 
                        title="Learning through games"
                        body="Dig for fossils, and design your own custom exhibits. When you are the curator, you are in charge!"
                        image="dino-fossil.jpg" />
                </div>
                <div className={styles["text-section"]}>
                    {/* <img src="class_vr_dino.jpg" /> */}
                    <h2 className={styles["section-subtitle"]}>Want to try it out?</h2>
                    <p className={styles["section-text"]}>Signup to our email list to know when we launch.</p>
                    <button type="button" className={styles["section-button"]} onClick={scrollTop}>Connect to Mars</button>
                </div>
            </div>
        </div>
    )
}

export default Home;