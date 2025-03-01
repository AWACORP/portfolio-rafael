"use client";

import { Card, CardDescription, CardHeader, CardTitle } from "@/src/components/ui/card";
import Image from "next/image";
import { motion } from "framer-motion"

const skillsData = {
    frontend: [
        { name: "HTML", logo: "/file.svg" },
        { name: "CSS", logo: "/file.svg" },
        { name: "SASS/SCSS", logo: "/file.svg" },
        { name: "Bootstrap", logo: "/file.svg" },
        { name: "Tailwind", logo: "/file.svg" },
    ],
    backend: [
        { name: "Node.js", logo: "/file.svg" },
        { name: "PHP", logo: "/file.svg" },
    ],
    gameDev: [
        { name: "Unity", logo: "/file.svg" },
        { name: "Unreal Engine", logo: "/file.svg" },
    ],
    languages: [
        { name: "Python", logo: "/file.svg" },
        { name: "JavaScript", logo: "/file.svg" },
        { name: "C#", logo: "/file.svg" },
        { name: "C++", logo: "/file.svg" },
        { name: "PHP", logo: "/file.svg" },
    ],
    design: [
        { name: "Figma", logo: "/file.svg" },
        { name: "Photoshop", logo: "/file.svg" },
        { name: "Illustrator", logo: "/file.svg" },
    ],
    projectManagement: [{ name: "Git", logo: "/file.svg" }],
    frameworks: [
        { name: "Angular", logo: "/file.svg" },
        { name: "React", logo: "/file.svg" },
        { name: "Next.js", logo: "/file.svg" },
        { name: "React Native", logo: "/file.svg" },
        { name: "Laravel", logo: "/file.svg" },
        { name: "Drupal", logo: "/file.svg" },
        { name: "jQuery", logo: "/file.svg" },
    ],
    database: [{ name: "SQL", logo: "/file.svg" }],
    modeling: [{ name: "Blender", logo: "/file.svg" }],
};

export default function About() {
    return (
        <>
            <section className="section">
                <div className="container mx-auto px-4 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, ease: "easeOut", delay: 0.1 }}
                        viewport={{ once: true }}
                        className="text-6xl font-bold">Mon parcours
                    </motion.h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, ease: "easeOut", delay: 0.2 }}
                            viewport={{ once: true }}
                            className="flex justify-center items-center flex-col">
                            <h2 className="text-xl font-bold mb-4">Formation</h2>
                            <div className="flex justify-center align-center flex-col gap-5">
                                <Card>
                                    <CardHeader>
                                        <CardTitle>Expert en Ingénierie du Développement et en Artchitecture Logicielle (Bac+5)</CardTitle>
                                        <CardDescription className="text-xs">ESGI | septembre 2021 - juillet 2023</CardDescription>
                                    </CardHeader>
                                </Card>
                                <Card>
                                    <CardHeader>
                                        <CardTitle>Chargés de projets en systèmes informatiques (Bac+3)</CardTitle>
                                        <CardDescription className="text-xs">ESGI | septembre 2020 - juillet 2021</CardDescription>
                                    </CardHeader>
                                </Card>
                                <Card>
                                    <CardHeader>
                                        <CardTitle>BTS SNEC (Bac+2)</CardTitle>
                                        <CardDescription className="text-xs">Lycée Dorian | septembre 2018 - juillet 2020</CardDescription>
                                    </CardHeader>
                                </Card>
                                <Card>
                                    <CardHeader>
                                        <CardTitle>Baccalauréat STI2D</CardTitle>
                                        <CardDescription className="text-xs">Lycée Dorian | septembre 2016 - juillet 2018</CardDescription>
                                    </CardHeader>
                                </Card>
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, ease: "easeOut", delay: 0.2 }}
                            viewport={{ once: true }}>

                            <h2 className="text-xl font-bold mb-4">Professionnel</h2>
                            <div className="my-3 flex justify-start align-center gap-3 flex flex-col">
                                <Card>
                                    <CardHeader>
                                        <CardTitle>Développeur Indépendant Web</CardTitle>
                                        <CardDescription className="text-xs">septembre 2024 - aujourd&apos;hui</CardDescription>
                                    </CardHeader>
                                </Card>
                                <Card>
                                    <CardHeader>
                                        <CardTitle>Apprenant Développeur Web</CardTitle>
                                        <CardDescription className="text-xs">DGAC | aout 2020 - septembre 2023</CardDescription>
                                    </CardHeader>
                                </Card>
                                <Card>
                                    <CardHeader>
                                        <CardTitle>Apprenant Développeur d&apos;Application</CardTitle>
                                        <CardDescription className="text-xs">Un Air De Clope | mai - juillet 2019</CardDescription>
                                    </CardHeader>
                                </Card>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
            <section className="section py-12">
                <div className="container mx-auto px-4 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, ease: "easeOut", delay: 0.1 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-6xl font-bold mb-8">Mes compétences</motion.h1>
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, ease: "easeOut", delay: 0.2 }}
                        viewport={{ once: true }}
                        className="flex flex-wrap justify-center gap-6">
                        {Object.entries(skillsData).map(([category, skills]) => (
                            <div
                                key={category}
                                className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6"
                            >
                                <h2 className="text-xl font-semibold mb-4 capitalize">
                                    {category.replace(/([A-Z])/g, " $1").trim()}
                                </h2>
                                <div className="flex flex-wrap justify-center gap-4">
                                    {skills.map((skill) => (
                                        <div
                                            key={skill.name}
                                            className="flex flex-col items-center gap-2"
                                        >
                                            <Image
                                                src={skill.logo}
                                                alt={skill.name}
                                                width={40}
                                                height={40}
                                                className="w-10 h-10"
                                            />
                                            <p className="text-xs whitespace-nowrap">{skill.name}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </section>
        </>
    );
}