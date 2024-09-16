import {
    Accordion as MuiAccordion, AccordionDetails as MuiAccordionDetails, AccordionProps,
    AccordionSummary as MuiAccordionSummary, styled, Typography, AccordionSummaryProps,
    Box
} from "@mui/material";
import InterestsIcon from '@mui/icons-material/Interests';
import { useState } from "react";
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import ArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import BlinkingIcon from "../../layout/BlinkingIcon";

const interests = [
    {
        title: 'Music',
        icon: <MusicNoteIcon />,
        bullets: [
            `For over a year now, I've been listening to an album a day from Robert Dimery's book 1001 Albums You Must Hear
            Before You Die. This has exposed me to a lot of great records from various genres, but I've always had a preference
            for rock music, especially its heavier flavors (metal, punk, hardcore, etc.). The design of this site was partially
            inspired by two albums I discovered through this project, Black Sabbath's Vol. 4 and Faust's Faust IV (coincidence
            that they're both their bands' fourth albums).`,
            `I can't say what my current favorite band is, but I have to give a shoutout to my first love, the Beatles.`,
            `In my free time, I'll fiddle around on the guitar and drums, but I'm not very good :/`
        ],
    },
    {
        title: 'Languages - not just programming!',
        icon: <ChatBubbleOutlineIcon />,
        bullets: [
            `I took Latin courses throughout high school and college (7.5 years). In high school, I competed and placed in language
            competitions at the national level. In fact, though I sometimes forget it, I have a Bachelor's degree in classical languages
            as well!`,
            `Following an accelerated introductory course I took in my last semester at college, I began teaching myself German, which
            has been going great for almost two years now.`,
            `My current language goal is to finally learn Spanish.`
        ],
    },
];

const Accordion = styled((props: AccordionProps) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
    border: `1px solid ${theme.palette.divider}`,
    '&::before': {
        display: 'none',
    },
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
    <MuiAccordionSummary
        expandIcon={<ArrowForwardIosSharpIcon color="primary" />}
        {...props}
    />
))(({ theme }) => ({
    backgroundColor: 'rgba(0, 0, 0, .05)',
    flexDirection: 'row-reverse',
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
        transform: 'rotate(90deg)',
    },
    '& .MuiAccordionSummary-content': {
        marginLeft: theme.spacing(1),
    },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

function Interests() {
    const [expanded, setExpanded] = useState<number | false>(false);

    const handleChange =
        (panel: number) => (event: React.SyntheticEvent, newExpanded: boolean) => {
            setExpanded(newExpanded ? panel : false);
        };

    return (
        <>
            <Typography variant="h4" sx={{ my: 2 }}><InterestsIcon /> Other things of interest:</Typography>
            <Box sx={{ mb: 2 }}>
                {interests.map((interest, index) =>
                    <Accordion expanded={expanded === index} onChange={handleChange(index)} key={index}>
                        <AccordionSummary
                        >
                            <Typography variant="h4">{interest.icon} {interest.title}</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            {interest.bullets.map((bullet, index) =>
                                <Typography variant="h5" key={index}>
                                    <BlinkingIcon icon={<ArrowRightIcon />} /> {bullet}
                                </Typography>
                            )}
                        </AccordionDetails>
                    </Accordion>
                )}
            </Box>
        </>
    );
}

export default Interests;