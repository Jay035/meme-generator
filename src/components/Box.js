import { useState } from "react"

export default function Box({on, toggle}){

    const [messages, setMessages] = useState(["a", "b"]);

    // function toggleShown(){
    //     setIsShown(prevState => prevState = !prevState)
    //     console.log(isShown)
    // }

    // const styles = {
    //     backgroundColor: on ? '#222222' : 'transparent'
    // }

    return(
        <>
            {
                messages.length === 0 ?
                <p>You're all caught up</p> :
                <p>You have {messages.length} unread 
                {messages.length > 1 ? " messages" : " message"}</p>
            }
            {/* {!messages.length && <p>You have no unread message(s)</p>} */}
            {/* {messages.length && <p>You have {messages.length} {messages.length = 1 ? "message" : "messages"}</p>} */}

            {/* <div className="box" style={styles} onClick={toggle}></div> */}
            {/* <button onClick={toggleShown}>Toggle</button> */}
            {/* {messages.length > 0 && <p>You have {messages.length} unread messages!</p>} */}
        </>
    )
}