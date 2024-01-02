import heart from "../../assets/heart.svg";
import heartFill from "../../assets/heart-fill.svg";
const OrderNow = (props)=>{
    
    return(
        <div id={props.id} className="orderNow--item" style={{"background":"#ffffff", "padding":"10px 20px", "borderRadius":"10px", "position":"relative"}}>
            <img height={100} width={100} src={props.src} alt={props.alt} />
            <h5>{props.name}</h5>
            <h6>{props.ingredient}</h6>
            <p>{props.price}</p>
            <button onClick={props.handleClick} style={{"width":"100%", "borderRadius":"5px", "border":"none", "cursor":"pointer", "padding": "10px","background":"#ff4900", "color":"#ffffff"}}>Add to cart</button>
            <img
                id={props.id}
                style={{"position":"absolute", "top":"10px", "right":"7px", "cursor":"pointer"}} 
                src={props.like ? heartFill : heart} 
                alt="heart icon" 
                onClick={props.handleLike}
                
            />
        </div>
    )
}

export default OrderNow;