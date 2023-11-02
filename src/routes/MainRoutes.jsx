import { BrowserRouter, Routes, Route} from "react-router-dom";
import { Navbar } from "../Components";
import { Home, Signup, Details, Login, Cart } from "../pages";

export const MainRoutes = () => {
    return(
        <BrowserRouter>
            <Navbar /> 
            <Routes>
                <Route exact path="/" element={<Home />}/>
                <Route exact path="/sigin" element={<Signup />}/>
                <Route exact path="/login" element={<Login />}/>
                <Route exact path="/details/:id" element={<Details />}/>
                <Route exact path="/cart" element={<Cart />}/>
            </Routes>
        </BrowserRouter>
    )
}