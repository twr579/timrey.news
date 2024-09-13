import { keyframes, styled } from "@mui/material";
import { ReactNode } from "react";

interface RotatingDivProps {
    children: ReactNode;
}

function RotatingDiv({ children }: RotatingDivProps) {
    const rotate = keyframes`
    from { transform: rotate(2deg); }
    to { transform: rotate(-2deg); }
    `;

    const RotatingDiv = styled('div')({
        animation: `${rotate} 2s alternate-reverse infinite`,
        position: 'absolute',
        bottom: 16,
        right: 16,
    });

    return (
        <RotatingDiv>{children}</RotatingDiv>
    );
}

export default RotatingDiv;