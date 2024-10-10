export interface News {
    id: string;
    title: string;
    content: string;
    author: string;
    publishedDate: Date;
    tags?: string[];
    imageUrl?: string;
}

export interface Author {
    id: string;
    name: string;
    bio: string;
    avatarUrl?: string;
}

export interface Comment {
    id: string;
    newsId: string;
    author: string;
    content: string;
    publishedDate: Date;
}