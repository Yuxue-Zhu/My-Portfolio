import React, {Component} from 'react';
import styles from './home.module.scss';
import avatar from "../../assets/images/avatar.JPG";
import WorkLists from '../../components/WorkLists';
import worksData from '../works.json'

export default () =>{
    return <div className={styles.wrap}>
        <section className = {styles.brief}>
            <img src={avatar}/>
            <h2>This is Alycia</h2>
            <p>I'm a new grad from McGill (Fall2020). </p>
            <p>Looking for oppotunities of software Develepment</p>
            <p>Contact me at yuxue.zhu@mail.mcgill.ca</p>
        </section>
        <section className={styles.work}>
            <div className={styles.title}>
                <h2>selection of work</h2>
                <p>you can find more in the work overview</p>
            </div>
            <WorkLists dataSource = {worksData.data}/>

        </section>
    </div>
}