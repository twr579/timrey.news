import { Card, CardContent, styled, SxProps, useTheme } from "@mui/material";
import selfie from '../../images/selfie.png';
import { ReactNode } from "react";

interface StyledCardProps {
    children: ReactNode;
    sx?: SxProps;
}

function StyledCard({ children, sx }: StyledCardProps) {
    const theme = useTheme();

    const backgroundImage = `linear-gradient(0deg,
     ${theme.palette.primary.light} 25%,
     ${theme.palette.primary.dark} 25%,
       ${theme.palette.primary.dark} 50%,
        ${theme.palette.primary.light} 50%,
         ${theme.palette.primary.light} 75%,
          ${theme.palette.primary.dark} 75%,
           ${theme.palette.primary.dark} 100%
           );`

    const BackgroundImage = styled('div')({
        backgroundImage: `url(${selfie})`,
        backgroundRepeat: 'round',
        backgroundSize: 'contain',
        height: 20,
    });

    return (
        <Card
            sx={{
                backgroundImage: backgroundImage,
                backgroundSize: '1px 3px',
                height: '100%',
            }}
            elevation={2}
        >
            <BackgroundImage sx={{ mt: 2 }} />
            <CardContent sx={{ ...sx, color: theme.palette.background.default, fontWeight: 'bold', height: 'calc(100% - 40px - 2rem)' }}>
                {children}
            </CardContent>
            <BackgroundImage sx={{ mb: 2 }} />
        </Card >
    );
}

export default StyledCard;