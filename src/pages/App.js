import React, {Component} from 'react'
import logo from './logo.svg';
import styles from './App.module.scss';
import {Link, Route, withRouter} from 'react-router-dom';
import HomePage from './HomePage'
import WorkPage from './WorkPage'
import WorkPageDetail from './WorkPageDetail'

class App extends Component{
  render(){
    const { location } = this.props;
    return (
      <div className={styles.App}>
        
        <header className={styles.header}>
          <div className={styles.box}>

            
            <div className={styles.boxright}> 
              <Link to="/"><p className={location.pathname=="/" ? styles.selected : null}>Home</p></Link>
              <Link to="/works" className={location.pathname=="/works" ? styles.selected : null}><p>Works</p></Link> 
            </div>

          </div>
        </header>
        <section className={styles.content}>
           <Route path="/" exact component={HomePage}/> 
          <Route path="/works" exact component={WorkPage}/> 

          <Route path="/works/:id" exact component={WorkPageDetail}/>

        </section>

        <footer className={styles.footer}>
          <p>© Alycia</p>
          <p>Handmade with</p>
        </footer>
      </div>
    );
  }
}

export default withRouter(App);
