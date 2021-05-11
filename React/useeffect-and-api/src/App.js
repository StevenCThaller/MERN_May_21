import { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [heroes, setHeroes] = useState([]);
  const [refresh, setRefresh] = useState(0);

  useEffect(() => {
    axiosHeroes();
  }, [refresh])

  const fetchHeroes = () => {
    fetch('https://akabab.github.io/superhero-api/api/all.json')
      .then(response => response.json())
      .then(jsonResponse => setHeroes(jsonResponse))
      .catch(err => console.log(err));
  }

  const axiosHeroes = () => {
    console.log("Hi there");
    axios.get('https://akabab.github.io/superhero-api/api/all.json')
      .then(response => setHeroes(response.data))
      .catch(err => console.log(err));
  }

  const refreshData = () => {
    setHeroes([]);
    setRefresh(refresh+1);
  }

  let content = (
    heroes.length === 0 ?
      <p>Please wait, fetching data...</p>
      :
      <table>
        <thead>
          <tr>
            <th>Hero Name</th>
            <th>Full Name</th>
            <th>Publisher</th>
            <th>Gender</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
          {
            heroes.map( (hero, i) => (
              <tr key={i}>
                <td>{ hero.name }</td>
                <td>{ hero.biography.fullName === "" ? "Unknown" : hero.biography.fullName }</td>
                <td>{ hero.biography.publisher === "" ? "Unknown" : hero.biography.publisher }</td>
                <td>{ hero.appearance.gender }</td>
                <td> 
                  <img src={ hero.images.xs } alt={ `Extra small image of ${hero.name}` } />
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
  )

  return (
    <div className="App">
      {/* <button onClick={axiosHeroes}>Get Heroes</button> */}
      <button onClick={ refreshData }>Refresh Data</button>
      { content }
    </div>
  );
}

export default App;
