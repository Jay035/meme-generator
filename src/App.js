import './App.css';
import Navbar from './components/Navbar';
import Form from './components/MemeForm';
import { useState } from 'react';
import Star from './components/Star';

export default function App() {
  // const [isGoingOut, setIsGoingOut] = useState(true);
  
  // function flip(){
  //   setIsGoingOut(prevState => !prevState);
  // }
  const [contact, setContact] = useState({
    firstName: "John",
    lastName: "Ziroll",
    phone: "+234 8989380083",
    email: "ojeijhueg@gmail.com",
    isFavorite: true
  })

  let starIcon = contact.isFavorite ? "filled" : "empty";

  function setFavorite(){
    setContact(prevState => {
      return{
        ...prevState,
        isFavorite: !prevState.isFavorite
      }
    })
  }

  return (
    <div className="App">
      <Navbar />
      <div className="form">
        <Form />
      </div>
      <div className="contact flex flex-col justify-center align-center">
        <div className="flex">
           <Star 
            isFilled={starIcon}
            setFav={setFavorite}
           />
          <h2 className="name">{contact.firstName} {contact.lastName}</h2>
        </div>
        <p>{contact.phone}</p>
        <p>{contact.email}</p>
      
      </div>
      {/* <div className="state text-center">
        <h4>Do I feel like going out tonight?</h4>
        <div className="form" onClick={flip}>
          <h4>{isGoingOut ? "Yes" : "No"}</h4>
        </div>
      </div> */}

    </div>
  );
}

