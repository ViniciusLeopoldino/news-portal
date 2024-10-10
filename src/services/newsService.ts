export type Comment = {
    name: string;
    text: string;
};

export type News = {
    id: number;
    title: string;
    date: string;
    content: string;
    image: string;
    categories: string[];
    comments: Comment[];
};

export const newsData: News[] = Array.from({ length: 50 }, (_, i) => ({
    id: i + 1,
    title: `Notícia ${i + 1}`,
    date: new Date().toISOString(),
    content: `Conteúdo da notícia ${i + 1}`.repeat(5),
    image: `https://via.placeholder.com/150`,
    categories: ["Categoria 1", "Categoria 2"],
    comments: [{ name: "User", text: "Comentário" }]
}));