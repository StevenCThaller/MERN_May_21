import './App.css';
import AllCarData from './components/AllCarData';
import CarForm from './components/CarForm';
import { useState } from 'react';

const initialCar = {
  year: '',
  make: '',
  model: '',
  doors: '',
  convertible: false
}

function App() {
  const [car, setCar] = useState(initialCar);
  const [cars, setCars] = useState([]);

  const addCarToCars = dbCar => {
    setCars([...cars, dbCar]);
    setCar(initialCar);
  }

  return (
    <div className="App">
      <h1>Welcome to CarBase</h1>
      <CarForm addCarToCars={addCarToCars} car={car} setCar={setCar} />
      <AllCarData cars={cars} setCars={setCars} />
    </div>
  );
}

export default App;
