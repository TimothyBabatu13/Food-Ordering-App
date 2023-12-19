
const Categories = (props)=>{

    //#d6edff
    return(
        <div className="categories--item" style={{"borderRadius":"10px",}}>
            <div style={{"padding":"20px", "background":"#ffffff", "borderRadius":"15px"}}>
                <img 
                    height="100" 
                    width="100" 
                    src={props.src} 
                    alt={props.alt} 
                />  
            </div>
            <p style={{"textAlign":"center"}}>{props.text}</p>
        </div>
    )
}

export default Categories;