"use client";

import dynamic from "next/dynamic";

const GoldAura = dynamic(() => import("./GoldAura"), { ssr: false });
const MouseSpotlight = dynamic(() => import("./MouseSpotlight"), { ssr: false });

export default function VisualEffects() {
    return (
        <>
            <GoldAura intensity={1.8} />
            <MouseSpotlight />
        </>
    );
}
