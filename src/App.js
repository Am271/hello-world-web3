import React, { useEffect } from 'react';
import { init, greet } from './Web3Client'

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

  useEffect(() => {
    init();
  }, []);

  return <div className='App'>
    <button onClick={() => greetx()}> Greet </button>
  </div>;
}

export default App;