import { useEffect, useRef, useState } from "react";
import { Typography } from "@mui/material";

function CountdownText() {
    const [countdown, setCountdown] = useState(9);

    const intervalRef = useRef<any>();

    useEffect(() => {
        intervalRef.current = setInterval(() => {
            setCountdown(value => value - 1);
        }, 1000);

        return () => {
            clearInterval(intervalRef.current);
        }
    }, []);

    useEffect(() => {
        countdown === 0 && clearInterval(intervalRef.current);
    }, [countdown]);

    return (
        <Typography variant='h4' align='center' gutterBottom>
                Comming soon: {countdown}
        </Typography>
    );
};

export default CountdownText;