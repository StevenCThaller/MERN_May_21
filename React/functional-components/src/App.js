import logo from './logo.svg';
import './App.css';
import AlertButton from './components/AlertButton';
import ComplexButton from './components/ComplexButton';
import FunctionalComplexButton from './components/FunctionalComplexButton';

function App() {
  return (
    <div className="App">
      <p>Class Component</p>
      <ComplexButton 
        ooh="ooo"
        aah="aaa"
      />
      <p>Functional Component</p>
      <FunctionalComplexButton
        ooh="ooo"
        aah="aaa"
      />
      {/* <AlertButton /> */}
    </div>
  );
}

export default App;
