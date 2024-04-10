import { Container } from "@mui/material";
import CountdownText from "features/CountdownText";
import CountdownVideo from "features/CountdownVideo";
import MapView from "features/MapView";

export default function About() {
    return (
        <Container sx={{ py: 8 }} maxWidth='md'>
            <CountdownText />
            <CountdownVideo />
            <MapView />
        </Container>
    );
};