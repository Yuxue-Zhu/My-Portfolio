import React, {Component} from 'react';
import styles from './home.module.scss';
import avatar from "../../assets/home/avatar.JPG";
import Resume from '../../components/resume'
import resumeData from '../resumeData.json'
export default () =>{


   
    
    
    
    return <div>
    <div className={styles.wrap}>
        {/* <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta> */}
        <section className = {styles.brief}>
            <img src={avatar}/>
            <h2>This is Alycia</h2>
            <p>I'm a new grad from McGill (Fall2020). </p>
            <p>Looking for oppotunities of software Develepment</p>
            <p>Contact me at yuxue.zhu@mail.mcgill.ca</p>
        </section>
        
    </div> 
    {/* <ul className="social">
    {resumeData.social.map(i=><li key={i.name}><a href={i.url}><i className={i.className}></i></a></li>)}
   </ul> */}
    <Resume data={resumeData.resume}/>

    </div>
    
}