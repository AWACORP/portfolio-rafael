"use client";

import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { z } from "zod"
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod"
import Image from "next/image";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";
import { motion } from "framer-motion"

const formSchema = z.object({
    name: z.string().min(2, {
        message: "Ce champs doit contenir au moins deux caractères."
    }),
    email: z.string().email({ message: "Adresse mail invalide." }).min(5, {
        message: "Ce champs doit contenir au moins cinq caractères."
    }),
    message: z.string().min(5, {
        message: "Ce champs ne doit pas être vide."
    }),
})

export function ContactSection() {

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            message: ""
        },
    })

    function onSubmit(values: z.infer<typeof formSchema>) {
        const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "";
        const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "";
        const userID = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "";

        try {
            const emailParams = {
                name: values.name,
                email: values.email,
                message: values.message
            };

            emailjs.send(serviceID, templateID, emailParams, userID);


        } catch (error) {
            console.log(error);
        }
        toast("Message envoyé avec succès.");
    }

    return (
        <div className="container mx-auto px-4 mb-12 md:mb-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-8">
                <motion.div initial={{ opacity: 0, x: -120 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, ease: "easeOut", delay: 0.1 }}
                    viewport={{ once: true }}
                    className="flex flex-col justify-center items-center text-center">
                    <h1 className="text-5xl lg:text-6xl font-bold mb-4 mt-6 md:mt-0">Discutons de <br /> votre projet</h1>
                    <p className="text-sm md:text-lg palanquin">
                        Vous avez une idée ou un projet ? <br />
                        N’hésitez pas à me contacter pour en discuter.  <br />

                        <span className="font-black">Je serais ravi de collaborer avec vous !</span>
                    </p>
                    <div className="flex justify-center items-center flex-col my-5">
                        <h1 className="text-md md:text-3xl font-bold mb-4">Ils m&apos;ont fait confiance, pourquoi pas vous?</h1>
                        <div className="flex justify-center items-center gap-8" style={{ width: "100%" }}>
                            <Image src="/dgac.png" alt="" style={{ width: "auto", height: "35px" }} width={1920} height={1080} />
                            <Image src="/unairdeclope.png" alt="" style={{ width: "auto", height: "35px" }} width={1920} height={1080} />
                            <Image src="/lacitadelle.png" alt="" style={{ width: "auto", height: "35px" }} width={1920} height={1080} />
                        </div>
                    </div>
                </motion.div>
                <motion.div initial={{ opacity: 0, x: 120 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, ease: "easeOut", delay: 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center justify-center">
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5" style={{ width: "100%" }}>
                            <FormField

                                control={form.control}
                                name="name"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Nom</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Charles Bouvier" className="text-xs" {...field} />
                                        </FormControl>
                                        <FormMessage className="text-xs" />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Email</FormLabel>
                                        <FormControl>
                                            <Input placeholder="ch.bouvier@mail.com" className="text-xs" {...field} />
                                        </FormControl>
                                        <FormMessage className="text-xs"/>
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="message"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Message</FormLabel>
                                        <FormControl>
                                            <Textarea style={{ minHeight: "120px" }} placeholder="Je souhaiterais discuter d'un projet..." {...field} className="resize-none text-xs" {...field} />
                                        </FormControl>
                                        <FormMessage className="text-xs"/>
                                    </FormItem>
                                )}
                            />
                            <Button type="submit" className="cursor-pointer">Envoyer</Button>
                        </form>
                    </Form>

                </motion.div>
            </div>
        </div >
    );
}
