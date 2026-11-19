import React from "react";
import DesktopHero from "./DesktopHero";
import MobileHero from "./MobileHero";

const Hero = () => {
    return (
        <>
            {/* Desktop Hero Layout (>= 768px) */}
            <DesktopHero />

            {/* Dedicated Mobile Hero Layout (< 768px, 100dvh Above The Fold) */}
            <MobileHero />
        </>
    );
};

export default Hero;
