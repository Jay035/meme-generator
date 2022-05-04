import './App.css';
import Navbar from './components/Navbar';
import Form from './components/MemeForm';
// import { useEffect, useState } from 'react';
// import WindowTracker from './components/WindowTracker';

export default function App() {

  // const [starWarsdata, setStarWarsData] = useState({});
  // const [count, setCount] = useState(1);

  // console.log('component rendered')
  // useEffect(() => {
  //   fetch(`https://swapi.dev/api/people/${count}`)
  //     .then(res => res.json())
  //     .then(data => setStarWarsData(data))
  //     .catch(err => console.log(err))
  // }, [count])

  // const [show, setShow] = useState(true)
  // console.log(show)
  return (
    <div className="App">
      <Navbar />
      <div className="form">
        <Form />
      </div>
      {/* <button onClick={() => setShow(prevState => !prevState)}>Toggle windowtracker</button>
      {show && <WindowTracker />} */}
    </div>
  );
}

