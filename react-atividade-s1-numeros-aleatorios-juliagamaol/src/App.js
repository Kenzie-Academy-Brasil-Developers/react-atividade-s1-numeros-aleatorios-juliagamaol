import './App.css';
import { useState } from 'react'//hook : função que auxiliam que antes era componentes de classe
function App() {
  const [number, setNumber] = useState(Math.floor(Math.random() * 100)+ 1)

  function randomNumber(){
    setNumber(Math.floor(Math.random() * 100)+ 1)
  }
  // const btn = document.getElementById('botao')
  // btn.addEventListener('click', {randomNumber})
  return (
    <div className="App">
      <header className="App-header">
          <span>{number}</span>
          <button onClick={randomNumber}>Criar novo numero</button>
      </header>
    </div>
  );
}

export default App;
