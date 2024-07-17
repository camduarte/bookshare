import React, { useState } from 'react';
import DeleteModal from '../components/DeleteModal';
import '../styles/pages/articleList.css'; 
import Button from '../components/ui/Button';
import { SearchIcon } from '../assets/icons';
import Input from '../components/ui/Input';
import Select from '../components/ui/Select';
import UserMenu from '../components/UserMenu';

const ArticleList = () => {
  const [articles, setArticles] = useState([
    { id: 1, title: 'Artículo 1' },
    { id: 2, title: 'Artículo 2' },
    { id: 3, title: 'Artículo 3' },
  ]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [articleToDelete, setArticleToDelete] = useState(null);

  const handleDeleteClick = (article) => {
    setArticleToDelete(article);
    setIsModalOpen(true);
  };

  const handleConfirmDelete = () => {
    setArticles(articles.filter(article => article.id !== articleToDelete.id));
    setIsModalOpen(false);
    setArticleToDelete(null);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setArticleToDelete(null);
  };

  return (
    <div className="article-list">
      <h1>Lista de Artículos</h1>
      <ul>
        {articles.map(article => (
          <li key={article.id}>
            {article.title}
            <button onClick={() => handleDeleteClick(article)} className="delete-button">Eliminar</button>
          </li>
        ))}
      </ul>
      <DeleteModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onConfirm={handleConfirmDelete}
      />
    </div>
  );
};

export default ArticleList;
