import { Box, Button, Grid2, Typography } from "@mui/material";
import StyledCard from "../../layout/StyledCard";
import DescriptionIcon from '@mui/icons-material/Description';

const skills = [
    {
        title: 'Languages',
        list: 'JavaScript, TypeScript, NodeJS, HTML, CSS, SQL, Python, Java, C/C++, C#, PHP, Bash'
    },
    {
        title: 'Frameworks & Libraries',
        list: 'React, Material UI, Redux, Next.js, NextAuth, AngularJS, Express, Bootstrap, Tailwind, Flask, Django, .NET'
    },
    {
        title: 'Tools',
        list: `Linux, VS Code, Git, GitHub, GitLab, GCP, AWS, GraphQL, REST, MQTT, JSON, Docker, Figma, Agile, SCRUM, KiCad, 
        Fusion 360, Office Suite, Microcontrollers, Multimeters, Soldering`
    }
];

function Skills() {
    return (
        <>
            <Typography variant="h4" sx={{ mt: 2 }}>Some of the tricks up my sleeve...</Typography>
            <Grid2 container spacing={2} sx={{ my: 2 }}>
                {skills.map((skill, index) =>
                    <Grid2 size={{ xs: 12, md: 4 }} key={index}>
                        <StyledCard>
                            <Typography variant="h5" fontWeight={'bold'}>{skill.title}</Typography>
                            <Typography variant="h6">{skill.list}</Typography>
                        </StyledCard>
                    </Grid2>
                )}
            </Grid2>
            <Typography variant="h4" sx={{ mt: 2 }}>And there's more!</Typography>
            <Box height={'50vh'}>
                <Button
                    startIcon={<DescriptionIcon />}
                    variant='outlined'
                    sx={{ position: 'relative', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center' }}
                >
                    <Typography variant="h2">Check out my resume</Typography>
                </Button>
            </Box>
        </>
    );
}

export default Skills;