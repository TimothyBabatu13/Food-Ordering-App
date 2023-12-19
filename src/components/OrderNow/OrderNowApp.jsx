import OrderNow from "./OrderNow";
import fire from "../../assets/fire.svg";
import food from "../../assets/food2-removebg-preview.png";
import { useState } from "react";
const OrderNowApp = ()=>{
    const datum = [
        {
            src: food,
            alt: "food",
            name: "Cobbs Salad",
            ingredient: "Tomato, avocado & more",
            price: "N9,000.00",
            like: true,
            id:0
        },
        {
            src: food,
            alt: "food",
            name: "Cobbs Salad",
            ingredient: "Tomato, avocado & more",
            price: "N3,000.00",
            like: false,
            id: 1
        },
        {
            src: food,
            alt: "food",
            name: "Cobbs Salad",
            ingredient: "Tomato, avocado & more",
            price: "N3,000.00",
            like: true,
            id: 2
        },
        {
            src: food,
            alt: "food",
            name: "Cobbs Salad",
            ingredient: "Tomato, avocado & more",
            price: "N3,000.00",
            like: true,
            id: 3
        },
        {
            src: food,
            alt: "food",
            name: "Cobbs Salad",
            ingredient: "Tomato, avocado & more",
            price: "N3,000.00",
            like: true,
            id: 4
        },
        {
            src: food,
            alt: "food",
            name: "Cobbs Salad",
            ingredient: "Tomato, avocado & more",
            price: "N3,000.00",
            like: true,
            id: 5
        },
        {
            src: food,
            alt: "food",
            name: "Cobbs Salad",
            ingredient: "Tomato, avocado & more",
            price: "N3,000.00",
            like: true,
            id: 6
        },
        {
            src: food,
            alt: "food",
            name: "Cobbs Salad",
            ingredient: "Tomato, avocado & more",
            price: "N3,000.00",
            like: true,
            id: 7
        },
        {
            src: food,
            alt: "food",
            name: "Cobbs Salad",
            ingredient: "Tomato, avocado & more",
            price: "N3,000.00",
            like: true,
            id: 8
        }
    ]
    const [data, setData] = useState(datum)

    const handleLike = (e)=>{

        setData(prev=>{
            const data = prev.map((item, id)=>{
                if(id === parseInt(e.target.id)){
                    return{
                        ...item,
                        like: !item.like
                    }
                }
                return item;
            })
            return data;
        })
    }
    
    const handleClick = ()=>{
        console.log("hi")
    }
    return(
       <main style={{"marginTop":"10px"}}>
            <div style={{"display":"flex", "justifyContent":"space-between", "alignItems":"center", "marginBottom":"10px"}}>
                <h3>Order Now</h3>
                <p style={{"display":"flex", "alignItems":"center"}}>Popular <img style={{"marginLeft":"5px"}} src={fire} alt="fire icon" /></p>  
            </div>
            <div style={{"display":"flex", "alignItems":"center","overflowX":"scroll"}}>
                {
                    data.map((food, id) =>(
                        <OrderNow
                            key={id}
                            src={food.src}
                            alt={food.alt}
                            name={food.name}
                            ingredient={food.ingredient}
                            price={food.price}
                            id={food.id}
                            handleLike={handleLike}
                            handleClick = {handleClick}
                            like = {food.like}
                        />
                    ))
                }
                
            </div>
            <h6 style={{"padding":"10px","background":"#ffdeb7", "width":"fit-content", "margin":"auto", "cursor":"pointer", "borderRadius":"5px"}}>See more</h6>
       </main>
    )
}

export default OrderNowApp