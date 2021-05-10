import { useState } from 'react';
import './App.css';
import DisplayComponent from './components/DisplayComponent';
import FormComponent from './components/FormComponent';
import SomeComponent from './components/SomeComponent';

function App() {
  // const myList = [ "Cody", "Kristen", "Mytruc", "Natalie", "Omogbolahan", "Ryder" ];

  // const displayListData = (elem, i) => <p key={i}>{elem}</p>

  // // BEST PRACTICE
  // const listDisplay = myList.map((elem, i) => <SomeComponent name={elem} key={i} i={i}/>)

  // let mapContent = (
  //   <div className="App">
  //     {/* {
  //       myList.map(displayListData)
  //     } */}
  //     {/* {
  //       myList.map((elem, i) => <p key={i}>{elem}</p>)
  //     } */}
  //     {/* BEST PRACTICE */}
  //     {listDisplay}
  //   </div>
  //   )
  const [ messages, setMessages ] = useState([]);

  const addMessageToArray = string => {
    // method 1: the long "familiar" way
    // 1. make a copy of messages
    // 2. push the new string into that copy
    // 3. store the copy into state
    // let [...messagesCopy] = messages;
    // messagesCopy.push(string);
    // setMessages(messagesCopy);

    // method 2: destructuring
    setMessages([...messages, string]);
  }

  return (
    <>
      <DisplayComponent 
        messages={messages}
      />
      <FormComponent
        submitMessage={addMessageToArray}
      />
    </>
  );
}

export default App;
