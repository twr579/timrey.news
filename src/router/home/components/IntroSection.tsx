import { Fade, Grid2, Link, Typography, useScrollTrigger } from '@mui/material';
import selfie from '../../../images/selfie.png';
import ArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import BlinkingIcon from '../../layout/BlinkingIcon';
import theme from '../../../theme';

function IntroSection() {
    const trigger = useScrollTrigger({ disableHysteresis: true });

    return (
        <>
            <Grid2
                container
                spacing={2}
                m={2}
                bgcolor={theme.palette.background.default}
                borderRadius={5}
                boxShadow={`-2px 2px 4px rgba(0, 0, 0, 0.5),
                2px -2px 0 rgba(255, 255, 255, 0.2);`}
                padding={2}
            >
                <Fade in={trigger} timeout={2000}>
                    <Grid2 size={{ sm: 6 }} display={'flex'} flexDirection={'column'} justifyContent={'space-evenly'}>
                        <Typography variant='h5'><BlinkingIcon icon={<ArrowRightIcon />} /> Hey, I'm Tim Rey(nolds) and this is the go-to website for any and all news about me.</Typography>
                        <Typography variant='h5'><BlinkingIcon icon={<ArrowRightIcon />} /> I'm an electrical, computer, software, full stack, embedded, etc. engineer excited to break out into the industry.</Typography>
                        <Typography variant='h5'><BlinkingIcon icon={<ArrowRightIcon />} /> Want to get to know me? Start <Link href="/about" sx={{ fontFamily: "Heorot, Times, serif" }}>here</Link></Typography>
                    </Grid2>
                </Fade>
                <Grid2 size={{ sm: 6 }}>
                    <img src={selfie} width='100%' />
                </Grid2>
            </Grid2>
        </>
    );
}

export default IntroSection;