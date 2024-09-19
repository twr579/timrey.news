import { Box, Chip, Fade, Grid2, Typography, useTheme } from "@mui/material";
import Grid from "./components/Grid";
import thermometer from "../../images/thermometer.png";
import BlinkingIcon from "../layout/BlinkingIcon";
import ArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { useState } from "react";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';

enum Labels {
    Cpp = 'C++',
    Embedded = 'Embedded',
    JavaScript = 'JavaScript',
}

const projects = [
    {
        title: 'Thermometer',
        date: '08/24 - 09/24',
        labels: [Labels.Cpp, Labels.Embedded],
        image: thermometer,
        brief: 'A portable, lightweight thermometer based on the ATmega328P microcontroller.',
        description: `I was inspired to work on this project because of my lack of a thermometer to take on hiking/camping trips.
                    I've previously relied on my phone's weather app and woken up with a frost-covered sleeping bag as a result,
                    so having a thermometer on hand is a useful tool for testing the efficacy of my sleep system. The code was
                    written and tested in Arduino IDE. Schematic and PCB were designed in KiCad.`
    }
];

function Work() {
    const [filterLabels, setFilterLabels] = useState(Object.values(Labels) as Array<keyof typeof Labels>);

    const handleClick = (label: keyof typeof Labels) => {
        const selected = filterLabels.includes(label);

        let newFilterLabels;
        if (selected) {
            newFilterLabels = filterLabels.filter((el) => { return el !== label });
            setFilterLabels(newFilterLabels);
        } else {
            newFilterLabels = [...filterLabels];
            newFilterLabels.push(label);
        }
        setFilterLabels(newFilterLabels);
    };

    const theme = useTheme();

    return (
        <>
            <Typography variant='h1'>Work</Typography>
            <Typography variant='h4'> Filter: {
                (Object.values(Labels) as Array<keyof typeof Labels>).map(
                    (label, index) => <Chip
                        label={label}
                        sx={{ mr: 1, mb: 1 }}
                        variant={filterLabels.includes(label) ? "outlined" : "filled"}
                        icon={filterLabels.includes(label) ? <CheckCircleOutlineIcon /> : <RadioButtonUncheckedIcon />}
                        onClick={() => handleClick(label)}
                        key={index}
                    />
                )

            }
            </Typography>
            {projects.map((project, index) =>
                <Fade in={filterLabels.some(el => project.labels.includes(el as Labels))} key={index}>
                    <Box sx={{ border: `solid 1px ${theme.palette.primary.main}`, p: 2, my: 1 }}>
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
                </Fade>
            )}
        </>
    );
}

export default Work;