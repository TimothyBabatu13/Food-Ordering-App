import bell from "../../assets/bell.svg"
import menu from "../../assets/list.svg"
const Header = ()=>{
    return(
        <header style={{"display":"flex","alignItems":"center","justifyContent":"space-between", "padding":"20px 0"}}>
            {/* <div>
                <span></span>
                <span></span>
                <span></span>
            </div> */}
            <img src={menu} alt="menu icon" />
            <h5>Hi Topnotch</h5>
            <div style={{"position":"relative"}}>
                <img src={bell} alt="notification icon" />
                <span style={{"position":"absolute", "top":"-8px", "left":"70%"}}>1</span>
            </div>
        </header>
    )
}

export default Header;