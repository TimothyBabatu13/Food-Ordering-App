import Header from "./Header.jsx/Header";
import Footer from "./Footer/Footer";
import Search from "./Search/Search";
import CategoriesApp from "./Categories/CategoriesApp";
import OrderNowApp from "./OrderNow/OrderNowApp";

const MyApp = ()=>{
    return(
        <main style={{"paddingBottom":"50px"}}>
            <Header />
            <Search />
            <CategoriesApp/>
            <OrderNowApp/>
            <Footer/>
        </main>
    )
}

export default MyApp;