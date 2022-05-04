import {useEffect, useState} from 'react';

export default function Form(){
    
    const [meme, setMeme] = useState({
        topText: '',
        bottomText: '',
        randomImage: 'https://i.imgflip.com/1ur9b0.jpg'
    });

    const [allMemes, setAllMemes] = useState([]);

    useEffect(() => {
        async function getMemes(){
            const res = await fetch('https://api.imgflip.com/get_memes')
            const data = await res.json()
            setAllMemes(data.data.memes)
        }
        getMemes()
        
    }, [])
        
    function generateMeme(){
        const randomNumber = Math.floor(Math.random() * allMemes.length)
        let url = allMemes[randomNumber].url;
        setMeme(prevData => ({
                ...prevData,
                randomImage: url
        }))
    }
    function updateText(e){
        const {name, value} = e.target;
        setMeme(prevData => ({
            ...prevData,
            [name] : value
        }))
    }

    return(
        <div className="form flex align-center flex-col">
            <div className="flex input">
                <input type="text" placeholder="Top text" onChange={updateText} name='topText' value={meme.topText} />
                <input type="text" placeholder="Bottom text" onChange={updateText} name='bottomText' value={meme.bottomText}  />
            </div>
            <button onClick={generateMeme} className="text-center">
                Get a new meme image
            </button>
            <div className="meme--image flex flex-col align-center justify-center">
                <div className="top--text">{meme.topText}</div>
                <img src={meme.randomImage} alt="meme pic"/>
                <div className="bottom--text">{meme.bottomText}</div>
            </div>
        </div>
    )
}