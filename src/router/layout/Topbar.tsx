import { Box, Fade, Link, Typography } from "@mui/material";
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
                display={{ xs: 'none', sm: 'block' }}
            >
                <Link href="/">
                    <Typography variant='h2' textAlign={'center'}>TIMREY.NEWS</Typography>
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