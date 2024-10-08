import { Route, Routes } from "react-router-dom";
import Home from "./home/Home";
import About from "./about/About";
import Menu from "./layout/Menu";
import Topbar from "./layout/Topbar";
import Work from "./work/Work";
import Contact from "./contact/Contact";

function Router() {
    return (
        <Routes>
            <Route path='/' element={<Menu />}>
                <Route index element={<Home />} />
                <Route path='/' element={<Topbar />}>
                    <Route path='about' element={<About />} />
                    <Route path='work' element={<Work />} />
                    <Route path='contact' element={<Contact />} />
                </Route>
            </Route>
        </Routes>
    )
}

export default Router;