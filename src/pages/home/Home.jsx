import React from 'react';
import Navbar from '../../components/navbar/Navbar'
import style from './home.module.css' 
import Article from '../../components/article/Article';

const Home = () => {

    let articleList = [
        {
            "id": 1,
            "imageUrl": "https://cinemavehicles.com/images/F142566103.jpg",
            "title": "تست عنوان ۱",
            "readingTime": 5
        },
        {
            "id": 2,
            "imageUrl": "https://cinemavehicles.com/images/F142566039.jpg",
            "title": "تست عنوان ۲",
            "readingTime": 3
        },
        {
            "id": 3,
            "imageUrl": "https://cinemavehicles.com/images/F142566046.gif",
            "title": "تست عنوان ۳",
            "readingTime": 8
        },
        {
            "id": 4,
            "imageUrl": "https://cinemavehicles.com/images/F142566054.gif",
            "title": "تست عنوان ۴",
            "readingTime": 4
        },
        {
            "id": 5,
            "imageUrl": "https://cinemavehicles.com/images/F142566055.jpg",
            "title": "تست عنوان ۵",
            "readingTime": 10
        }
    ]
    return (
        <div className={style.homeWrapper}>
            <Navbar title='Article site' />
            <div className='container'>

                <h2>مقالات</h2>

                <div className={style.articleList}>
                    {
                        articleList.map((result) => (
                            <Article data={result}/>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}

export default Home;
