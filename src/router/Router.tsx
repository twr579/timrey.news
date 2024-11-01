import { Route, Routes } from "react-router-dom";
import Home from "./home/Home";
import About from "./about/About";
import Menu from "./layout/Menu";
import Topbar from "./layout/Topbar";
import Work from "./work/Work";
import Contact from "./contact/Contact";

export enum Paths {
    Home = '/',
    About = '/about',
    Work = '/work',
    Contact = '/contact',
}

function Router() {
    return (
        <Routes>
            <Route path={Paths.Home} element={<Menu />}>
                <Route index element={<Home />} />
                <Route path={Paths.Home} element={<Topbar />}>
                    <Route path={Paths.About} element={<About />} />
                    <Route path={Paths.Work} element={<Work />} />
                    <Route path={Paths.Contact} element={<Contact />} />
                </Route>
            </Route>
        </Routes>
    )
}

export default Router;