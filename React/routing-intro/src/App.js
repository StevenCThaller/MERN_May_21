import './App.css';
import HomePage from './components/HomePage';
import AllHeroes from './components/AllHeroes';
import { Router, Link } from '@reach/router';
import OneHero from './components/OneHero';
import TopNavigation from './components/TopNavigation';
import Footer from './components/Footer';
import Redirect from './components/Redirect';

function App() {
  return (
    <div className="App">
      <TopNavigation />
      <Router>
        <Redirect path="/" to="/home"/>
        <HomePage path="/home" />
        <AllHeroes path="/heroes"/>
        <OneHero path="/heroes/:id"/>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
