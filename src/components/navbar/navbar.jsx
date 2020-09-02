import React, { Component } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faUsers } from "@fortawesome/free-solid-svg-icons";
import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons";
import { faVideo } from "@fortawesome/free-solid-svg-icons";
import { faChartPie } from "@fortawesome/free-solid-svg-icons";
import styles from './Navbar.module.css'

class Navbar extends Component {

    render() { 
        return ( 

            <section className={styles.navi}>
                <FontAwesomeIcon className={styles.navlink} icon={faUser} size="lg" />
                <FontAwesomeIcon className={styles.navlink} icon={faHeart} size="lg" />
                <FontAwesomeIcon className={styles.navlink} icon={faUsers} size="lg" />
                <FontAwesomeIcon className={styles.navlink} icon={faCalendarAlt} size="lg"/>
                <FontAwesomeIcon className={styles.navlink} icon={faVideo} size="lg" />
                <FontAwesomeIcon className={styles.navlink} icon={faChartPie} size="lg" />
            </section>
        );
    }
}
    
export default Navbar;