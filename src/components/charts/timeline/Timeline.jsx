import React, { Component } from "react";

var Chart = require("chart.js");

class Line extends Component {
  componentDidMount() {
    this.circleChart();
  }

  circleChart = () => {
    var ctx = document.getElementById("chartTimeline").getContext("2d");

    var testChart = new Chart(ctx, {
      type: "line",
      data: {
        labels: ["April", "May", "June", "July", "August", "September"],
        datasets: [
          {
            label: "# of Votes",
            data: [12, 19, 3, 7, 2, 3],
            backgroundColor: [
              "rgb(37, 31, 68)",
              "rgba(0, 80, 130)",
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
          position: "right",
          display: false,
        },
        gridLines: {
          display: false,
        },
        maintainAspectRatio: true,
        scales: {
          yAxes: [
            {
              ticks: {
                display: true,
              },
              gridLines: {
                display: false,
              },
            },
          ],
          xAxes: [
            {
              ticks: {
                display: true,
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
        <h2 className={this.props.chartHeader}>Activity Timeline</h2>
        <div className={this.props.timeline}>
          <canvas id="chartTimeline"></canvas>
        </div>
      </div>
    );
  }
}

export default Line;
