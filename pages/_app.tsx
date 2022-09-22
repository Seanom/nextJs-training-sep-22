import type {AppProps} from 'next/app'
import Head from 'next/head'
import '../styles/styles.scss'
import Layout from '../components/Layout';
import {useEffect, useState} from 'react';
import Link from 'next/link';

function MyApp({Component, pageProps}: AppProps) {

    const [isDarkMode, setIsDarkMode] = useState(false);

    function toggleTheme() {
        if (localStorage.theme === 'dark' ||
            (
                !('theme' in localStorage) &&
                window.matchMedia('(prefers-color-scheme: dark)').matches
            )
        ) {
            removeDarkClass();
        } else {
            addDarkClass();
        }
    }

    function addDarkClass() {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
        setIsDarkMode(true);
    }

    function removeDarkClass() {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
        setIsDarkMode(false);
    }

    useEffect(() => {
        if (localStorage.theme === 'dark' ||
            (
                !('theme' in localStorage) &&
                window.matchMedia('(prefers-color-scheme: dark)').matches
            )
        ) {
            addDarkClass();
        } else {
            removeDarkClass();
        }
    }, [isDarkMode])

    return (
        <>
            <Head>
                <title>Creative Agency Homepage</title>
                <meta name="description" content="A description about said Creative Agency"/>
            </Head>
            <Layout>
                <nav>
                    <Link href={"/"}>Home</Link>
                    <Link href={"/news"}>News</Link>
                    <button onClick={toggleTheme}>Toggle {isDarkMode? 'light' : 'dark' } Theme</button>
                </nav>
                <main className='main-content'>
                    <Component {...pageProps} />
                    <footer></footer>
                </main>
            </Layout>
        </>
    )
}

export default MyApp