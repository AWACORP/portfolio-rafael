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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <motion.div
                    initial={{ opacity: 0, y: 120 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, ease: "easeOut", delay: 0.1 }}
                    viewport={{ once: true }}
                    className="flex flex-col justify-center text-center md:text-start">
                    <h1 className="text-6xl font-bold mb-4">À propos</h1>
                    <p className="text-sm md:text-base palanquin">
                        Développeur web freelance, diplômé Bac+5, j’ai exploré de nombreux domaines du numérique, allant du web au jeu vidéo.
                        Passionné par la création sous toutes ses formes, j’utilise mes compétences en Next.js, Angular, Laravel et bien d’autres technologies pour donner vie à des projets innovants.
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
                    <Image src="/profile-illustration.png" alt="Profile Picture" width={330} height={385} className="illustration-img z-0" priority />
                    <h1 className="mt-2 font-bold text-5xl z-[2]">Soft Skills</h1>
                    <div className="flex items-center justify-center flex-col gap-5 my-5">
                        <div className="flex items-center justify-center gap-8">
                            <div className="logo-tech">
                                <Image src="/logos/nodejs.png" alt="NodeJS Logo" width={100} height={25} className="w-[80px] h-auto" priority />
                            </div>
                            <div className="logo-tech">
                                <Image src="/logos/git.png" alt="Git Logo" width={70} height={25} className="w-[50px] h-auto" priority />
                            </div>
                            <div className="logo-tech">
                                <Image src="/logos/unity.png" alt="Unity Logo" width={100} height={25} className="w-[80px] h-auto" priority />
                            </div>
                        </div>
                        <div className="flex items-center justify-center gap-8">

                            <div className="logo-tech">
                                <div className="w-[86px] h-[55px] relative">
                                    <Image src="/logos/angular.png" alt="Angular Logo" width={100} height={25} className="w-auto h-[45px] absolute bottom-[3px] right-[8px] z-[2]" priority />
                                    <Image src="/logos/react.png" alt="React Logo" width={100} height={25} className="w-auto h-[45px] absolute top-[3px] left-[3px] z-[0]" priority />
                                </div>
                            </div>
                            <div className="logo-tech">
                                <Image src="/logos/figma.png" alt="Figma Logo" width={100} height={86} className="w-auto h-[55px]" priority />
                            </div>
                            <div className="logo-tech">
                                <Image src="/logos/laravel.png" alt="Laravel Logo" width={100} height={86} className="w-auto h-[55px]" priority />
                            </div>
                            <div className="logo-tech">
                                <Image src="/logos/sass.png" alt="Sass Logo" width={100} height={25} className="w-auto h-[55px]" priority />
                            </div>
                        </div>
                    </div>
                    <Link href="/about#competences" className="mt-5 direct-link" prefetch> Voir toute mes compétences <FontAwesomeIcon icon={faArrowRight} /></Link>
                </motion.div>

            </div>
        </div >
    );
}
