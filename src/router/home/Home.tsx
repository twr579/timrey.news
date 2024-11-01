import { Divider } from "@mui/material";
import Headline from "./components/Headline";
import IntroSection from "./components/IntroSection";
import Projects from "./components/Projects";

function Home() {
    return (
        <>
            <Headline />
            <IntroSection />
            <Divider />
            <Projects />
        </>
    )
}

export default Home;