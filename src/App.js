import './App.css';
import Navbar from './components/Navbar';
import Form from './components/MemeForm';
import boxes from './components/boxes';
import { useState } from 'react';
import Box from './components/Box';

export default function App() {
  const [squares, setSquares] = useState(boxes);
  // const styles = {
  //   backgroundColor: darkMode ? '#222222' : '#cccccc'
    
  // }

  function toggle(id){
    setSquares(prevSquares => {
      // declarative method 
      return prevSquares.map(square => {
        return square.id === id ? {...square, on: !square.on} : square
      })

      // imperative method 
    //   const newSquares = [];
    //   for (let i = 0; i < prevSquares.length; i++) {
    //     const currentSquare = prevSquares[i];
    //     console.log(id)
    //     if(currentSquare.id === id){
    //       const updatedSquare = {
    //         ...currentSquare,
    //         on: !currentSquare.on
    //       }
    //       newSquares.push(updatedSquare);
    //     }else{
    //       newSquares.push(currentSquare);
    //     }
    //   }
    //   return newSquares;
    })
  }

  const squareElements = squares.map(square => (
    <Box 
      key={square.id} 
      on={square.on}
      toggle={() => toggle(square.id)}
      // style={styles}
      />
    // <div style={styles} className="box" key={square.id}></div>
  ))

  return (
    <div className="App">
      <Navbar />
      <div className="form">
        <Form />
      </div>
      <div className="square flex ">
        {squareElements}
      </div>

    </div>
  );
}

