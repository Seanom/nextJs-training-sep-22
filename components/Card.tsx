import React, {FunctionComponent} from 'react';
import styles from './Card.module.scss'
import Image from 'next/image';
import Link from 'next/link';

type CardProps = {
    title: string,
    href: string,
    imageSrc: string,
    imageAlt: string,
    width?: number,
    height?: number
}

export const Card: FunctionComponent<CardProps> = ( {title, href, imageSrc, imageAlt, width = 384, height = 185}) =>
    <div className={styles.card} style={{display: 'block'}}>
        <Image
            layout={'responsive'}
            src={imageSrc}
            alt={imageAlt}
            width={width}
            height={height}
            priority={true}/>
        <h2 className={styles.card__title}>
            <Link href={href}>{title}</Link>
        </h2>
    </div>
