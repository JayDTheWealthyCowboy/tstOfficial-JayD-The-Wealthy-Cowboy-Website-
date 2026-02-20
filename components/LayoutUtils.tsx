"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export const Section = ({
    children,
    className,
    id,
    dark = false
}: {
    children: React.ReactNode;
    className?: string;
    id?: string;
    dark?: boolean;
}) => (
    <section
        id={id}
        className={cn(
            "py-24 relative overflow-hidden",
            dark ? "bg-depth-vignette" : "bg-transparent",
            className
        )}
    >
        {children}
    </section>
);

export const Container = ({ children, className }: { children: React.ReactNode; className?: string }) => (
    <div className={cn("container mx-auto px-6 relative z-10", className)}>
        {children}
    </div>
);

export const Title = ({ children, className, subtitle }: { children: React.ReactNode; className?: string, subtitle?: string }) => (
    <div className={cn("mb-16 space-y-4", className)}>
        {subtitle && (
            <span className="text-gold-primary text-xs font-bold tracking-[0.4em] uppercase block">
                {subtitle}
            </span>
        )}
        <h2 className="text-3xl md:text-5xl text-white leading-tight">
            {children}
        </h2>
        <div className="w-24 h-[1px] bg-gold-primary/50" />
    </div>
);
