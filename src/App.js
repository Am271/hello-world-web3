import React, { useEffect } from 'react';
import { init, greet, getval } from './Web3Client'

function App() {

  const greetx = () => {
    greet()
    .then((tx) => {
      console.log(tx.events.newMessage.returnValues.msg);
    })
    .catch((err) => {
      console.log(err);
    });
  }

  const getvalx = () => {
    getval()
    .then((tx) => {
      console.log(tx);
    })
    .catch((err) => {
      console.log(err);
    });
  }

  useEffect(() => {
    init();
  }, []);

  return <div className='App'>
    <button onClick={() => greetx()}> Greet </button>
    <button onClick={() => getvalx()}> Get Value </button>
  </div>;
}

export default App;