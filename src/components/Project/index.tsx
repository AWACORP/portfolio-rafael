"use client";

import { ProjectList } from "../ProjectList";
import { motion } from "framer-motion"

export function ProjectSection() {
    return (
        <div className="container mx-auto px-4">
            <div>
                <div className="flex flex-col justify-center text-center md:text-start">
                    <motion.h1 initial={{ opacity: 0, y: 80 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, ease: "easeOut", delay: 0.1 }}
                        viewport={{ once: true }} className="text-5xl lg:text-6xl font-bold mb-4">Mes dernières <br/>réalisations</motion.h1>
                    <ProjectList />
                </div>
            </div>
        </div>
    );
}
