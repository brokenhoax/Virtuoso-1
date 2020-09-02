import React, { Component } from 'react';
import styles from "./Stats.module.css";
import CountHours from "../charts/countHours/CountHours";
import CountWebinars from "../charts/countWebinars/CountWebinars";
import Timeline from "../charts/timeline/Timeline";
import Genre from "../charts/genre/Genre";
import Presenter from "../charts/presenter/Presenter";
import Skill from "../charts/skill/Skill";

class Stats extends Component {

    render() { 
        return ( 
            <div className={styles.chartContainer}>
                <CountWebinars 
                    chart={styles.chart}
                    chartHeader={styles.chartHeader} 
                    webinars={styles.totalWeb}
                    texty={styles.texty}
                    />
                <CountHours 
                    chart={styles.chart}
                    chartHeader={styles.chartHeader} 
                    hours={styles.hours}
                    />
                <Timeline 
                    chart={styles.chart}
                    chartHeader={styles.chartHeader} 
                    webinars={styles.webinars}
                    />
                <Genre 
                    chart={styles.chart}
                    chartHeader={styles.chartHeader} 
                    webinars={styles.webinars}
                    genre={styles.genre}
                    />
                <Presenter 
                    chart={styles.chart}
                    chartHeader={styles.chartHeader} 
                    webinars={styles.webinars}
                    />
                <Skill 
                    chart={styles.chart}
                    chartHeader={styles.chartHeader} 
                    webinars={styles.webinars}
                    />
            </div>
         );
    }
}


// getStatsClass() {
//     let statsClass = 
// }
 
export default Stats;