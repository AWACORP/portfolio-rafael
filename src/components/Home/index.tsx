"use client";

import Image from "next/image";
import { Button } from "../ui/button";
import "./home.scss";
import Link from "next/link";
import { motion } from "framer-motion"

export function HomeSection() {
  return (
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, ease: "easeOut", delay: 0.1 }}
          viewport={{ once: true }}
          className="flex md:hidden items-center justify-center mt-2">
          <div className="picture-div h-[300px]">
            <Image src="/profile.png" alt="Profile Picture" width={499} height={500} className="profile-picture" priority />
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, ease: "easeOut", delay: 0.1 }}
          viewport={{ once: true }}
          className="flex flex-col justify-center text-center md:text-start">
          <h1 className="text-xl font-light my-4 nunito-sans">
            NUNES Joao-Rafael
          </h1>
          <h1 className="text-6xl font-bold mb-4">Full Stack <br />Developer</h1>
          <p className="text-base palanquin">
            Passionné par la création sous toutes ses formes, j’utilise<br/>
            mes compétences en Next.js, React, Node.js et bien d’autres<br/>
            technologies pour donner vie à des projets innovants.
            <br/>
            <span className="font-black">Ouvert à tout type de projet. 🚀</span>
          </p>
          <div className="flex max-lg:justify-start max-md:justify-center max-sm:justify-center gap-4 my-5">
            <Button size={"lg"} asChild><Link href="/download/cv.pdf" target="_blank" prefetch>Mon CV</Link></Button>
            <Button size={"lg"} variant={"outline"} className="outline-btn" asChild>
              <Link href="#contact">Me Contacter</Link></Button>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, ease: "easeOut", delay: 0.1 }}
          viewport={{ once: true }}
          className="hidden md:flex items-center justify-center">
          <div className="picture-div h-[328px] md:h-[400px]">
            <Image src="/profile.png" alt="Profile Picture" width={499} height={500} className="profile-picture" priority />
          </div>
        </motion.div>
      </div>
    </div >
  );
}
