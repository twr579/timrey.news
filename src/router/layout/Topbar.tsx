import { Box, Fade, keyframes, Link, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { Paths } from "../Router";

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
                boxShadow={`-2px 2px 4px rgba(0, 0, 0, 0.5);`}
            >
                <Link href={Paths.Home} sx={{
                    transition: 'transform 0.5s',
                    '&:hover': { transform: 'scale(0.95)' },
                }}>
                    <Typography variant='h2'>&#10016; TIMREY.NEWS &#10016;</Typography>
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