import React, { useEffect, useState } from "react";
import kids from "./minaBarn.jpeg";
import "./style/App.scss";

const Me = () => {
    const [message, setMessage] = useState('');

    useEffect(() => {
        console.log('fetch')
        fetch('http://localhost:1337/')
            .then(res => res.json())
            .then(res => {
                console.log(res.data[0])
                setMessage(res.data[0])
            });
    },[]);

    return (
        <main>
            <article className= 'main'>
                <h1>{message.title}</h1>
                <img src={kids} alt="Bild på mina barn" />
                <div className='textarea'>
            <p>{message.longtext}</p>
                </div>
            </article>
        </main>
    );
};

export default Me;
