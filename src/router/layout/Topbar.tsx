import { Box, Fade, keyframes, Link, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

function Topbar() {
    const [fade, setFade] = useState(false);

    useEffect(() => {
        setFade(true);
    }, []);

    return (
        <>
            <Box
                position={'fixed'}
                left={'50%'}
                sx={{ transform: 'translate(-50%)', backgroundColor: 'background.default', zIndex: 1 }}
                width={'100%'}
                display={{ xs: 'none', sm: 'flex' }}
                justifyContent={'center'}
            >
                <Link href="/" sx={{
                    transition: 'transform 0.5s',
                    '&:hover': { transform: 'scale(0.95)' },
                }}>
                    <Typography variant='h2'>TIMREY.NEWS</Typography>
                </Link>

            </Box>
            <Fade in={fade} timeout={2000}>
                <Box sx={{ pt: 8 }}>
                    <Outlet />
                </Box>
            </Fade>
        </>
    );
}

export default Topbar;