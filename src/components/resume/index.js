import React, { Component } from 'react';
import style from './resume.css';
import {proj} from '../../pages/works'
import WorkLists from '../WorkLists'

class Resume extends Component {
  render() {

    if(this.props.data){
      var skillmessage = this.props.data.skillmessage;
      var education = this.props.data.education.map(function(education){
        return <div key={education.school}><h3>{education.school}</h3>
        <p className="info">{education.degree} <span>&bull;</span><em className="date">{education.graduated}</em></p>
        {education.description.map(item=>
          <p><span>&bull; </span> {item}</p>
          )}
          </div>
      })
      var work = this.props.data.work.map(function(work){
        return <div key={work.company}><h3>{work.company}</h3>
            <p className="info">{work.title}<span>&bull;</span> <em className="date">{work.years}</em></p>
            {work.description.map(item=>
          <p><span>&bull; </span> {item}</p>
          )}
        </div>
      })
      
    }

    return (
      <div>
      <section id="resume">

      <div className="row education">
         <div className="three columns header-col">
            <h1><span>Education</span></h1>
         </div>

         <div className="nine columns main-col foredu" >
            <div className="row item">
               <div className="twelve columns">
                 {education}
               </div>
            </div>
         </div>
      </div>


      <div className="row work">

         <div className="three columns header-col">
            <h1><span>Experiences</span></h1>
         </div>

         <div className="nine columns main-col">
          {work}
        </div>
    </div>

    <div className="row ">
    <div className="three columns header-col">
            <h1><span>Projects</span></h1>
         </div>
    <div className="nine columns main-col">
    <WorkLists dataSource={proj}/>
    </div>
    </div>
   </section>
   
    </div>
    );
  }
}

export default Resume;
