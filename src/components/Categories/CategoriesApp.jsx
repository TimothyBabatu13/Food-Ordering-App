import Categories from "./Categories"
import img1 from "../../assets/mini-food1-removebg-preview.png";
import img2 from "../../assets/mini-food2-removebg-preview.png";
import img4 from "../../assets/mini-food4-removebg-preview.png";
const CategoriesApp = ()=>{
    const data = [
        {
            name: "Burger",
            src: img1
        },
        {
            name: "Chicken laps",
            src: img2
        },
        {
            name: "Dont know the name",
            src: img4
        },
        {
            name: "Dont know the name",
            src: img4
        }
    ]
    return(
        <section style={{"marginTop":"10px"}}>
            <h3 style={{"marginBottom":"10px"}}>Categories</h3>
            <div style={{"display":"flex", "overflowX":"scroll"}}>
                {
                    data.map((datum, id) =>(
                        <Categories 
                            key={id} 
                            src={datum.src} 
                            alt={datum.name +" image"} 
                            text={datum.name}
                        />
                    ))
                }
                {/* <Categories src={img1}  alt="Burger" text="Burger" />
                <Categories src={img1}  alt="Burger" text="Burger" />
                <Categories src={img1}  alt="Burger" text="Burger" />
                <Categories src={img1}  alt="Burger" text="Burger" />
                <Categories src={img1}  alt="Burger" text="Burger" />
                <Categories src={img1}  alt="Burger" text="Burger" />
                <Categories src={img1}  alt="Burger" text="Burger" /> */}
            </div>
        </section>
    )
}

export default CategoriesApp;