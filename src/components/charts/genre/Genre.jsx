import React, { Component } from "react";

// Example Class Chart.js Component:

var Chart = require("chart.js");

class Genre extends Component {
  // Is this legacy code (i.e., not needed anymore?)
  // constructor(props) {
  //     super(props);
  //     console.log('App - Constructor');
  //     // this.state = this.props.something;
  //   }

  constructor(props) {
    super(props);
    // this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.circleChart();
  }

  circleChart = () => {
    var ctx = document.getElementById("chartGenre").getContext("2d");

    var testChart = new Chart(ctx, {
      type: "doughnut",
      data: {
        labels: ["JavaScript", "Python", "Ruby", "CSS", "React", "Swift"],
        datasets: [
          {
            label: "# of Votes",
            data: [12, 19, 3, 7, 2, 3],
            backgroundColor: [
              "rgba(62, 71, 84)",
              "rgba(95, 130, 217)",
              "rgba(166, 100, 227)",
              "rgba(190, 175, 254)",
              "rgba(153, 102, 255, 0.2)",
              "rgba(255, 159, 64, 0.2)",
            ],
            borderColor: [
              "rgba(255, 99, 132, 1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)",
              "rgba(153, 102, 255, 1)",
              "rgba(255, 159, 64, 1)",
            ],
            borderWidth: 0,
          },
        ],
      },
      options: {
        responsive: true,
        legend: {
          position: this.props.position,
          display: this.props.display,
        },
        gridLines: {
          display: false,
        },
        maintainAspectRatio: true,
        scales: {
          yAxes: [
            {
              ticks: {
                display: false,
              },
              gridLines: {
                display: false,
              },
            },
          ],
          xAxes: [
            {
              ticks: {
                display: false,
              },
              gridLines: {
                display: false,
              },
            },
          ],
        },
      },
    });
    return testChart;
  };

  render() {
    return (
      <div className={this.props.chart}>
        <h2 className={this.props.chartHeader}>Top Genres</h2>
        <div className={this.props.genre}>
          <canvas id="chartGenre"></canvas>
        </div>
      </div>
    );
  }
}

export default Genre;

/////////////////////////////////////////////////////////////////
// // Example Functional Chart.js Component:

// Don't forget to use:
// import React, { useState } from 'react';
// import { Doughnut } from 'react-chartjs-2';

// const Genre = () => {

//     // Set Data

//     const [genreData, setGenreData] = useState({

//         labels: ['JavaScript', 'Python', 'Ruby', 'CSS', 'React', 'Swift'],
//         datasets: [{
//             label: '# of Votes',
//             data: [12, 19, 3, 7, 2, 3],
//             backgroundColor: [
//                 'rgba(62, 71, 84)',
//                 'rgba(95, 130, 217)',
//                 'rgba(166, 100, 227)',
//                 'rgba(190, 175, 254)',
//                 'rgba(153, 102, 255, 0.2)',
//                 'rgba(255, 159, 64, 0.2)'
//             ],
//             borderColor: [
//                 'rgba(255, 99, 132, 1)',
//                 'rgba(54, 162, 235, 1)',
//                 'rgba(255, 206, 86, 1)',
//                 'rgba(75, 192, 192, 1)',
//                 'rgba(153, 102, 255, 1)',
//                 'rgba(255, 159, 64, 1)'
//             ],
//             borderWidth: 0
//         }]

//     });

//     // Set Options

//     const [genreOptions, setGenreOptions] = useState({

//         options: {
//             responsive: true,
//             legend: {
//                 position: 'right',
//             },
//             gridLines: {
//                 display: false,
//             },
//             maintainAspectRatio: false  ,
//             scales: {
//                 yAxes: [{
//                     ticks: {
//                         display: false,
//                     },
//                     gridLines: {
//                         display: false,
//                     }
//                 }],
//                 xAxes: [{
//                     ticks: {
//                         display: false,
//                     },
//                     gridLines: {
//                         display: false,
//                     }
//                 }]
//             }
//         }
//     });

//     // Return Chart

//     return (

//         <div className="chart">
//             <h2 className="chart-header">Top Genres</h2>
//             <div className="genre">
//             <Doughnut
//                 data={genreData}
//                 options={{
//                     legend: {
//                         position: 'right',
//                     }
//                 }}
//             />
//             </div>
//         </div>

//     );

// }

// export default Genre;
