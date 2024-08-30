import { Box, Grow, Slide, Typography, useScrollTrigger } from '@mui/material';
import { useEffect, useRef, useState } from 'react';
import useWindowDimensions from '../helpers/getWindowDimensions';
import TextTransition, { presets } from 'react-text-transition';

const TEXT1 = ['', '.'];
const TEXT2 = ['OLD', 'EW']

function Headline() {
    const { height } = useWindowDimensions();
    const [elementHeight, setElementHeight] = useState(0);
    const [index, setIndex] = useState(0);
    const [grow, setGrow] = useState(false);
    const ref = useRef<HTMLElement>();

    useEffect(() => {
        setElementHeight(ref.current?.clientHeight || 0);
    }, [])

    useEffect(() => {
        setIndex(0);
        setGrow(false);
        document.body.style.overflow = "hidden";
        const timeoutId = setTimeout(
            () => {
                setIndex(1);
                setGrow(true);
                document.body.style.overflow = "auto";
            },
            3000, // 3 seconds
        );
        return () => clearTimeout(timeoutId);
    }, []);

    const trigger = useScrollTrigger({ threshold: height * 0.8 - elementHeight - 16, disableHysteresis: true });

    return (
        <>
            <Box
                ref={ref}
                position={'fixed'}
                top={'20vh'}
                left={'50%'}
                width={'100%'}
                sx={{ transform: 'translate(-50%)' }}
            >
                <Slide appear={false} direction='down' in={!trigger}>
                    <Box display={'flex'} flexDirection={'column'} alignItems={'center'}>
                        <Typography variant='h1'>
                            TIMREY
                            <TextTransition inline>{TEXT1[index]}</TextTransition>
                            N
                            <TextTransition inline>{TEXT2[index]}</TextTransition>
                            S
                        </Typography>
                        <Grow in={grow} timeout={2000}>
                            <Typography variant='h5'>or: how I learned to stop worrying and love the web</Typography>
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
