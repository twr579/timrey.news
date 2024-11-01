import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow } from "swiper/modules";
import thermometer from "../../../images/thermometer.png"
import aqiSensor from "../../../images/aqi-sensor.png";
import plusOneRoboticsLogo from "../../../images/plus-one-robotics-logo.png";
import mitDemZugLogo from "../../../images/mit-dem-zug-logo.png";
import exerciseIdentifier from "../../../images/exercise-identifier.png";
import feedbackFriendLogo from "../../../images/feedback-friend-logo.png";
import castleZombie from "../../../images/castle-zombie.png";

import "swiper/css";
import StyledCard from "../../layout/StyledCard";
import { Box, Typography, Link } from "@mui/material";
import { Paths } from "../../Router";

const projects = [
    {
        id: 'thermometer',
        title: 'Thermometer',
        img: thermometer,
    },
    {
        id: 'monitor',
        title: 'Air Quality Monitor',
        img: aqiSensor,
    },
    {
        id: 'plusonerobotics',
        title: 'Yonder + InductOne',
        img: plusOneRoboticsLogo,
    },
    {
        id: 'mitdemzug',
        title: 'mit dem Zug',
        img: mitDemZugLogo,
    },
    {
        id: 'exerciseidentifier',
        title: 'Exercise Identifier',
        img: exerciseIdentifier,
    },
    {
        id: 'feedbackfriend',
        title: 'Feedback Friend',
        img: feedbackFriendLogo,
    },
    {
        id: 'castlezombie',
        title: 'Castle Zombie',
        img: castleZombie,
    },
];

function Projects() {
    return (
        <>
            <Typography variant="h1" sx={{ mt: 2, textAlign: 'center' }}>Projects</Typography>
            <Swiper
                effect="coverflow"
                grabCursor={true}
                centeredSlides={true}
                loop={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                    rotate: 10,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                }}
                modules={[EffectCoverflow]}
                style={{
                    paddingBottom: '2rem',
                }}
            >
                {
                    projects.map((project, index) =>
                        <SwiperSlide style={{ width: 300 }} key={index}>
                            <Link href={`${Paths.Work}#${project.id}`}>
                                <Box sx={{
                                    transition: 'transform 0.5s',
                                    '&:hover': { transform: 'scale(1.02)' },
                                }}>

                                    <StyledCard sx={{
                                        display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                                    }}>
                                        <Typography variant='h5'>{project.title}</Typography>
                                        <img src={project.img} style={{ width: 150, height: 150 }} />
                                    </StyledCard>
                                </Box>
                            </Link>
                        </SwiperSlide>
                    )
                }
            </Swiper >
        </>
    );
}

export default Projects;