import data from './memesData';
import {useState} from 'react';

export default function Form(){
    
    const [meme, setMeme] = useState({
            topText: '',
            bottomText: '',
            randomImage: 'https://i.imgflip.com/1ur9b0.jpg'
    });

    const [allMemeImages, setAllMemeImages] = useState(data);
        
    function generateMeme(){
        const memesArray = allMemeImages.data.memes;
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        let url = memesArray[randomNumber].url;
        setMeme(prevState => ({
                ...prevState,
                randomImage: url
        }))
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
        </div>
    )
}