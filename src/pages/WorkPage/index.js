import React , {Component} from 'react';
import styles from './works.module.scss';
import WorkLists from '../../components/WorkLists'
import {proj} from '../works'

export default () =>{
    return <div className={styles.wrap}>
        <div className={styles.title}>
            <h3>My Works</h3>
        </div>
        <WorkLists dataSource={proj}/>
    
    </div>
}