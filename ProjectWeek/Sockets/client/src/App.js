import './App.css';
import io from 'socket.io-client';
import { useState, useEffect } from 'react';

function App() {
  const [socket] = useState(() => io(':8000'));
  const [message, setMessage] = useState('');
  const [chatLog, setChatLog] = useState([]);
  const [chatRoom, setChatRoom] = useState('');
  const [roomJoined, setRoomJoined] = useState(false);
  const [userName, setUserName] = useState('');
  const [nameSet, setNameSet] = useState(false);

  useEffect(() => {

    return () => socket.disconnect(true);
  }, []);

  socket.on('messageReceived', data => {
    setChatLog(data.messageLog)
  })

  socket.on('roomJoined', data => {
    setChatLog(data.messageLog)
  })

  const joinRoom = e => {
    e.preventDefault();
    socket.emit('joinRoom', chatRoom);
    setRoomJoined(true);
  }

  const submitUserName = e => {
    e.preventDefault();
    setNameSet(true);
  }


  const submitMessage = e => {
    e.preventDefault();

    socket.emit('sendMessage', {chatRoom, userName, message});
    setMessage('');
  }

  return (
    <div className="App">
      {
        !roomJoined ?
        <form onSubmit={joinRoom}>
          <label htmlFor="chatRoom">Chat Room: </label>
          <input type="text" name="chatRoom" onChange={e => setChatRoom(e.target.value)} value={chatRoom}/>
          <input type="submit" value="Join Room" />
        </form>
        :
        !nameSet ?
        <form onSubmit={submitUserName}>
          <label htmlFor="userName">Username: </label>
          <input type="text" name="userName" onChange={e => setUserName(e.target.value)} value={userName}/>
          <input type="submit" value="Set Username" />
        </form>
        :
        <form onSubmit={submitMessage}>
          <label htmlFor="message">Message: </label>
          <input type="text" name="message" onChange={e => setMessage(e.target.value) } value={message}/>
          <input type="submit" value="Submit" />
        </form>
      }

      {
        chatLog.map((mess, i) => <p key={i}>{mess.userName}: {mess.message}</p>)
      }
    </div>
  );
}

export default App;
