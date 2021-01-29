import React , {Component} from 'react';
import styles from './detail.module.scss';
export default () =>{
    return <div className={styles.wrap}>
        <div className={styles.box}>
            <div className={styles.title}>
                <h1>title</h1>
                <p>sep 2020</p>
            </div>
            <section className={styles.content}>
                <p>DESCRIPTION</p>
            </section>
        </div>
    </div>
}