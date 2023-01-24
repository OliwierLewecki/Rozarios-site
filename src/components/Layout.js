import {Outlet} from 'react-router-dom'
import MainNav from "../routes/MainNav";
import Header from "./homepage/header/Header";


const Layout = () => {
    return(
        <>
            <MainNav/>
            <Outlet />
        </>
    )
}

export default Layout;