import React from 'react';
import './App.css';

const SlotM = () => {
  const emojis = ['🤘', '🤡', '🌚']; 


  const x = emojis[Math.floor(Math.random() * emojis.length)];
  const y = emojis[Math.floor(Math.random() * emojis.length)];
  const z = emojis[Math.floor(Math.random() * emojis.length)];

  if (x === y && y === z) {
    return (
      <>
        <div className='slot_inner'>
          <h1>
            {x} {y} {z}
          </h1>
          <h1 className='win'>
            You Win! 😄
          </h1>
          <hr />
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className='slot_inner'>
          <h1>
            {x} {y} {z}
          </h1>
          <h1 className='lose'>
            You Lose! 😞
          </h1>
          <hr />
        </div>
      </>
    );
  }
};

const refresh = () =>{
  window.location.reload();
  return false;  
}

function App() {
  return (
    <>
      <h1 className='heading_style'>
        🎰 Welcome to <span style={{ fontWeight: 'bold', padding: '5px', borderRadius: '10px', textAlign: 'center' }}> slot machine game </span> 🎰
      </h1>
      <div className='slot_machine'>
        <SlotM />
      </div>
      <button onClick={refresh}>PLAY</button>
    </>
  );
}

export default App;
