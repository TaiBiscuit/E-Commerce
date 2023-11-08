import { BrowserRouter, Routes, Route} from "react-router-dom";
import { Navbar } from "../Components";
import { Home, Details, Login, Cart } from "../pages";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../firebase';
import { useUserContext } from "../context/UserContext";

export const MainRoutes = () => {
    const {user, setUser} = useUserContext();
    onAuthStateChanged(auth, (firebaseUser) => {
    if(firebaseUser){
    setUser(firebaseUser)
    } else {
    setUser(null)
    }
    });
    return(
        <BrowserRouter>
            <Navbar /> 
            <Routes>
                <Route exact path="/" element={<Home />}/>
                <Route exact path="/login" element={<Login />}/>
                <Route exact path="/details/:id" element={<Details />}/>
                <Route exact path="/cart" element={<Cart />}/>
            </Routes>
        </BrowserRouter>
    )
}