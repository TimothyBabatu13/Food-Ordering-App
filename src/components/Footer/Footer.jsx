import person from "../../assets/person.svg";
import house from "../../assets/house.svg";
import handbag from "../../assets/handbag.svg";
import { useState } from "react";
import Image from "./Image";

const Footer = ()=>{
    const data = [
        {
            src: house,
            alt: "house icon",
            id: 0
        },
        {
            src: person,
            alt: "location icon",
            id: 1
        },
        {
            src: handbag,
            alt: "shop icon",
            id: 2
        },
        {
            src: person,
            alt: "person icon",
            id: 3
        }
    ]
    const [active, setActive] = useState("house icon");

    const handleClick = (e)=>{
        setActive(e.target.alt)
    }

    return(
        <footer style={{"display":"flex", "alignItems":"center", "justifyContent":"space-between"}}>
            {data.map((element, id)=>(
                <Image
                    key={id}
                    src={element.src}
                    alt={element.alt}
                    id={element.id}
                    handleClick={handleClick}
                    name={active}
                />
            ))}
            
        </footer>
    )
}

export default Footer;