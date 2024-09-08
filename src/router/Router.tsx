import { Route, Routes } from "react-router-dom";
import Home from "./home/Home";
import About from "./about/About";

function Router() {
    return (
        <Routes>
            <Route index element={<Home />} />
            <Route path='about' element={<About />} />
        </Routes>
    )
}

export default Router;