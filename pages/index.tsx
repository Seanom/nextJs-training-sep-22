
import {Header} from '../components/Header';
import {Card} from '../components/Card';
import jsonData from '../data.json';

function HomePage(props) {
    const cards = props.posts;

    return (
        <div>
            <Header title="Creative Agency" />
            <ul className='unstyled-list'>
                {cards.map((card) => (
                    <li key={card.id}>
                        <Card
                            title={card.title}
                            href={`/news/${card.id}`}
                            imageSrc = {card.featured_image.src}
                            imageAlt = {card.featured_image.alt}
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
}

export async function getStaticProps() {
    const newsData = await jsonData;

    return {
        props: newsData
    }
}

export default HomePage;