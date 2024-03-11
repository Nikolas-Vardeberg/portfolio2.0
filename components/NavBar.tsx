"use client"

import * as React from "react"

import Link from "next/link";

import { cn } from "@/lib/utils";

import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
    navigationMenuTriggerStyle,
  } from "@/components/ui/navigation-menu"

  
  

import { ModeToggle } from "./ModeToggle";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { AlignJustify, ArrowDown } from "lucide-react";
import { AvatarIcon } from "@radix-ui/react-icons";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTrigger } from "./ui/sheet";

const components: { title: string; href: string; description: string }[] = [
    {
      title: "Prosjekter",
      href: "/prosjekter",
      description:
        "Utforsk mine prosjekter og oppdag mitt arbeid.",
    },
    {
      title: "Om Meg",
      href: "/om-meg",
      description:
        "Lær mer om meg som en kreativ person - min bakgrunn, mine verdier og hva som driver meg i arbeidet mitt.",
    },
    {
      title: "Ta Kontakt",
      href: "/kontakt",
      description:
        "Har du spørsmål eller vil diskutere et potensielt prosjekt? Ikke nøl med å ta kontakt med meg direkte.",
    },
    {
      title: "Github Profil",
      href: "https://github.com/Nikolas-Vardeberg",
      description: "Utforsk min GitHub-profil for å se mine open-source-prosjekter, bidrag til ulike prosjekter, og dykk dypere inn i min kodebase og tekniske ferdigheter.",
    },
  ]

export default function NavBar() {
    return(
        <MaxWidthWrapper>
        <nav className="w-full relative flex items-center justify-between mx-auto px-12 py-5">
            <Link href="/" className="font-bold text-xl">
                Nikolas
            </Link>

            <div>
            <NavigationMenu>
                <NavigationMenuList className="hidden md:flex md:space-x-4">
                  <NavigationMenuItem>
                    <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                        <li className="row-span-3">
                          <NavigationMenuLink asChild>
                            <a
                              className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                              href="/"
                            >
                              <AvatarIcon className="h-6 w-6" />
                              <div className="mb-2 mt-4 text-lg font-medium">
                                Nikolas Vardeberg
                              </div>
                              <p className="text-sm leading-tight text-muted-foreground">
                                Nikolas Vardeberg.
                              </p>
                            </a>
                          </NavigationMenuLink>
                        </li>
                        <ListItem href="/prosjekter" title="Prosjekter">
                        Utforsk mine prosjekter og oppdag mitt arbeid.
                        </ListItem>
                        <ListItem href="/kontakt" title="Ta Kontakt">
                        Har du spørsmål eller vil diskutere et potensielt prosjekt?
                        </ListItem>
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger>Om Meg</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                        {components.map((component) => (
                          <ListItem
                            key={component.title}
                            title={component.title}
                            href={component.href}
                          >
                            {component.description}
                          </ListItem>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <Link href="/docs" legacyBehavior passHref>
                      <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                        Ta Kontakt
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </div>

            <div className="md:hidden">
            <Sheet>
                <SheetTrigger>
                    <AlignJustify />
                </SheetTrigger>
                <SheetContent>
                    <SheetHeader>
                        <SheetDescription>
                            <div className="flex flex-col space-y-6 items-start w-full text-lg mt-10 text-primary">
                                <Link
                                href="/"
                                >
                                    Prosjekter
                                </Link>
                                <Link
                                href="/"
                                >
                                   Ta Kontakt
                                </Link>
                                <Link
                                href="/"
                                >
                                    Om Meg
                                </Link>
                                <Link
                                href="/"
                                >
                                    Github Profil
                                </Link>
                                <ModeToggle/>
                            </div>
                        </SheetDescription>
                    </SheetHeader>
                </SheetContent>
            </Sheet>
            </div>

            <div className="max-md:hidden">
              <ModeToggle/>
            </div>
            
        </nav>
        </MaxWidthWrapper>
    )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"