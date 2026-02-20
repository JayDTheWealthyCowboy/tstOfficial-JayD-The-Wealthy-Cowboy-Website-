"use client";

import React, { useMemo } from "react";
import { motion } from "framer-motion";

const GoldAura = ({ intensity = 1.5 }: { intensity?: number }) => {
    // Use useMemo to prevent re-renders on every parent state change
    const layers = useMemo(() => {
        return [
            {
                id: "fine",
                count: Math.floor(60 * intensity),
                sizeRange: [1, 3],
                durationRange: [25, 45],
                opacityRange: [0.05, 0.15],
                blur: "1px",
            },
            {
                id: "mid",
                count: Math.floor(40 * intensity),
                sizeRange: [2, 5],
                durationRange: [15, 30],
                opacityRange: [0.1, 0.25],
                blur: "2px",
            },
            {
                id: "bright",
                count: Math.floor(20 * intensity),
                sizeRange: [1, 2],
                durationRange: [10, 20],
                opacityRange: [0.2, 0.4],
                glow: true,
            }
        ];
    }, [intensity]);

    return (
        <div className="fixed inset-0 pointer-events-none overflow-hidden z-20">
            {/* Background radial glow */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(212,175,55,0.05)_0%,transparent_60%)]" />

            {layers.map((layer) => (
                <React.Fragment key={layer.id}>
                    {Array.from({ length: layer.count }).map((_, i) => (
                        <Particle
                            key={`${layer.id}-${i}`}
                            layer={layer}
                        />
                    ))}
                </React.Fragment>
            ))}
        </div>
    );
};

const Particle = ({ layer }: { layer: any }) => {
    const size = Math.random() * (layer.sizeRange[1] - layer.sizeRange[0]) + layer.sizeRange[0];
    const startY = Math.random() * 120 - 10; // -10% to 110%
    const duration = Math.random() * (layer.durationRange[1] - layer.durationRange[0]) + layer.durationRange[0];
    const delay = Math.random() * -duration; // Start at different points in path
    const opacity = Math.random() * (layer.opacityRange[1] - layer.opacityRange[0]) + layer.opacityRange[0];

    return (
        <motion.div
            className="absolute rounded-full bg-gold-primary"
            style={{
                width: size,
                height: size,
                opacity: opacity,
                filter: layer.blur ? `blur(${layer.blur})` : undefined,
                boxShadow: layer.glow ? "0 0 8px #ffd700" : "none",
                top: `${startY}%`,
                left: "-5vw",
            }}
            initial={{ x: "-5vw" }}
            animate={{
                x: "110vw",
                y: [0, -20, 20, 0], // Slight wave motion
            }}
            transition={{
                duration: duration,
                repeat: Infinity,
                ease: "linear",
                delay: delay,
            }}
        />
    );
};

export default GoldAura;
