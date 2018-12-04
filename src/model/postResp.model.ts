export interface PostRespModel {
    posts: PostModel[];
}

export interface PostModel {
    attachments: any;
    author: { id: number, slug: string, name: string, first_name: string, last_name: string };
    categories: any;
    comment_count: number;
    comment_status: string;
    comments: any;
    content: string;
    custom_fields: { videoUrl: any, views: any };
    date: string;
    excerpt: string;
    id: number;
    modified: string;
    slug: string;
    status: string;
    tags: any;
    thumbnail: string;
    thumbnail_size: string;
    title: string;
    title_plain: string;
    type: string;
    url: string;
}
