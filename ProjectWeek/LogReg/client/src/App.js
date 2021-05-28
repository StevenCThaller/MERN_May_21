import { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

const initialRegister = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  confirmPassword: ''
};

const initialLogin = {
  email: '',
  password: ''
}

function App() {
  const [register, setRegister] = useState(initialRegister)
  const [login, setLogin] = useState(initialLogin);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers();
  }, [])

  const getUsers = () => {
    axios.get('http://localhost:8000/api/users/all', { withCredentials: true })
      .then(response => setUsers(response.data.results))
      .catch(err => setUsers([]))
  }

  const registerChangeHandler = e => {
    setRegister({
      ...register,
      [e.target.name]: e.target.value
    })
  }
  const loginChangeHandler = e => {
    setLogin({
      ...login,
      [e.target.name]: e.target.value
    })
  }

  const registerSubmitHandler = e => {
    e.preventDefault();
    axios.post('http://localhost:8000/api/users/register', register, { withCredentials: true })
      .then(response => {
        setIsAuthenticated(true)
        getUsers();
      })
      .catch(err => console.log(err));
  }
  const loginSubmitHandler = e => {
    e.preventDefault();
    axios.post('http://localhost:8000/api/users/login', login, { withCredentials: true })
      .then(response => {
        if(response.data.message === "error") {
          alert("no no no");
        } else {
          alert("yes yes yes");
          setIsAuthenticated(true)
          getUsers();
        }
      })
      .catch(err => console.log(err));
  }

  const logoutHandler = () => {
    axios.get('http://localhost:8000/api/users/logout', { withCredentials: true })
      .then(response => {
        setIsAuthenticated(false)
        getUsers();
      })
      .catch(err => console.log(err));
  }

  return (
    <div className="App">
      <button onClick={logoutHandler}>Log Out</button>
      <form onSubmit={registerSubmitHandler}>
        <div>
          <label htmlFor="firstName">First Name: </label>
          <input type="text" name="firstName" onChange={ registerChangeHandler } value={register.firstName}/>
        </div>
        <div>
          <label htmlFor="lastName">Last Name: </label>
          <input type="text" name="lastName" onChange={ registerChangeHandler } value={register.lastName}/>
        </div>
        <div>
          <label htmlFor="email">Email: </label>
          <input type="text" name="email" onChange={ registerChangeHandler } value={register.email}/>
        </div>
        <div>
          <label htmlFor="password">Password: </label>
          <input type="text" name="password" onChange={ registerChangeHandler } value={register.password}/>
        </div>
        <div>
          <label htmlFor="confirmPassword">Confirm PW: </label>
          <input type="text" name="confirmPassword" onChange={ registerChangeHandler } value={register.confirmPassword}/>
        </div>
        <div>
          <input type="submit" value="Register"/>
        </div>
      </form>
      <form onSubmit={loginSubmitHandler}>
        <div>
          <label htmlFor="email">Email: </label>
          <input type="text" name="email" onChange={ loginChangeHandler } value={login.email}/>
        </div>
        <div>
          <label htmlFor="password">Password: </label>
          <input type="text" name="password" onChange={ loginChangeHandler } value={login.password}/>
        </div>
        <div>
          <input type="submit" value="Register"/>
        </div>
      </form>

      {
        users.map((user, i) => 
          <p key={i}>{user.email}</p>
        )
      }
    </div>
  );
}

export default App;
