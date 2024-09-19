import { styled } from "@mui/material";
import { ReactNode } from "react";

interface GridProps {
    children: ReactNode
}

function Grid({ children }: GridProps) {
    const Grid = styled('div')(({ theme }) => ({
        backgroundImage: `linear-gradient(rgba(255,255,255,0.2) 2px, transparent 2px),
        linear-gradient(90deg, rgba(255,255,255,0.2) 2px, transparent 1px),
        linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
        linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px);`,
        backgroundSize: '100px 100px, 100px 100px, 20px 20px, 20px 20px',
        backgroundPosition: '-2px -2px, -2px -2px, -1px -1px, -1px -1px',
        padding: theme.spacing(2),
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(2),
        display: 'flex',
        justifyContent: 'center',
    }));
    return (
        <Grid>{children}</Grid>
    );
}

export default Grid;