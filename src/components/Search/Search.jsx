import { useState } from "react";
import search from "../../assets/search.svg"
const Search = ()=>{

    const [text, setText] = useState("")

    const handleChange = (e)=>{
        setText(e.target.value);
    }

    const handleClick = ()=>{
        console.log(text)
    }
    
    return(
        <>
            <h3>Hungry? Get some food.</h3>
            <form style={{ "position":"relative"}} action="">
                <input
                    style={{"width":"100%","padding":"10px","borderRadius":"10px"}} 
                    type="text" 
                    name="" 
                    id=""
                    value={text}
                    onChange={handleChange}
                    placeholder="Search food & restaurant"
                />
                <img 
                    style={{"position":"absolute", "cursor":"pointer", "right":"10px", "top":"30%"}}
                    src={search} 
                    alt="search icon" 
                    onClick={handleClick}
                />
            </form>
        </>
    )
}

export default Search;