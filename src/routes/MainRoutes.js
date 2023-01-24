import {Routes, Route} from 'react-router-dom';
import Layout from "../components/Layout";
import Homepage from "../components/homepage/Homepage";
import Menu from "../components/homepage/menu/Menu";
import Slider from "../components/homepage/slider/Slider";
import Footer from "../components/homepage/footer/Footer";

const MainRoutes = () => {
    return(
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Homepage />} />
                <Route path="/menu" element={<Menu />} />
                <Route path="/w-srodku" element={<Slider />} />
                <Route path="/lokalizacja" element={<Footer />} />
            </Route>
        </Routes>
    )
}

export default MainRoutes;