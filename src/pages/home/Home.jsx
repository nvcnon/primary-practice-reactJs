import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import style from './home.module.css';
import Article from '../../components/article/Article';
import axios from 'axios';
import { useState, useEffect } from 'react';
import Footer from '../../components/footer/Footer'
import { Link } from 'react-router-dom';
import Loading from '../../components/loading/Loading';

const Home = () => {

    const [state, setstate] = useState([]);
    const [isLoading, setIsLoading] = useState(false)


    useEffect(() => {
        setIsLoading(true)  
        axios.get('http://localhost:8000/articles').then(result => {
            setstate(result.data)
            console.log(result.data)
            setIsLoading(false)
        }).catch((error) => {
            console.log(error);
            setIsLoading(false)
        })

    }, []);

    return (
        <div className={style.homeWrapper}>
            <Navbar title='Article site' />
            {isLoading ? <Loading /> : 
            <div className='container'>

                <h2>مقالات</h2>

                <div className={style.articleList}>
                    {
                        state.map((result) => (
                            <Link to={`/article/${result.id}`}><Article key={result.id} data={result}/></Link>
                        ))
                    }
                </div>
            </div>}


            <Footer />
        </div>

    );
}

export default Home;
