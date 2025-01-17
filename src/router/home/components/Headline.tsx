import { Box, Fade, Grid2, Grow, Slide, Typography, useScrollTrigger } from '@mui/material';
import { useEffect, useRef, useState } from 'react';
import useWindowDimensions from '../../../helpers/getWindowDimensions';
import ArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import BlinkingIcon from '../../layout/BlinkingIcon';
import theme from '../../../theme';

function Headline() {
    const { height } = useWindowDimensions();
    const [elementHeight, setElementHeight] = useState(0);
    const [grow, setGrow] = useState(false);
    const ref = useRef<HTMLElement>();

    useEffect(() => {
        setElementHeight(ref.current?.clientHeight || 0);
    }, [])

    useEffect(() => {
        setGrow(false);
        document.body.style.overflow = "hidden";
        const timeoutId = setTimeout(
            () => {
                setGrow(true);
                document.body.style.overflow = "auto";
            },
            1000, // 1 second
        );
        return () => clearTimeout(timeoutId);
    }, []);

    const trigger = useScrollTrigger({ threshold: height * 0.7 - elementHeight - 16, disableHysteresis: true });

    return (
        <>
            <Box
                position={'fixed'}
                left={'50%'}
                sx={{ transform: 'translate(-50%)', backgroundColor: 'background.default', zIndex: 1 }}
                boxShadow={`-2px 2px 4px rgba(0, 0, 0, 0.5);`}
                width={'100%'}
                display={{ xs: 'none', sm: 'block' }}
            >
                <Fade in={trigger}>
                    <Typography variant='h2' textAlign={'center'}>&#10016; TIMREY.NEWS &#10016;</Typography>
                </Fade>
            </Box>
            <Box
                ref={ref}
                position={'fixed'}
                top={'30vh'}
                left={'50%'}
                width={'100%'}
                sx={{ transform: 'translate(-50%)' }}
            >
                <Slide appear={false} direction='down' in={!trigger}>
                    <Box
                        display={'flex'}
                        flexDirection={'column'}
                        alignItems={'center'}
                        bgcolor={theme.palette.background.default}
                        boxShadow={`-2px 2px 4px rgba(0, 0, 0, 0.5),
                2px -2px 0 rgba(255, 255, 255, 0.2);`}
                    >
                        <Typography variant='h1'>&#10016; TIMREY.NEWS &#10016;</Typography>
                        <Grow in={grow} timeout={2000}>
                            <Grid2 container spacing={3} direction={'column'} alignItems={'center'}>
                                <Grid2>
                                    <Typography variant='h6'>or: how I learned to stop worrying and love the web</Typography>
                                </Grid2>
                                <Grid2>
                                    <BlinkingIcon icon={<ArrowDownIcon />} />
                                </Grid2>
                            </Grid2>
                        </Grow>
                    </Box>
                </Slide>
            </Box>
            <Box
                display='flex'
                flexDirection={'column'}
                justifyContent='center'
                alignItems='center'
                minHeight='100vh'
            >
            </Box>
        </>
    );
}

export default Headline;
