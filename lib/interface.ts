export interface simpleBlogCard {
    title: string;
    smallDescription: string;
    currentSlug: string;
    titleImage: any;
    tags: string;
    gallery: any[];
}

export interface fullBlog {
    currentSlug: string;
    title: string;
    content: any;
    titleImage: any;
    tags: string[];
    githubrepo: string;
    gallery: any[];
}