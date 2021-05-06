import './App.css';
import HockeyTeam from './components/HockeyTeam';

function App() {
  return (
    <>
      <h1>Welcome to my Hockey Site</h1>
      <h2>Teams</h2>
      <HockeyTeam 
        teamName="Seattle Kraken" 
        homeTown="Seattle, WA" 
        wins={ 52 } 
        losses={ 0 } 
        otl={ 0 } 
        playoffs="Already won next year's Stanley Cup" 
      />
      <HockeyTeam 
        teamName="Florida Panthers" 
        homeTown="Sunrise, FL" 
        wins={ 35 } 
        losses={ 14 } 
        otl={ 5 } 
        playoffs="Yes" 
      />
      <HockeyTeam 
        teamName="Las Vegas Golden Knights"
        homeTown="Las Vegas, NV" 
        wins={ 37 } 
        losses={ 13 } 
        otl={ 2 } 
        playoffs="Yes" 
      />      
    </>
  );
}

export default App;
