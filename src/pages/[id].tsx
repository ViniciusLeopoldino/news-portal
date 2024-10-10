import { GetServerSideProps } from "next";
import Comments from "../components/Comments";
import { News, newsData } from "../services/newsService";
import styles from "../styles/News.module.css";

type NewsPageProps = {
    news: News | null;
};

const NewsPage = ({ news }: NewsPageProps) => {
    if (!news) {
        return <p>Notícia não encontrada</p>;
    }

    return (
        <div className={styles.container}>
            <h1>{news.title}</h1>
            <p>{news.date}</p>
            <img src={news.image} alt={news.title} />
            <p>{news.content}</p>
            <Comments comments={news.comments} />
        </div>
    );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
    const { id } = context.params!;
    const news = newsData.find((news) => news.id === Number(id)) || null;

    return {
        props: {
            news,
        },
    };
};

export default NewsPage;