import { Card, CardContent } from "@/components/ui/card";
import { simpleBlogCard } from "../../lib/interface";
import { client, urlFor } from "../../lib/sanity";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

async function getData() {
    const query =`
    *[_type == "blog"] | order(_createdAt desc) {
      title,
        smallDescription,
        "currentSlug": slug.current,
        titleImage
    }`;
  
    const data = await client.fetch(query);
  
    return data;
  }


const page = async() => {
    const data: simpleBlogCard[] = await getData();

    if (data) {
      return(
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
      )
    } else {
      return(
        <div>
          Loading....
        </div>
      )
    }
}

export default page