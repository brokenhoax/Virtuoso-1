import React, { Component } from 'react';
import "./navbar.css"
import "../../index.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faUsers } from "@fortawesome/free-solid-svg-icons";
import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons";
import { faVideo } from "@fortawesome/free-solid-svg-icons";
import { faChartPie } from "@fortawesome/free-solid-svg-icons";

class Navbar extends Component {

    render() { 
        return ( 

            <section className="navi">
                <FontAwesomeIcon className="navlink" icon={faUser} size="lg" />
                <FontAwesomeIcon className="navlink" icon={faHeart} size="lg" />
                <FontAwesomeIcon className="navlink" icon={faUsers} size="lg" />
                <FontAwesomeIcon className="navlink" icon={faCalendarAlt} size="lg"/>
                <FontAwesomeIcon className="navlink" icon={faVideo} size="lg" />
                <FontAwesomeIcon className="navlink" icon={faChartPie} size="lg" />
            </section>
        );
    }
}
    
export default Navbar;