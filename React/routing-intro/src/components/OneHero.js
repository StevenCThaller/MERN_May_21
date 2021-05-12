import { useState, useEffect, useRef } from 'react'
import axios from 'axios';
import { navigate } from '@reach/router';

const OneHero = props => {
    const { id } = props;
    const [hero, setHero] = useState({
        name: "",
        images: {
            md: ""
        },
        appearance: {
            height: [],
            weight: []
        },
        work: {
            base: "",
            occupation: ""
        }
    });
    const [error, setError] = useState(false);
    const [time, setTime] = useState(5);

    useEffect(() => {
        getOneHero();
    }, [id])

    useEffect(() => {
        let interv = setInterval(() => {
            setTime(time => time - 1)
        }, 1000)
        
        return () => clearInterval(interv);
    }, [error])

    const getOneHero = () => {
        // axios.get("https://akabab.github.io/superhero-api/api/id/"+ 25 + ".json")
        axios.get(`https://akabab.github.io/superhero-api/api/id/${id}.json`)
            .then(response => {
                setHero(response.data);
            })
            .catch(err => {
                setError(true);
                setTimeout(() => navigate("/heroes"), 5000)
            });
    }

    
    let content = (
        error ?
        <p>An error occurred. Redirecting you in { time === isNaN ? '' : time } seconds.</p>
        :
        <div className="flex">
            <img src={ hero.images.md } alt="" />
            <div>
                <h2>{ hero.name }</h2>
                <ul>
                    <li>Height: { hero.appearance.height[0] }</li>
                    <li>Weight: { hero.appearance.weight[0] }</li>
                    <li>Base: { hero.work.base }</li>
                    <li>Occupation: { hero.work.occupation }</li>
                </ul>
            </div>
        </div>
    )

    return (
        <>
            {content}
        </>
    )
}

export default OneHero
