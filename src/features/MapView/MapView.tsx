import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

import { addPopupToMapWidget, createMapWidget } from "./mapWidget";
import { Box, Container, Typography } from "@mui/material";
import { Map } from "leaflet";

function MapView() {
    const containerRef = useRef<HTMLDivElement>(null);
    const mapRef = useRef<Map | null>(null);
    const [popupContainer, setPopupContainer] = useState<HTMLElement | null>(null);

    useEffect(() => {
        if (mapRef.current === null) {
            const map = createMapWidget(containerRef.current!);
            mapRef.current = map;
            const popupDiv = addPopupToMapWidget(map);
            setPopupContainer(popupDiv);
        };
    }, []);

    return (
        <Container ref={containerRef} sx={{ width: 800, height: 500, my: 2 }}>
            {popupContainer !== null && createPortal(<Greeting />, popupContainer)}
        </Container>
    );
};

function Greeting() {
    return (
        <Box>
            <Typography>Greetings from Kiev!</Typography>
        </Box>
    )
}

export default MapView;