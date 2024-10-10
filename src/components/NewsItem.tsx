import React from 'react';

interface NewsItemProps {
    title: string;
    description: string;
    url: string;
    imageUrl: string;
}

const NewsItem: React.FC<NewsItemProps> = ({ title, description, url, imageUrl }) => {
    return (
        <div className="news-item">
            <a href={url} target="_blank" rel="noopener noreferrer">
                <img src={imageUrl} alt={title} className="news-item-image" />
                <h2 className="news-item-title">{title}</h2>
                <p className="news-item-description">{description}</p>
            </a>
        </div>
    );
};

export default NewsItem;