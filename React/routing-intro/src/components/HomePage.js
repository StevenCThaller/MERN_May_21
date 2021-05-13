import axios from 'axios';
import { useState, useEffect } from 'react';

const HomePage = () => {
    const [message, setMessage] = useState("");

    useEffect(() => {
        axios.get("http://localhost:8000/hello")
            .then(response => setMessage(response.data.zebra))
            .catch(err => console.log(err))
    }, [])

    return (
        <main>
            <h2>Welcome to the website</h2>
            <p>A message to you from our mighty server: { message }</p>
            <p>Super Hero Central is your go-to home for all things superhero.</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt aperiam quo illum repudiandae iure molestiae autem nihil, nobis quae sit quam quisquam?</p>
            <h3>Something else</h3>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo molestias facilis atque quaerat nisi temporibus saepe optio deserunt?</p>
        </main>
    )
}

export default HomePage
