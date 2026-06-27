"use client";

/**
 * @author: @dorian_baffier
 * @description: Card Flip
 * @version: 1.0.0
 * @date: 2025-06-26
 * @license: MIT
 * @website: https://kokonutui.com
 * @github: https://github.com/kokonut-labs/kokonutui
 */

import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

export interface CardFlipProps {
    title?: string;
    subtitle?: string;
    description?: string;
    features?: string[];
    image?: string;
}

export default function CardFlip({
    title = "Design Systems",
    subtitle = "Explore the fundamentals",
    description = "Dive deep into the world of modern UI/UX design.",
    features = ["UI/UX", "Modern Design", "Tailwind CSS", "Kokonut UI"],
    image,
}: CardFlipProps) {
    const [isFlipped, setIsFlipped] = useState(false);

    return (
        <div
            className="relative w-full max-w-[380px] h-[420px] group [perspective:2000px]"
            onMouseEnter={() => setIsFlipped(true)}
            onMouseLeave={() => setIsFlipped(false)}
        >
            <div
                className={cn(
                    "relative w-full h-full",
                    "[transform-style:preserve-3d]",
                    "transition-all duration-700",
                    isFlipped
                        ? "[transform:rotateY(180deg)]"
                        : "[transform:rotateY(0deg)]"
                )}
            >
                <div
                    className={cn(
                        "absolute inset-0 w-full h-full",
                        "[backface-visibility:hidden] [transform:rotateY(0deg)]",
                        "overflow-hidden rounded-2xl",
                        "bg-black",
                        "border border-border",
                        "shadow-lg",
                        "transition-all duration-700",
                        "group-hover:shadow-xl",
                        isFlipped ? "opacity-0" : "opacity-100"
                    )}
                >
                    <div className="relative h-full overflow-hidden bg-black flex items-center justify-center">
                        {image && (
                            <div>
                                <Image
                                    src={image}
                                    alt={title || "Card image"}
                                    fill
                                    unoptimized
                                    className={`opacity-2 object-cover rounded-2xl z-0`}
                                />
                            </div>
                        )}

                        {image ? (
                            <div>
                                <Image
                                    src={image}
                                    alt={title || "Card image"}
                                    width={1}
                                    height={1}
                                    className="rounded-lg h-40 w-40 mb-15"
                                    unoptimized
                                />
                            </div>
                        ) : (
                            <div className="absolute inset-0 flex items-start justify-center pt-24">
                                <div className="relative w-[200px] h-[100px] flex items-center justify-center">
                                    {[...Array(10)].map((_, i) => (
                                        <div
                                            key={i}
                                            className={cn(
                                                "absolute w-[50px] h-[50px]",
                                                "rounded-[140px]",
                                                "animate-[scale_3s_linear_infinite]",
                                                "opacity-0",
                                                "shadow-[0_0_50px_rgba(255,165,0,0.5)]",
                                                "group-hover:animate-[scale_2s_linear_infinite]"
                                            )}
                                            style={{
                                                animationDelay: `${i * 0.3}s`,
                                            }}
                                        />
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>

                    <div className="absolute bottom-0 left-0 right-0 p-5">
                        <div className="text-center flex items-center justify-center gap-3">
                            <div className="space-y-1.5">
                                <h3 className="text-lg font-semibold text-white leading-snug tracking-tighter transition-all duration-500 ease-out-expo group-hover:translate-y-[-4px]">
                                    {title}
                                </h3>
                                <p className="text-sm text-zinc-200 line-clamp-2 tracking-tight transition-all duration-500 ease-out-expo group-hover:translate-y-[-4px] delay-[50ms]">
                                    {subtitle}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Back of card */}
                <div
                    className={cn(
                        "absolute inset-0 w-full h-full",
                        "[backface-visibility:hidden] [transform:rotateY(180deg)]",
                        "p-6 rounded-2xl",
                        "bg-gradient-to-b from-card to-black",
                        "border border-white/50",
                        "shadow-lg",
                        "flex flex-col",
                        "transition-all duration-700",
                        "group-hover:shadow-xl",
                        !isFlipped ? "opacity-0" : "opacity-100"
                    )}
                >
                    {image && (
                        <div>
                            <Image
                                src={image}
                                alt={title || "Card image"}
                                fill
                                unoptimized
                                className={`opacity-8 object-cover rounded-2xl`}
                            />
                        </div>
                    )}

                    <div className="flex-1 space-y-6 relative z-10">
                        <div className="space-y-2">
                            <h3 className="text-lg font-semibold text-white leading-snug tracking-tight transition-all duration-500 ease-out-expo group-hover:translate-y-[-2px]">
                                {title}
                            </h3>
                            <p className="text-sm text-zinc-400 tracking-tight transition-all duration-500 ease-out-expo group-hover:translate-y-[-2px] line-clamp-2">
                                {description}
                            </p>
                        </div>

                        <div className="space-y-2">
                            {features.map((feature, index) => (
                                <div
                                    key={feature}
                                    className="flex items-start gap-2 text-sm text-zinc-300 transition-all duration-500"
                                    style={{
                                        transform: isFlipped ? "translateX(0)" : "translateX(-10px)",
                                        opacity: isFlipped ? 1 : 0,
                                        transitionDelay: `${index * 100 + 200}ms`,
                                    }}
                                >
                                    <ArrowRight className="w-3 h-3 my-auto text-white flex-shrink-0" />
                                    <span className="flex-1">{feature}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                @keyframes scale {
                    0% {
                        transform: scale(2);
                        opacity: 0;
                        box-shadow: 0px 0px 50px rgba(255, 165, 0, 0.5);
                    }
                    50% {
                        transform: translate(0px, -5px) scale(1);
                        opacity: 1;
                        box-shadow: 0px 8px 20px rgba(255, 165, 0, 0.5);
                    }
                    100% {
                        transform: translate(0px, 5px) scale(0.1);
                        opacity: 0;
                        box-shadow: 0px 10px 20px rgba(255, 165, 0, 0);
                    }
                }
            `}</style>
        </div>
    );
}
