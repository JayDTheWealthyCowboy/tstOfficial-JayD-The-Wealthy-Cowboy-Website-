"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface ButtonProps {
    children: React.ReactNode;
    variant?: "primary" | "gold";
    size?: "md" | "lg";
    className?: string;
    onClick?: () => void;
    href?: string;
}

export const Button = ({
    children,
    className,
    variant = "gold",
    size = "md",
    onClick,
    href
}: ButtonProps) => {
    const isPrimary = variant === "primary";

    const buttonContent = (
        <motion.button
            whileHover={{ scale: 1.06, filter: "brightness(1.1)" }}
            whileTap={{ scale: 0.98 }}
            onClick={onClick}
            className={cn(
                "relative overflow-hidden inline-flex items-center justify-center font-dm-sans font-semibold uppercase tracking-widest transition-all focus:outline-none cursor-pointer rounded-full",
                size === "md" ? "px-6 py-3 text-sm" : "px-10 py-5 text-base",
                isPrimary
                    ? "green-gradient text-white shadow-[0_0_20px_rgba(34,197,94,0.3)] animate-metallic-flow"
                    : "gold-gradient text-black shadow-[0_0_20px_rgba(212,175,55,0.2)]",
                className
            )}
        >
            <span className="relative z-10">{children}</span>
            <div className={cn(
                "absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300",
                isPrimary ? "bg-white/20" : "bg-white/30"
            )} />
        </motion.button>
    );

    if (href) {
        return (
            <Link href={href} className="contents">
                {buttonContent}
            </Link>
        );
    }

    return buttonContent;
};
