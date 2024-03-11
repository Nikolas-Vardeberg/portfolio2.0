import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Button, buttonVariants } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
    <div>
    <div className="mb-12 mt-28 sm:mt-40 flex flex-col items-center justify-center text-center">
      <Image 
        src="/Avatar.png"
        height={200}
        width={200}
        alt="Title Image"
      />
      <h1 className="max-w-4xl text-5xl font-bold md:text-6xl lg:text-7xl">
        Work with a coder who gets your programming challenges.
      </h1>

      <p className="mt-5 max-w-prose text-zinc-700 sm:text-lg mx-9">As a student named Nikolas, I'm passionate about programming, especially in Next.js and React. Based in Brumunddal, I specialize in graphic design and Webflow development, working with startups and corporations on web design, branding, and presentations.</p>

      <Link className={buttonVariants({ size: "lg", className: "mt-7"})}
        href="/admin" target="_blank"
      >
        Get started <ArrowRight className="ml-2 h-5 w-5" />
      </Link>
    </div>

    </div>

    </>
  );
}
