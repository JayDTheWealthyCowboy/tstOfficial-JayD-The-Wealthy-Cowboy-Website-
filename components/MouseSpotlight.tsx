"use client";

import React, { useState, useEffect } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

const MouseSpotlight = () => {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Smooth out the mouse movement
    const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
    const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, [mouseX, mouseY]);

    return (
        <motion.div
            className="fixed inset-0 pointer-events-none z-10 overflow-hidden"
            style={{
                background: useSpring(
                    useMotionValue(
                        "radial-gradient(600px circle at 0px 0px, rgba(212, 175, 55, 0.08), transparent 80%)"
                    )
                ),
            }}
        >
            <motion.div
                className="absolute inset-0 z-10"
                style={{
                    background: "radial-gradient(800px circle at var(--x) var(--y), rgba(212, 175, 55, 0.07), transparent 80%)",
                    // Using CSS variables to avoid re-rendering the whole div
                    // @ts-ignore
                    "--x": springX.get() + "px",
                    // @ts-ignore
                    "--y": springY.get() + "px",
                } as any}
            />
        </motion.div>
    );
};

export default MouseSpotlight;
