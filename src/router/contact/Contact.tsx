import { Button, Link, Typography } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import contact from '../../images/contact.png';
import RotatingDiv from "../layout/RotatingDiv";

function Contact() {
    return (
        <>
            <Typography variant='h1'>Contact</Typography>
            <Typography variant="h4">Want to get in touch? Me too!</Typography>
            <Button
                LinkComponent={Link}
                startIcon={<SendIcon />}
                href="mailto:twreynolds98@gmail.com"
                variant='outlined'
                sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center' }}
            >
                <Typography variant="h2">Shoot me an email</Typography>
            </Button>
            <RotatingDiv>
                <img src={contact} height={'200'} />
            </RotatingDiv>
        </>
    );
}

export default Contact;