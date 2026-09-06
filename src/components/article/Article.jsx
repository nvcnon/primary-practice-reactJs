import React from 'react';
import style from './article.module.css'

const Article = (props) => {
    return (
        <div className={style.articleWrapper}>
            <img src={props.data.imageUrl} />

            <h3>{props.data.title}</h3>
            <p>خواندن {props.data.readingTime} دقیقه ای</p>
        </div>
    );
}

export default Article;
