import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import style from './home.module.css';
import Article from '../../components/article/Article';
import axios from 'axios';
import { useState, useEffect } from 'react';
import Footer from '../../components/footer/Footer'
import { Link } from 'react-router-dom';

const Home = () => {

    const [state, setstate] = useState([]);

    useEffect(() => {
        
        axios.get('http://localhost:8000/articles').then(result => {
            setstate(result.data)
            console.log(result.data)
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
                            <Link to={`/article/${result.id}`}><Article key={result.id} data={result}/></Link>
                        ))
                    }
                </div>
            </div>


            <Footer />
        </div>

    );
}

export default Home;
