"use client";

import { useState } from "react";

import Image from "next/image";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";
import { Button } from "../ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/carousel";
import { Badge } from "../ui/badge";
import { CheckCircle } from "lucide-react";
import { Card, CardFooter, CardHeader } from "../ui/card";
import { motion } from "framer-motion"

const technologyColor: Record<string, string> = {
  React: "bg-blue-500 hover:bg-blue-600 text-white", // Exemple : bleu pour React
  "Next.js": "bg-zinc-600 hover:bg-zinc-700 text-white", // Noir pour Next.js
  Tailwind: "bg-teal-600 hover:bg-teal-700 text-white", // Turquoise pour Tailwind
  JavaScript: "bg-yellow-500 hover:bg-yellow-600 text-black", // Jaune pour JavaScript
  TypeScript: "bg-blue-600 hover:bg-blue-700 text-white", // Bleu foncé pour TypeScript
  Python: "bg-yellow-600 hover:bg-yellow-700 text-white", // Jaune foncé pour Python
  CSharp: "bg-purple-600 hover:bg-purple-700 text-white", // Violet pour C#
  CPlusPlus: "bg-blue-800 hover:bg-blue-900 text-white", // Bleu nuit pour C++
  PHP: "bg-indigo-500 hover:bg-indigo-600 text-white", // Indigo pour PHP
};

const projects = [
  {
    id: 1,
    name: "Projet 1",
    category: "web",
    company: "Entreprise X",
    image: "/test.png",
    description: "Description du projet 1...",
    technologies: ["React", "Next.js", "Tailwind"],
    features: ["Feature 1", "Feature 2", "Feature 3"],
    github: "https://github.com/user/project1",
    live: "https://project1.com",
    privateRepo: false,
    date: "2023-10-01"
  },
  {
    id: 2,
    name: "Projet 2",
    category: "app",
    company: "Entreprise X",
    image: "/test2.png",
    description: "Description du projet 1...",
    technologies: ["React", "Next.js", "Tailwind"],
    features: ["Feature 1", "Feature 2", "Feature 3"],
    github: "https://github.com/user/project1",
    live: "https://project1.com",
    privateRepo: false,
    date: "2023-10-01"
  },
  {
    id: 3,
    name: "Projet 3",
    category: "game",
    company: "Entreprise X",
    image: "/profile.png",
    description: "Description du projet 1...",
    technologies: ["Tailwind"],
    features: ["Feature 1", "Feature 2", "Feature 3"],
    github: "https://github.com/user/project1",
    live: "https://project1.com",
    privateRepo: false,
    date: "2023-10-01"
  },
  {
    id: 4,
    name: "Projet 4",
    category: "game",
    company: "Entreprise X",
    image: "/profile.png",
    description: "Description du projet 1...",
    technologies: ["React", "Next.js", "Tailwind"],
    features: ["Feature 1", "Feature 2", "Feature 3"],
    github: "https://github.com/user/project1",
    live: "https://project1.com",
    privateRepo: false,
    date: "2023-10-01"
  },
  {
    id: 5,
    name: "Projet 5",
    company: "Entreprise X",
    category: "web",
    image: "/profile.png",
    description: "Description du projet 1...",
    technologies: ["React", "Next.js", "Tailwind"],
    features: ["Feature 1", "Feature 2", "Feature 3"],
    github: "https://github.com/user/project1",
    live: "https://project1.com",
    privateRepo: false,
    date: "2023-10-01"
  }
];

export function ProjectList() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = [
    { id: "all", name: "Tous" },
    { id: "web", name: "Web" },
    { id: "game", name: "Jeu Vidéo" },
  ];

  const filteredProjects = projects.filter((project) => {
    const categoryMatch = selectedCategory === "all" || project.category === selectedCategory;
    return categoryMatch;
  })
    .sort((a, b) => {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    });

  return (
    <motion.div initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: "easeOut", delay: 0.2 }}
      viewport={{ once: true }}
      className="p-6 flex justify-center flex-col items-center">
      <div className="flex gap-4 mb-4">
        {categories.map((cat) => (
          <Button
            key={cat.id}
            variant={selectedCategory === cat.id ? "default" : "outline"}
            onClick={() => setSelectedCategory(cat.id)}
            className="cursor-pointer"
          >
            {cat.name}
          </Button>
        ))}
      </div>
      <Carousel className="w-full my-5">
        <CarouselContent className="-ml-1">
          {filteredProjects.map((project) => (
            <CarouselItem
              className="pl-1 md:basis-1/2 lg:basis-1/3 cursor-pointer hover:scale-95 transition"
              onClick={() => setSelectedProject(project)} key={project.id}
            >
              <Card style={{ backgroundColor: "#5653A8" }}>
                <CardHeader>
                  <Image
                    src={project.image}
                    alt={project.name}
                    width={1920}
                    height={1080}
                    className="w-full h-60 object-cover rounded-lg"
                    priority
                  />
                  <h3 className="mt-2 text-lg font-bold" style={{ color: "#f9f9f9" }}>{project.name}</h3>
                  <p className="text-sm text-gray-500" style={{ color: "#f9f9f9" }}>{project.company}</p>
                </CardHeader>
                <CardFooter className="gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} className={`${technologyColor[tech] || "bg-gray-500 text-white"}`} >{tech}</Badge>
                  ))}
                </CardFooter>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>

      {selectedProject && (
        <Dialog open={true} onOpenChange={() => setSelectedProject(null)}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>{selectedProject.name}</DialogTitle>
            </DialogHeader>
            <Image
              src={selectedProject.image}
              alt={selectedProject.name}
              width={1920}
              height={1080}
              className="w-full h-48 object-cover rounded-lg" priority
            />
            <p className="mt-2 text-sm">{selectedProject.description}</p>
            <div className="mt-2 flex gap-2 flex-wrap">
              {selectedProject.technologies.map((tech) => (
                <Badge key={tech} className={`${technologyColor[tech] || "bg-gray-500 text-white"}`} >{tech}</Badge>
              ))}
            </div>
            <ul className="mt-4 space-y-1  text-sm">
              {selectedProject.features.map((feature, index) => (
                <li key={index} className="flex items-center gap-2">
                  <CheckCircle className="text-green-500" size={16} /> {feature}
                </li>
              ))}
            </ul>
            <div className="mt-4 flex gap-4">
              <Button asChild>
                <a href={selectedProject.github} target="_blank">
                  {selectedProject.privateRepo
                    ? "Git Privé"
                    : "Voir sur GitHub"}
                </a>
              </Button>
              {selectedProject.live && (
                <Button asChild>
                  <a href={selectedProject.live} target="_blank">
                    Voir le projet
                  </a>
                </Button>
              )}
            </div>
          </DialogContent>
        </Dialog>
      )}
    </motion.div>
  );
}

interface Project {
  id: number;
  name: string;
  category: string;
  company: string;
  image: string;
  description: string;
  technologies: string[];
  features: string[];
  github: string;
  live: string;
  privateRepo: boolean;
  date: string;
}