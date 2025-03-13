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
  "React": "bg-blue-400 text-white", 
  "Next.js": "bg-zinc-900 text-white", 
  "Node.js": "bg-green-800 text-white",
  "Tailwind": "bg-blue-600 text-white", 
  "ShadCN/UI": "bg-zinc-800 text-white",
  "Bootstrap": "bg-purple-800 text-white",
  "SASS": "bg-pink-400 text-white",
  "Laravel": "bg-red-800 text-white",
  "Azuriom": "bg-blue-800 text-white",
  "SQL": "bg-orange-700 text-white",
  "Javascript": "bg-yellow-500 text-white", 
  "Discord.js": "bg-purple-700 text-white",
  "Unity": "bg-zinc-700 text-white",
  "Drupal": "bg-blue-800 text-white",
  "Blender": "bg-yellow-800 text-white",
  "Photon PUN 2": "bg-blue-900 text-white",
  "Matchmaking": "bg-orange-800 text-white",
  "Vuforia": "bg-green-800 text-white",
  "TypeScript": "bg-blue-600 hover:bg-blue-700 text-white", 
  "C#": "bg-purple-600 hover:bg-purple-700 text-white", 
  "PHP": "bg-indigo-500 text-white",
};

const projects = [
  {
    id: 1,
    name: "Scar",
    category: "game",
    company: "Projet d'école Bac+3",
    image: "/project/scar.png",
    description: "Scar est un jeu vidéo de type Rogue Lite sur PC. L’histoire raconte celle d’ Izaak , un jeune homme de 23 ans à la quête de vengeance après que son village ait été ravagé par des héros incompétents. Le but sera de terminer les différents donjon du village en battant chaque boss. Le jeu est basé sur un système de cartes qui se découpent en 3 familles:  l’équipement, les consommables, et les passifs. Le jeu se passe principalement dans des donjons, face à des ennemis de type monstres. ",
    technologies: ["Unity", "C#", "Blender"],
    features: ["Gestion de foules.", "Editeur de Map in-game.", "Système de publicités in-game."],
    github: "https://github.com/Talyj/Scar_v2",
    privateRepo: true,
    date: "2021-07-25"
  },
  {
    id: 2,
    name: "Yu-Gi-Eh Réalité Augmenté",
    company: "Projet d'école Bac+4",
    category: "game",
    image: "/project/yugieh.png",
    description: "Yu-Gi-Eh est un jeu de carte en ligne inspiré de Yu-Gi-Oh en réalité augmenté. L'objectif est de réduire à 0 les points de l'adversaire en utilisant différents types de cartes.",
    technologies: ["Unity", "C#", "Photon PUN 2", "Vuforia"],
    features: ["Utilisation de Vuforia.", "Jeu en Réseau à l'aide de Photon PUN 2."],
    github: "https://github.com/Talyj/Yu-gi-eh",
    date: "2023-01-01"
  },
  {
    id: 3,
    name: "For The Universe",
    company: "Projet d'école Bac+5",
    category: "game",
    image: "/project/FTU.png",
    description: "For The Universe est un jeu vidéo en ligne de type MOBA sur PC. Deux équipes de 5 joueurs se battent pour détruire le camp adverse et remporter la partie.",
    technologies: ["Unity", "C#", "Blender", "Photon PUN 2", "Matchmaking"],
    features: ["Création d'un système de matchmaking.", "Mise en place d'une IA cerveau et IA moteur.", "Jeu en Réseau à l'aide de Photon PUN 2."],
    github: "https://github.com/Talyj/ForTheUniverse",
    video: "https://www.youtube.com/watch?v=GCSPugvsZKk",
    date: "2023-05-04"
  },
  {
    id: 4,
    name: "Scelivis",
    company: "Direction Générale de l'Aviation Civile",
    category: "web",
    image: "/project/scelivis.png",
    description: "Rework d'un site interne from scratch, puis à l'aide de Drupal.",
    technologies: ["PHP", "SQL", "SASS", "Bootstrap", "Drupal"],
    features: ["Utilisation du CMS/Framework Drupal."],
    privateRepo: true,
    date: "2023-05-05"
  },
  {
    id: 5,
    name: "ML-ZYROS",
    company: "Direction Générale de l'Aviation Civile",
    category: "web",
    image: "/project/ML.jpg",
    description: "Création d'un site et d'une application interne afin de faciliter l'échange de données entre les contrôleurs aériens.",
    technologies: ["PHP", "SQL", "Unity", "Three.js", "SASS", "Bootstrap"],
    features: ["Apprentissage du PHP Orienté Objet.", "Importation XLSX vers SQL.", "Création d'une application WEB à l'aide de Unity."],
    privateRepo: true,
    date: "2023-05-06"
  },
  {
    id: 6,
    name: "BOT Julien",
    company: "AWA Corp.",
    category: "app",
    image: "/project/julien.png",
    description: "Création d'un BOT Discord en Javascript afin de faciliter la gestion de projet.",
    technologies: ["Node.js", "Javascript", "Discord.js", "SQL"],
    features: ["Utilisation de la librairie Discord.js.", "Lecture/Ecriture de donnée en BDD via Discord."],
    privateRepo: true,
    date: "2025-01-01"
  },
  {
    id: 7,
    name: "AWA Corp.",
    company: "AWA Corp.",
    category: "web",
    image: "/project/awacorp.png",
    description: "Création d'un site web from scratch pour l'organisation AWA Corp.",
    technologies: ["Node.js", "Bootstrap", "Javascript", "SQL"],
    features: ["Mise en place d'un formulaire de contact à l'aide de Email.js."],
    privateRepo: true,
    date: "2025-01-02"
  },
  {
    id: 8,
    name: "Thème Azuriom",
    company: "La Citadelle",
    category: "web",
    image: "/project/lacitadelle-theme.png",
    description: "Création d'un thème sur le CMS Azuriom pour un serveur Minecraft.",
    technologies: ["Laravel", "Azuriom", "PHP"],
    features: ["Prise en main de Laravel.", "Utilisation du CMS Azuriom."],
    privateRepo: true,
    live: "https://lacitadelle-mc.fr/",
    date: "2025-01-03"
  },
  {
    id: 9,
    name: "Plugins Azuriom",
    company: "La Citadelle",
    category: "web",
    image: "/project/bmap.png",
    description: "Création de plugins sur le CMS Azuriom pour un serveur Minecraft.",
    technologies: ["Laravel", "Azuriom", "PHP", "SQL"],
    features: ["Plugin d'intégration d'une map 3D dynamique du serveur en direct. (Bmap)", "Plugin d'intégration des votes du serveur sur le site web. (VotingPlugin)", "Plugin d'intégration de la liste des items d'un XLSX sur le site web. (Datamine)"],
    privateRepo: true,
    live: "https://lacitadelle-mc.fr/",
    date: "2025-01-04"
  },
  {
    id: 10,
    name: "Martinez Photograph",
    company: "Maquette",
    category: "web",
    image: "/project/martinez.png",
    description: "Création d'un site portfolio pour un photographe 'Martinez Photograph' à l'aide de React.",
    technologies: ["React", "Node.js", "Bootstrap", "SASS", "TypeScript"],
    features: ["Mise en place d'un formulaire de contact à l'aide de Email.js.", "Utilisation de motion pour les animations."],
    privateRepo: true,
    date: "2025-03-01"
  },
  {
    id: 11,
    name: "Nova Digital",
    company: "Maquette",
    category: "web",
    image: "/project/novadigital.png",
    description: "Création d'un site vitrine pour une agence marketing 'Nova Digital' à l'aide de React.",
    technologies: ["React", "Node.js", "Bootstrap", "SASS", "TypeScript"],
    features: ["Mise en place d'un formulaire de contact à l'aide de Email.js.", "Utilisation de motion pour les animations."],
    privateRepo: true,
    date: "2025-03-02"
  },
  {
    id: 12,
    name: "Mon Portfolio",
    company: "Site actuel",
    category: "web",
    image: "/project/portfolio.png",
    description: "Création de mon portfolio à l'aide de Next.js.",
    technologies: ["Next.js", "Node.js", "Tailwind", "ShadCN/UI", "TypeScript"],
    features: ["Mise en place d'un formulaire de contact à l'aide de Email.js.", "Utilisation de motion pour les animations."],
    privateRepo: true,
    date: "2025-03-12"
  }
];

export function ProjectList() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = [
    { id: "all", name: "Tous" },
    { id: "web", name: "Web" },
    { id: "app", name: "App" },
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
              <Button asChild >
                {selectedProject.privateRepo
                  ?
                  <p>
                    Git privé
                  </p>
                  :
                  <a href={selectedProject.github} target="_blank">
                    Voir sur GitHub
                  </a>
                }
              </Button>
              {selectedProject.live && (
                <Button asChild>
                  <a href={selectedProject.live} target="_blank">
                    Voir le projet
                  </a>
                </Button>
              )}
              {selectedProject.video && (
                <Button asChild>
                  <a href={selectedProject.video} target="_blank">
                    Vidéo du projet
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
  github?: string;
  video?: string;
  live?: string;
  privateRepo?: boolean;
  date: string;
}