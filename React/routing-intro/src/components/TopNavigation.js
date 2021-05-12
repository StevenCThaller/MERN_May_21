import { useState } from 'react'
import { Link, navigate } from '@reach/router';

const TopNavigation = () => {
    const [heroId, setHeroId] = useState(null)

    const searchHandler = e => {
        e.preventDefault();
        if(isNaN(heroId) || heroId === null){
            alert("Invalid entry. Please enter a number.");
        } else {
            navigate(`/heroes/${heroId}`)
        }
        setHeroId('');
    }

    return (
        <header className="flex">
            <h1>Super Hero Central</h1>
            <nav>
                <Link to="/">Home</Link> |
                &nbsp;<Link to="/heroes">Heroes</Link>
                &nbsp;
                <form onSubmit={searchHandler}>
                    <input type="number" name="heroId" onChange={ e => setHeroId(e.target.value) } value={heroId}/>
                    <input type="submit" value="GO" />
                </form>
            </nav>
        </header>
    )
}

export default TopNavigation
