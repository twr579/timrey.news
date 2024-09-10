import { Box, Container, Link, Typography } from "@mui/material";
import { Outlet } from "react-router-dom";

function Topbar() {
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
            <Box sx={{ pt: 8 }}>
                <Outlet />
            </Box>
        </>
    );
}

export default Topbar;