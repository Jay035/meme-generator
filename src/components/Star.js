export default function Star({isFilled, setFav}){
    return(
        <div className="">
            <span className="favorite" onClick={setFav}>{isFilled}</span>
        </div>
    )
}