import Layout from '../../components/Layout';
import {Header} from '../../components/Header';
import {Card} from '../../components/Card';
import jsonData from '../../data.json';
import React, {useState} from 'react';
import buttonStyles from '../../components/Button.module.scss'
import FadeElement from '../../components/FadeElement';


function News(props) {
    const [sortCategory, setSortCategory] = useState(null);
    const news = !sortCategory ? props.posts : props.posts.filter(post => post.category === sortCategory);

    return (
        <div>
            <Header title="News"/>
            <div className={buttonStyles.buttonGroup}>
                {props.categories.map((category) => (
                    <button className={ `${buttonStyles.button} ${ (sortCategory && category !== sortCategory) ? buttonStyles.buttonNotActive : ""}` }
                            onClick={() => setSortCategory(category)} key={category}>{category}</button>
                ))}
            </div>
            <ul className='unstyled-list'>
                {news.map((card) => (
                    <li key={card.id}>
                        <Card
                            key={card.id}
                            title={card.title}
                            href={`/news/${card.id}`}
                            imageSrc={card.image.src}
                            imageAlt={card.image.alt}
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
}

export async function getStaticProps() {
    const newsData = await jsonData.posts;

    let categories: string[];
    categories = [...new Set(newsData.map((item, i) => item.category))];

    return {
        props: {
            posts: newsData,
            categories: categories},
    }
}

export default News