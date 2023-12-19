const Image = (props)=>{
    
    return(
        <div className="footer--div">
            <img 
                className={props.name === props.alt ? "footer--img active" : "footer--img"}
                src={props.src} 
                alt={props.alt}
                onClick={props.handleClick} 
                id={props.id}
            />
            <span className={props.name === props.alt ? "footer--span--active": "null"}></span>
        </div>
        
    )
}

export default Image;

//"footer--span"