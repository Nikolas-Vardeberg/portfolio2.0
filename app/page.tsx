import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Button, buttonVariants } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { simpleBlogCard } from "@/lib/interface";
import { client, urlFor } from "@/lib/sanity";
import { ArrowRight, Copyright } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

async function getData() {
  const query =`
  *[_type == "blog"] | order(_createdAt desc) {
    title,
      smallDescription,
      "currentSlug": slug.current,
      titleImage
  }`;

  const data = await client.fetch(query, {}, {
    cache: "no-cache"
  });


  return data;
}


export default async function Home () {

  const data: simpleBlogCard[] = await getData();

  return (
    <>
    <div>
      <div className="mb-12 mt-24 sm:mt-40 flex flex-col items-center justify-center text-center">
        <Image 
          src="/Avatar.png"
          height={200}
          width={200}
          alt="Title Image"
          draggable={false}
        />
        <h1 className="max-w-4xl text-5xl font-bold md:text-6xl lg:text-7xl">
          Work with a coder who gets your programming challenges.
        </h1>

        <p className="mt-5 max-w-prose text-zinc-700 sm:text-lg mx-9">As a student named Nikolas, I'm passionate about programming, especially in Next.js and React. Based in Brumunddal, I specialize in fullstack development, working with startups and corporations on web design, branding, and programming.</p>

        <Link className={buttonVariants({ size: "lg", className: "mt-7"})}
          href="/admin" target="_blank"
        >
          Les mer <ArrowRight className="ml-2 h-5 w-5" />
        </Link>
      </div>

      <div className='mx-auto mb-20 mt-20 max-w-5xl sm:mt-56'>
        <div className='mb-12 px-6 lg:px-8'>
          <div className='mx-auto max-w-2xl sm:text-center'>
            <h2 className='mt-2 text-4xl font-bold md:text-5xl lg:text-6xl'>
              My Skills & Projects
            </h2>
            <p className='mt-4 text-lg text-gray-500'>
            Welcome to my portfolio! Here, you'll find a showcase of my skills and latest projects.
            </p>
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-6 sm:px-8 md:px-12">
        <div className="my-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">

        {data.map((post, idx) => (
          <Card key={idx}>
            <Image
              src={urlFor(post.titleImage).url()}
              alt="image"
              width={500}
              height={500}
              className="rounded-t-lg h-[200px] object-cover"
            />

            <CardContent className="mt-5">
              <h3 className="text-lg line-clamp-2 font-bold">{post.title}</h3>
              <p className="line-clamp-3 text-sm mt-2 text-gray-600 dark:text-gray-300">
                {post.smallDescription}
              </p>
              <Button asChild className="w-full mt-7">
                <Link href={`/prosjekter/${post.currentSlug}`}>Read More</Link>
              </Button>
            </CardContent>
          </Card>
        ))}
        </div>
      </div>


      <div className='mx-auto mb-20 mt-20 max-w-5xl sm:mt-56'>
        <div className='mb-12 px-6 lg:px-8'>
          <div className='mx-auto max-w-2xl sm:text-center'>
            <h2 className='mt-2 text-4xl font-bold md:text-5xl lg:text-6xl'>
              Ta Kontakt
            </h2>
            <p className='mt-4 text-lg text-gray-500'>
            Har du spørsmål eller vil diskutere et potensielt prosjekt?
            </p>
          </div>
        </div>



        </div>
    

      </div>

      <div className="my-5 text-gray-400 flex items-center justify-center">
       <Copyright className="h-5 w-5 mr-2"/> Nikolas. Alle rettigheter forbeholdt
      </div>
    </div>
    </>
  );
}
