import React, { Component } from "react";

var Chart = require("chart.js");

class Presenter extends Component {
  // Is this legacy code (i.e., not needed anymore?)
  // constructor(props) {
  //     super(props);
  //     console.log('App - Constructor');
  //     // this.state = this.props.something;
  //   }

  componentDidMount() {
    this.circleChart();
  }

  circleChart = () => {
    var ctx = document.getElementById("chartPresenter").getContext("2d");

    var testChart = new Chart(ctx, {
      type: "bar",
      data: {
        labels: [
          "Jody B.",
          "Mike D.",
          "Terry G.",
          "Bobby B.",
          "Ricky T.",
          "Susy Q.",
        ],
        datasets: [
          {
            label: "",
            data: [12, 19, 3, 5, 7, 3],
            backgroundColor: [
              "rgba(62, 71, 84)",
              "rgba(95, 130, 217)",
              "rgba(166, 100, 227)",
              "rgb(190, 175, 254)",
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
                display: this.props.displayTicks,
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
        <h2 className={this.props.chartHeader}>Top Presenter</h2>
        <div className={this.props.presenter}>
          <canvas id="chartPresenter"></canvas>
        </div>
      </div>
    );
  }
}

export default Presenter;
