import { Box, Slide, Typography, useScrollTrigger } from '@mui/material';
import { useEffect, useRef, useState } from 'react';
import useWindowDimensions from '../helpers/getWindowDimensions';


function Headline() {
    const { height } = useWindowDimensions();
    const [elementHeight, setElementHeight] = useState(0);
    const ref = useRef<HTMLElement>();

    useEffect(() => {
        setElementHeight(ref.current?.clientHeight || 0);
    }, [])

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
                        <Typography variant='h1'>TIMREY.NEWS</Typography>
                        <Typography variant='h5'>or: how I learned to stop worrying and love the web</Typography>
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
