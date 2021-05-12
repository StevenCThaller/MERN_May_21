import './App.css';
import Tabs from './components/Tabs';

function App() {
  const tabs = [
    {
      label: "Tab 1",
      content: "These are the contents of the first tab.",
      callback: () => alert("You clicked on tab 1!")
    },
    {
      label: "Tab 2",
      content: "These are the contents of the SECOND tab."
    },
    {
      label: "Tab 3",
      content: "Batman is superior to superman in every way. fite me.",
      callback: () => tabs[2].label = "Not Tab 3"
    },
    {
      label: "Tab 4",
      content: "It is wednesdays my dudes."
    }
  ]
  
  return ( 
    <div className="App">
      <Tabs tabs={tabs} />
    </div>
  );
}

export default App;
