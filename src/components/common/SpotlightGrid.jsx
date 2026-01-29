import React, { useRef } from 'react';

const SpotlightGrid = ({ children, className = "" }) => {
    const containerRef = useRef(null);

    const handleMouseMove = (e) => {
        if (!containerRef.current) return;
        const { left, top } = containerRef.current.getBoundingClientRect();
        const x = e.clientX - left;
        const y = e.clientY - top;

        containerRef.current.style.setProperty('--mouse-x', `${x}px`);
        containerRef.current.style.setProperty('--mouse-y', `${y}px`);
    };

    return (
        <div
            ref={containerRef}
            onMouseMove={handleMouseMove}
            className={`relative overflow-hidden ${className}`}
            style={{
                '--mouse-x': '-500px',
                '--mouse-y': '-500px',
            }}
        >
            {/* Grid Pattern */}
            <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:20px_20px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)] opacity-30 pointer-events-none" />

            {/* Spotlight Effect */}
            <div
                className="absolute inset-0 pointer-events-none transition-opacity duration-300"
                style={{
                    background: `radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(56, 189, 248, 0.15), transparent 80%)`,
                }}
            />

            {/* Content */}
            <div className="relative z-10">
                {children}
            </div>
        </div>
    );
};

export default SpotlightGrid;
