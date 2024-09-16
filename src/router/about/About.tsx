import { Box, Divider, Grid2, Link, Typography } from "@mui/material";
import selfieSticker from '../../images/selfie-sticker.png';
import StyledCard from "../layout/StyledCard";
import Skills from "./components/Skills";
import Interests from "./components/Interests";

function About() {
    return (
        <>
            <Typography variant='h1'>About Me</Typography>
            <Typography variant="h4">"Well, how did I get here?"</Typography>
            <Grid2 container spacing={2} justifyContent={'right'} sx={{ my: 2 }}>
                <Grid2 size={{ xs: 12, sm: 8 }}>
                    <StyledCard>
                        <Grid2 container direction='row' spacing={2} alignItems={'center'}>
                            <Grid2 size={{ xs: 12, md: 6 }}>
                                <Typography variant="h5">
                                    I'm an Electrical & Computer Engineering graduate from The University of Texas at Austin,
                                    passionate about technology development and problem-solving. With hands-on experience in
                                    software engineering, web development, and embedded systems, I have successfully developed
                                    and optimized complex applications and hardware projects. My expertise spans multiple programming
                                    languages, frameworks, and tools, from JavaScript and React to Docker and microcontrollers. As a
                                    Web Development Intern at Plus One Robotics, I improved API performance, boosted testing coverage,
                                    and streamlined CI/CD pipelines. I’ve also designed embedded systems like an air quality monitor
                                    and digital thermometer, showcasing my skills in PCB design and real-time sensor data streaming.
                                </Typography>
                            </Grid2>
                            <Grid2 size={{ xs: 12, md: 6 }} textAlign={'center'}>
                                <img src={selfieSticker} width={'80%'} />
                            </Grid2>
                        </Grid2>
                    </StyledCard>
                </Grid2>
            </Grid2>
            <Divider />
            <Skills />
            <Divider />
            <Interests />
        </>
    );
}

export default About;