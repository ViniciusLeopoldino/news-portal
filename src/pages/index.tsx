import { useState } from "react";
import NewsItem from "../components/NewsItem";
import Pagination from "../components/Pagination";
import { newsData } from "../services/newsService";
import styles from "../styles/Home.module.css";

const Home = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [searchTerm, setSearchTerm] = useState("");

    const filteredNews = newsData.filter(news =>
        news.title.includes(searchTerm) ||
        news.content.includes(searchTerm) ||
        news.categories.some(category => category.includes(searchTerm))
    );

    const newsPerPage = 10;
    const totalPages = Math.ceil(filteredNews.length / newsPerPage);
    const displayedNews = filteredNews.slice(
        (currentPage - 1) * newsPerPage,
        currentPage * newsPerPage
    );

    return (
        <div className={styles.container}>
            <input
                type="text"
                placeholder="Buscar..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            {displayedNews.length > 0 ? (
                displayedNews.map(news => <NewsItem key={news.id} news={news} />)
            ) : (
                <p>Nenhum artigo encontrado</p>
            )}
            <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
            />
            {currentPage === totalPages && <p>Não há mais itens</p>}
        </div>
    );
};

export default Home;