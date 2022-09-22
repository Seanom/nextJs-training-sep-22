import styles from './Header.module.scss';
import FadeElement from './FadeElement';
import React from 'react';

export const Header = (props: { title: string }) =>
    <FadeElement>
        <h1 className={styles.header}>{props.title}</h1>
    </FadeElement>

