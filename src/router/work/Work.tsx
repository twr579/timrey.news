import { Card, CardContent, Chip, Fade, Grid2, Link, Typography, useTheme } from "@mui/material";
import Grid from "./components/Grid";
import BlinkingIcon from "../layout/BlinkingIcon";
import ArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { useEffect, useState } from "react";
import Filter, { Labels } from "./components/Filter";
import { projects } from "./components/Projects";
import { useLocation } from "react-router-dom";

function Work() {
    const [filterLabels, setFilterLabels] = useState(Object.values(Labels) as Array<keyof typeof Labels>);

    const location = useLocation();
    const theme = useTheme();

    useEffect(() => {
        if (location.hash) {
            const element = document.getElementById(location.hash.slice(1));
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, [location.hash]);

    return (
        <>
            <Typography variant='h1'>Work</Typography>
            <Filter filterLabels={filterLabels} setFilterLabels={setFilterLabels} />
            {projects.map((project, index) =>
                <Link href={`//${project.href}`} id={project.id} sx={{
                    scrollMargin: theme.spacing(10),
                }}>
                    <Card elevation={3} sx={{
                        my: 1,
                        transition: 'transform 0.5s',
                        '&:hover': { transform: 'scale(0.95)' },
                        display: filterLabels.some(el => project.labels.includes(el as Labels)) ? "block" : "none",
                    }}>
                        <CardContent>

                            <Grid2 container alignItems={'center'} justifyContent={'space-between'}>
                                <Typography variant='h2'>{project.title}</Typography>
                                <Typography variant='h4'>{project.date}</Typography>
                            </Grid2>
                            {project.labels.map((label, index) =>
                                <Chip label={label} key={index} sx={{ mr: 1, mt: 1 }} />
                            )}
                            <Grid><img src={project.image} width={'75%'} /></Grid>
                            <Typography variant="h5"><BlinkingIcon icon={<ArrowRightIcon />} />
                                {project.brief}
                            </Typography>
                            <Typography variant="h5"><BlinkingIcon icon={<ArrowRightIcon />} />
                                {project.description}
                            </Typography>
                        </CardContent>
                    </Card>
                </Link>
            )}
        </>
    );
}

export default Work;