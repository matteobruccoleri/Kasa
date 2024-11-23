import React from 'react';
import { Link } from 'react-router-dom';
import styles from './NotFound.module.scss';


function NotFound() {
    return (
        <div className={styles.not_found}>
            <h1>404</h1>
            <p>Oups! La page que vous demandez n'existe pas.</p>
            <Link to="/">Retourner sur la page d’accueil</Link>
        </div>
    );
}

export default NotFound;