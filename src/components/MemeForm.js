import data from './memesData'
import {useState} from 'react'
import Count from './Count';

export default function Form(){
    const [meme, setMeme] = useState({
            topText: '',
            bottomText: '',
            randomImage: 'https://i.imgflip.com/1ur9b0.jpg'
    });

    const [allMemeImages, setAllMemeImages] = useState(data);
        
    // const [things, setThing] = useState(["Thing 1", "Thing 2"]);

    // const thingsEl = things.map(thing => <p key={thing}>{thing}</p>)

    // function addItem(){
    //     setThing(prevState => [...prevState, `Thing ${prevState.length + 1} `])
    // }

    function generateMeme(){
        const memesArray = allMemeImages.data.memes;
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        let url = memesArray[randomNumber].url;
        setMeme(prevState => ({
                ...prevState,
                randomImage: url
        }))
    }

    const [count, setCount] = useState(0);

    function plus(){
        setCount(prevCount => prevCount + 1)
    }

    function subtract(){
        setCount(prevCount => prevCount - 1)
    }
    

    return(
        <div className="form flex align-center flex-col">
            <div className="flex input">
                <input type="text" placeholder="Top text" />
                <input type="text" placeholder="Bottom text" />
            </div>
            <button onClick={generateMeme} className="text-center">
                Get a new meme image
            </button>
           <div className="meme--image flex flex-col align-center justify-center">
               <div className="top--text">topText</div>
               <img src={meme.randomImage} alt="meme image"/>
               <div className="bottom--text">Bottom text</div>
           </div>

           <div className="counter">
                <button onClick={subtract}>-</button>
                <Count 
                  number={count}
                />
                <button onClick={plus}>+</button>
           </div>
           {/* {thingsEl}
           <button onClick={addItem}>Add item</button> */}
        </div>
    )
}