import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import style from './home.module.css';
import Article from '../../components/article/Article';
import axios from 'axios';
import { useState, useEffect } from 'react';

const Home = () => {

    const [state, setstate] = useState([]);

    useEffect(() => {
        
        axios.get('http://localhost:8000/articles').then(result => {
            setstate(result.data.data)
            console.log(result.data.data)
        }).catch((error) => {
            console.log(error);
        })

    }, []);

    return (
        <div className={style.homeWrapper}>
            <Navbar title='Article site' />
            <div className='container'>

                <h2>مقالات</h2>

                <div className={style.articleList}>
                    {
                        state.map((result) => (
                            <Article data={result}/>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}

export default Home;
