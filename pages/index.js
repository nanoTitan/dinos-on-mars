// pages/index.js

import { useState, useEffect } from 'react';
import Head from 'next/head';
import fire from '../config/fire-config';
import CreatePost from '../components/CreatePost';
import Card from '../components/card';
import Hero from '../components/hero';
import Link from 'next/link';
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
    
    console.log(blogs);

    const scrollTop = () =>{
        window.scrollTo({top: 0, behavior: 'smooth'});
    };
    
    return (
        <div>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Blog App</title>
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
                <Hero image="dino-rider.jpg" />
                <div className={styles["text-section"]}>
                    <h2 className={styles["section-subtitle"]}>What is Dinos on Mars?</h2>
                    <p className={styles["section-text"]}>Dinos on Mars is an interactive application for VR and websites that allows anyone to access the best of museums, aquariums and science exhibits.</p>
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
                        title="Lorem Ipsum"
                        body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis pulvinar ante nunc, in dictum sapien hendrerit nec. Etiam id scelerisque lectus, et faucibus purus."
                        image="blue-fur-raptor.jpg" />
                    <Card 
                        title="Lorem Ipsum"
                        body="Duis venenatis mollis vehicula. Sed bibendum magna id neque molestie, sit amet pretium nisl sollicitudin. Sed laoreet tincidunt sem non pellentesque. Etiam sed interdum sem. "
                        image="blue-fur-raptor.jpg" />
                    <Card 
                        title="Lorem Ipsum"
                        body="Nullam accumsan condimentum venenatis. Morbi non nisi ut purus volutpat suscipit. Mauris pulvinar nisi dui, lacinia fringilla velit gravida at."
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