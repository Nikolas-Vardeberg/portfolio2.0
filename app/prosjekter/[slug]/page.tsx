import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { fullBlog } from "../../../lib/interface";
import { client, urlFor } from "../../../lib/sanity";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge"
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { url } from "inspector";

async function getData(slug: string) {
    const query =`
    *[_type == "blog" && slug.current == '${slug}'] {
        "currentSlug": slug.current,
            title,
            content,
            titleImage,
            "tags": tags[]->name,
            githubrepo,
            "gallery": gallery[]{
              "url": asset->url
          }
    }[0]`;

    const data = await client.fetch(query);
    return data
}


export default async function BlogArticle({
    params,
}: {
    params: { slug: string };
}) {
    const data: fullBlog = await getData(params.slug);

    const tags = Array.isArray(data.tags) ? data.tags : [];

    const gallery = Array.isArray(data.gallery) ? data.gallery : [];
    const urls = gallery.map(item => item.url);


    console.log(urls)

    console.log(tags)

    return (
        <main className="max-w-2xl mx-auto px-4">

        <div className="my-8">
            
        <h1>
          <span className="block text-base text-center text-primary font-semibold tracking-wide uppercase">
            Nikolas - Prosjekter
          </span>
          <span className="mt-2 block text-3xl text-center leading-8 font-bold tracking-tight sm:text-4xl">
            {data.title}
          </span>

          {urls && urls.sort().map((url, index) => (
            <span key={index}>{url}</span>
          ))}

          <div className="mt-6 flex space-x-2 items-center justify-center">
            {tags && tags.sort().map((tag, index) => (
              <Badge key={index} variant="default">{tag}</Badge>
            ))}
          </div>
        </h1>


        

        <Image
          src={urlFor(data.titleImage).url()}
          width={800}
          height={800}
          alt="Title Image"
          priority
          className="rounded mt-8 border"
        />





        <div className="flex items-center justify-center">
          <Link className={buttonVariants({ size: "lg", className: "mt-7"})}
            href={data.githubrepo}
          >
            Github Repo <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      
  
        <div className="mt-16 prose prose-blue prose-lg dark:prose-invert prose-li:marker:text-primary prose-a:text-primary">
          <PortableText value={data.content} />
        </div>
      </div>

      </main>
    )
}