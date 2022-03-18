import './App.css';
import { useEffect, useState } from 'react';
import Characters from './components/Characters';

function App() {

  const [characterList, setCharacterList] = useState([])
  const [next, setNext] = useState(1)

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/?page=${next}`)
    .then((response) => response.json())
    .then((data) => setCharacterList(data.results))
    .catch((err) => console.log(err))
  }, [next])

  console.log(characterList)

  return (
    <div className="App">
      <header className="App-header">


        <Characters characterList={characterList}
        next={next}
        setNext={setNext}
        />
      </header>
    </div>
  );
}

export default App;
