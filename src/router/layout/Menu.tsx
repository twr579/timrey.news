import { Box, IconButton, Link, Typography, Toolbar, Drawer, Divider, ListItemButton, ListItemIcon, Container } from "@mui/material";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from "@mui/icons-material/Close";
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import FolderIcon from '@mui/icons-material/Folder';
import ContactPageIcon from '@mui/icons-material/ContactPage';

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
        icon: <ContactPageIcon color="secondary" />,
        path: '/contact',
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
                    anchor='left'
                    open={open}
                    onClose={() => toggleDrawer(false)}
                >
                    <Box sx={{
                        p: 2,
                    }}>
                        <IconButton color='secondary' sx={{ mb: 2 }}>
                            <CloseIcon onClick={() => toggleDrawer(false)} />
                        </IconButton>
                        <Divider sx={{ mb: 2 }} />
                        <Box sx={{ mb: 2 }}>
                            {pages.map(page => <ListItemButton LinkComponent={Link} href={page.path}>
                                <ListItemIcon>
                                    {page.icon}
                                </ListItemIcon>
                                <Typography variant='h2'>{page.title}</Typography>
                            </ListItemButton>
                            )}
                        </Box>
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