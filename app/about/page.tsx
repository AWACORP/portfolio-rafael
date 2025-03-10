"use client";

import { Card, CardDescription, CardHeader, CardTitle } from "@/src/components/ui/card";
import Image from "next/image";
import { motion } from "framer-motion"

const skillsData = {
    frontend: [
        { name: "HTML", logo: "/logos/html.png" },
        { name: "CSS", logo: "/logos/css.png" },
        { name: "SASS/SCSS", logo: "/logos/sass.png" },
        { name: "Bootstrap", logo: "/logos/bootstrap.png" },
        { name: "Tailwind", logo: "/logos/tailwind.png" },
    ],
    backend: [
        { name: "Node.js", logo: "/logos/nodejs.png" },
        { name: "PHP", logo: "/logos/php.png" },
    ],
    gameDev: [
        { name: "Unity", logo: "/logos/unity.png" },
        { name: "Unreal Engine", logo: "/logos/unreal.png" },
    ],
    languages: [
        { name: "Python", logo: "/logos/python.png" },
        { name: "JavaScript", logo: "/logos/javascript.png" },
        { name: "C#", logo: "/logos/csharp.png" },
        { name: "C++", logo: "/logos/cplusplus.png" },
        { name: "PHP", logo: "/logos/php.png" },
    ],
    design: [
        { name: "Figma", logo: "/logos/figma.png" },
        { name: "Photoshop", logo: "/logos/photoshop.png" },
        { name: "Illustrator", logo: "/logos/illustrator.png" },
    ],
    projectManagement: [{ name: "Git", logo: "/logos/git.png" }],
    frameworks: [
        { name: "Angular", logo: "/logos/angular.png" },
        { name: "React /& Native", logo: "/logos/react.png" },
        { name: "Next.js", logo: "/logos/nextjs.png" },
        { name: "Laravel", logo: "/logos/laravel.png" },
        { name: "Drupal", logo: "/logos/drupal.png" },
        { name: "jQuery", logo: "/logos/jquery.png" },
    ],
    database: [{ name: "SQL", logo: "/logos/sql.png" }],
    modeling: [{ name: "Blender", logo: "/logos/blender.png" }],
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
                        className="text-5xl font-bold my-5">Mon parcours
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
            <section className="section py-12" id="competences">
                <div className="container mx-auto px-4 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, ease: "easeOut", delay: 0.1 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold mb-8 my-5">Mes compétences</motion.h1>
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, ease: "easeOut", delay: 0.2 }}
                        viewport={{ once: true }}
                        className="flex flex-wrap justify-center gap-6">
                        {Object.entries(skillsData).map(([category, skills]) => (
                            <div
                                key={category}
                                className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6"
                            >
                                <h2 className="text-xl palanquin font-bold font-semibold mb-4 capitalize">
                                    {category.replace(/([A-Z])/g, " $1").trim()}
                                </h2>
                                <div className="flex flex-wrap justify-center gap-5">
                                    {skills.map((skill) => (
                                        <div
                                            key={skill.name}
                                            className="flex flex-col items-center gap-2"
                                        >
                                            <Image
                                                src={skill.logo}
                                                alt={skill.name}
                                                width={500}
                                                height={500}
                                                className="w-auto h-10"
                                            />
                                            <p className="text-xs italic whitespace-nowrap">{skill.name}</p>
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