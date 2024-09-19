import { Box, Chip, Grid2, Typography, useTheme } from "@mui/material";
import Grid from "./components/Grid";
import thermometer from "../../images/thermometer.png";
import BlinkingIcon from "../layout/BlinkingIcon";
import ArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const projects = [
    {
        title: 'Thermometer',
        date: '08/24 - 09/24',
        labels: ['C++', 'Embedded'],
        image: thermometer,
        brief: 'A portable, lightweight thermometer based on the ATmega328P microcontroller.',
        description: `I was inspired to work on this project because of my lack of a thermometer to take on hiking/camping trips.
                    I've previously relied on my phone's weather app and woken up with a frost-covered sleeping bag as a result,
                    so having a thermometer on hand is a useful tool for testing the efficacy of my sleep system. The code was
                    written and tested in Arduino IDE. Schematic and PCB were designed in KiCad.`
    }
];

function Work() {
    const theme = useTheme();

    return (
        <>
            <Typography variant='h1'>Work</Typography>
            {projects.map((project, index) =>
                <Box sx={{ border: `solid 1px ${theme.palette.primary.main}`, p: 2, mt: 2 }} key={index}>
                    <Grid2 container alignItems={'center'} justifyContent={'space-between'}>
                        <Typography variant='h2'>{project.title}</Typography>
                        <Typography variant='h4'>{project.date}</Typography>
                    </Grid2>
                    {project.labels.map((label, index) =>
                        <Chip label={label} key={index} sx={{ mr: 1 }} />
                    )}
                    <Grid><img src={project.image} width={'75%'} /></Grid>
                    <Typography variant="h5"><BlinkingIcon icon={<ArrowRightIcon />} />
                        {project.brief}
                    </Typography>
                    <Typography variant="h5"><BlinkingIcon icon={<ArrowRightIcon />} />
                        {project.description}
                    </Typography>
                </Box>
            )}
        </>
    );
}

export default Work;