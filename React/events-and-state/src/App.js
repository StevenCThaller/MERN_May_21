import logo from './logo.svg';
import './App.css';
import AlertButton from './components/AlertButton';
import ComplexButton from './components/ComplexButton';

function App() {
  return (
    <div className="App">
      <ComplexButton 
        ooh="ooo"
        aah="aaa"
      />
      {/* <AlertButton /> */}
    </div>
  );
}

export default App;
