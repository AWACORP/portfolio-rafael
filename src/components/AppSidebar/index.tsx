"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faFolderOpen } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faDiscord, faFirstOrderAlt, faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/src/components/ui/sidebar";
import Link from "next/link";

const items = [
  {
    title: "Présentation",
    url: "/",
    icon: faHouse,
  },
  {
    title: "A Propos",
    url: "/#about",
    icon: faUser,
  },
  {
    title: "Projets",
    url: "/#projects",
    icon: faFolderOpen,
  },
  {
    title: "Contact",
    url: "/#contact",
    icon: faEnvelope,
  },
];

export function AppSidebar() {

  return (
    <Sidebar variant="floating" collapsible="icon" className="z-[20]">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Portfolio</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="group-data-[collapsible=icon]:items-center">
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild tooltip={item.title}>
                    <Link href={item.url}>
                      <FontAwesomeIcon
                        icon={item.icon}
                        className="fa-fw text-sm"
                      />
                      <span>{item.title}</span>
                      <SidebarMenuBadge>24</SidebarMenuBadge>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
              
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupContent>
              <SidebarMenu className="group-data-[collapsible=icon]:items-center">
                <SidebarMenuItem>
                  <SidebarMenuButton asChild tooltip={"Github"}>
                    <Link href="https://github.com/AWACORP/" target="blank_">
                      <FontAwesomeIcon
                        icon={faGithub}
                        className="fa-fw text-sm"
                      />
                      <span>Github</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild tooltip={"Linkedin"}>
                    <Link href="https://www.linkedin.com/in/rafael-nunes-2a32a91a9/" target="_blank">
                      <FontAwesomeIcon
                        icon={faLinkedin}
                        className="fa-fw text-sm"
                      />
                      <span>Linkedin</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild tooltip={"Malt"}>
                    <Link href="https://www.malt.fr/profile/rafaelnunes" target="_blank">
                      <FontAwesomeIcon
                        icon={faFirstOrderAlt}
                        className="fa-fw text-sm"
                      />
                      <span>Malt</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild tooltip={"Discord"}>
                    <Link href="https://discord.gg/2U3m6tCRmb" target="_blank">
                      <FontAwesomeIcon
                        icon={faDiscord}
                        className="fa-fw text-sm"
                      />
                      <span>Discord</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>

          </SidebarGroup>
        </SidebarContent>
      </SidebarFooter>
    </Sidebar>
  );
}
