import { keyframes, styled, Typography } from "@mui/material";
import theme from "../theme";
import { ReactNode } from "react";

interface BlinkingIconProps {
    icon: ReactNode
};

function BlinkingIcon({ icon }: BlinkingIconProps) {
    const blink = keyframes`
    from { opacity: 1; }
    to { opacity: 0; }
    `;

    const BlinkingSpan = styled('span')({
        animation: `${blink} 2s alternate-reverse infinite`,
        color: theme.palette.primary.light,
    });

    return (<BlinkingSpan>{icon}</BlinkingSpan>);
}

export default BlinkingIcon;