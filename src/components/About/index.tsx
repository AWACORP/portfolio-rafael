"use client";

import Image from "next/image";
import { Button } from "../ui/button";
import "./about.scss";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion"

export function AboutSection() {
    return (
        <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-8">
                <motion.div
                    initial={{ opacity: 0, y: 120 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, ease: "easeOut", delay: 0.1 }}
                    viewport={{ once: true }}
                    className="flex flex-col justify-center text-center md:text-start">
                    <h1 className="text-6xl font-bold mb-4 mt-6 md:mt-0">À propos</h1>
                    <p className="text-sm md:text-base palanquin">
                        Développeur fraichement diplomé avec plus de trois ans d&apos;expérience en administration de
                        bases de données et en conception de sites web. Créatif, autonome et enthousiaste.
                        <br />A également réalisé de nombreux projets impliquant le moteur de jeu Unity.
                    </p>
                    <div className="flex max-lg:justify-start max-md:justify-center max-sm:justify-center gap-4 my-5">
                        <Button size={"lg"} asChild>
                            <Link href="/about" prefetch> En savoir plus</Link></Button>
                    </div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 120 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, ease: "easeOut", delay: 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center justify-center flex-col">
                    <Image src="/profile-illustration.png" alt="Profile Picture" width={330} height={385} className="illustration-img z-0 max-w-[200px] md:max-w-[250px]" priority />
                    <h1 className="mt-2 font-bold text-5xl z-[2]">Soft Skills</h1>
                    <div className="flex items-center justify-center flex-col gap-5 my-5">
                        <div className="flex items-center justify-center gap-8">
                            <div className="logo-tech">
                                <Image src="/logos/nodejs.png" alt="NodeJS Logo" width={100} height={25} className="w-[50px] h-auto" priority />
                            </div>
                            <div className="logo-tech">
                                <Image src="/logos/git.png" alt="Git Logo" width={70} height={25} className="w-[50px] h-auto" priority />
                            </div>
                            <div className="logo-tech">
                                <Image src="/logos/nextjs.png" alt="Next js Logo" width={100} height={25} className="w-[50px] h-auto" priority />
                            </div>
                        </div>
                        <div className="flex items-center justify-center gap-8">

                            <div className="logo-tech">
                                <Image src="/logos/react.png" alt="React Logo" width={100} height={25} className="w-auto h-[55px]" priority />
                            </div>
                            <div className="logo-tech">
                                <Image src="/logos/figma.png" alt="Figma Logo" width={100} height={86} className="w-auto h-[55px]" priority />
                            </div>
                            <div className="logo-tech">
                                <Image src="/logos/sass.png" alt="Sass Logo" width={100} height={25} className="w-auto h-[55px]" priority />
                            </div>
                            <div className="logo-tech">
                                <Image src="/logos/unity.png" alt="Laravel Logo" width={100} height={86} className="w-auto h-[55px]" priority />
                            </div>
                        </div>
                    </div>
                    <Link href="/about#competences" className="mt-5 direct-link" prefetch> Voir toute mes compétences <FontAwesomeIcon icon={faArrowRight} /></Link>
                </motion.div>

            </div>
        </div >
    );
}
