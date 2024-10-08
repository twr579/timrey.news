import { Box, IconButton, Link, Typography, Toolbar, Drawer, ListItemButton, ListItemIcon, Container } from "@mui/material";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from "@mui/icons-material/Close";
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import FolderIcon from '@mui/icons-material/Folder';
import EmailIcon from '@mui/icons-material/Email';
import selfieSticker from '../../images/selfie-sticker.png';
import { GitHub, LinkedIn } from "@mui/icons-material";
import RotatingDiv from "./RotatingDiv";

const pages = [
    {
        title: 'Home',
        icon: <HomeIcon color="secondary" />,
        path: '/',
    },
    {
        title: 'About',
        icon: <InfoIcon color="secondary" />,
        path: '/about',
    },
    {
        title: 'Work',
        icon: <FolderIcon color="secondary" />,
        path: '/work',
    },
    {
        title: 'Contact',
        icon: <EmailIcon color="secondary" />,
        path: '/contact',
    },
    {
        title: 'LinkedIn',
        icon: <LinkedIn color="secondary" />,
        path: '//www.linkedin.com/in/timwreynolds/',
    },
    {
        title: 'GitHub',
        icon: <GitHub color="secondary" />,
        path: '//github.com/twr579',
    },
]

function Menu() {
    const [open, setOpen] = useState(false);

    const toggleDrawer = (open: boolean) => {
        setOpen(open);
    };

    return (
        <>
            <Toolbar sx={{ position: 'fixed', zIndex: 2 }}>
                <IconButton
                    edge='start'
                    color='secondary'
                    onClick={() => toggleDrawer(true)}
                >
                    <MenuIcon />
                </IconButton>
                <Drawer
                    anchor='top'
                    open={open}
                    onClose={() => toggleDrawer(false)}
                >
                    <Box sx={{
                        p: 2,
                        height: "100vh",
                        width: "100vw",
                    }}>
                        <IconButton color='secondary' sx={{ mb: 2 }} onClick={() => toggleDrawer(false)}>
                            <CloseIcon />
                        </IconButton>
                        <Box sx={{ mb: 2 }}>
                            {pages.map((page, index) => <ListItemButton LinkComponent={Link} href={page.path} key={index}>
                                <ListItemIcon>
                                    {page.icon}
                                </ListItemIcon>
                                <Typography variant='h2'>{page.title}</Typography>
                            </ListItemButton>
                            )}
                        </Box>
                        <RotatingDiv>
                            <img src={selfieSticker} height={'200'} />
                        </RotatingDiv>
                    </Box>
                </Drawer>
            </Toolbar>

            <Container maxWidth='xl'>
                <Outlet />
            </Container>
        </>
    );
}

export default Menu;