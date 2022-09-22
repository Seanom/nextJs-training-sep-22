import Head from 'next/head';
import jsonData from '../../data.json';
import {Header} from '../../components/Header';
import FadeElement from '../../components/FadeElement';
import React from 'react';

function Post( {news} ) {
    return (
        <>
        <Head>
            <title>{news.title}</title>
            <meta name="description" content={news.title} />
        </Head>
        <Header title={news.title} />
        <FadeElement delay={'200ms'}>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam dignissimos eaque eveniet harum mollitia nisi pariatur quae tempora temporibus totam. Deleniti deserunt porro, quo reprehenderit sequi sint soluta suscipit velit.
            </p>
        </FadeElement>
        </>
    );
}

export async function getStaticPaths() {
    let paths = [];
    const postsData = await jsonData;

    if(postsData?.posts) {
        paths = postsData.posts.map(post => ({
            params: { id: post.id.toString() },
        }))
    }

    return { paths, fallback: false }
}

export async function getStaticProps({params}) {
    const news = jsonData.posts.find(newsEntry => newsEntry.id.toString() === params.id) || {notfound: true};

    return {props: {news}}
}

export default Post;
