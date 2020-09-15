import React, { Component } from "react";
import { Container, Row, Col, InputGroup } from "react-bootstrap";
import styles from "./CreateWebinar.module.css";

class CreateWebinar extends Component {
  state = {
    title: "",
    description: "",
    timezone: "",
    year: "",
    month: "",
    day: "",
    webinarDuration: 0,
    eventTitle: "",
    eventStart: "",
    eventEnd: "",
    hosts: [],
    mainTopic: "Topic",
    skillLevel: "",
    videoUrl: "",
    videoTitle: "",
    videoDescription: "",
    educational: false,
    networking: false,
    finance: false,
    marketing: false,
    engineering: false,
    created_by: {},
  };

  onSubmit = (e) => {
    let newWebinar = {
      title: this.state.title,
      description: this.state.description,
      date: {
        timezone: this.state.timezone,
        date: this.state.year + "-" + this.state.month + "-" + this.state.day,
        duration: this.state.duration,
        event: {
          title: this.state.eventTitle,
          start: this.state.eventStart,
          end: this.state.eventEnd,
        },
      },
      hosts: "Userid Here",
      mainTopic: this.state.marketing,
      skillLevel: this.state.skillLevel,
      video: {
        url: this.state.videoUrl,
        title: this.state.videoTitle,
        description: this.state.videoDescription,
        viewed_by: ["people"],
      },
      tags: {
        educational: this.state.educational,
        networking: this.state.networking,
        finance: this.state.finance,
        marketing: this.state.marketing,
        engineering: this.state.engineering,
      },
      created_by: "User Here",
    };
    console.log(newWebinar);
    debugger;
  };

  trueFalseRadio = (e) => {
    const target = e.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({ [name]: value });
  };
  handleInputChange(event) {
    const {
      target: { name, value },
    } = event;
    this.setState({ [name]: value });
    console.log(this.state.title);
  }

  render() {
    let day = [
      "--",
      "01",
      "02",
      "03",
      "04",
      "05",
      "06",
      "07",
      "08",
      "09",
      "10",
      "11",
      "12",
      "13",
      "14",
      "15",
      "16",
      "17",
      "18",
      "19",
      "20",
      "21",
      "22",
      "23",
      "24",
      "25",
      "26",
      "27",
      "28",
      "29",
      "30",
      "31",
    ];
    let dayOptions =
      day.length > 0 &&
      day.map((num, i) => {
        return (
          <option key={i} value={num}>
            {num}
          </option>
        );
      });
    let month = [
      "--",
      "01",
      "02",
      "03",
      "04",
      "05",
      "06",
      "07",
      "08",
      "09",
      "10",
      "11",
      "12",
    ];
    let monthOptions =
      month.length > 0 &&
      month.map((num, i) => {
        return (
          <option key={i} value={num}>
            {num}
          </option>
        );
      });
    let year = ["--", "2020", "2021", "2022", "2023", "2024"];
    let yearOptions =
      year.length > 0 &&
      year.map((num, i) => {
        return (
          <option key={i} value={num}>
            {num}
          </option>
        );
      });

    return (
      <form>
        <div>
          <Container className={styles.createContainer}>
            <div className={styles.header}>Create Your Webinar</div>
            <div>
              <section className={styles.title}>
                Title:
                <input
                  className={styles.inputFieldLeft}
                  name="title"
                  placeholder="title"
                  value={this.state.title}
                  onChange={(event) => {
                    this.handleInputChange(event);
                  }}
                />
              </section>
            </div>
            <div>
              <section className={styles.description}>
                Description:
                <input
                  className={styles.inputFieldLeft}
                  name="description"
                  placeholder="description"
                  value={this.state.description}
                  onChange={(event) => {
                    this.handleInputChange(event);
                  }}
                />
              </section>
            </div>
            <div>
              <section className={styles.mainTopic}>
                Main Topic:
                <select
                  className={styles.inputFieldLeft}
                  name="mainTopic"
                  value={this.state.mainTopic}
                  onChange={(event) => {
                    this.handleInputChange(event);
                  }}
                >
                  <option value="--">--</option>
                  <option value="JavaScript">JavaScript</option>
                  <option value="Python"> Python</option>
                  <option value="Angular"> Angular</option>
                  <option value="React"> React</option>
                  <option value="Node JS"> Node JS</option>
                  <option value="MongoDB"> MongoDB</option>
                </select>
              </section>
              <section className={styles.skillLevel}>
                Skill Level:
                <select
                  className={styles.inputFieldLeft}
                  name="skillLevel"
                  value={this.state.skillLevel}
                  onChange={(event) => {
                    this.handleInputChange(event);
                  }}
                >
                  <option value="--">--</option>
                  <option value="Beginner">Beginner</option>
                  <option value="Intermediate"> Intermediate</option>
                  <option value="Advanced"> Advanced</option>
                </select>
              </section>
            </div>
            <div>
              <section className={styles.day}>
                <div className={styles.dayDrop}> Day:</div>
                <select
                  className={styles.dayDrop}
                  name="day"
                  value={this.state.day}
                  onChange={(event) => {
                    this.handleInputChange(event);
                  }}
                >
                  {dayOptions}
                </select>
                <div className={styles.dayDrop}> Month:</div>
                <select
                  className={styles.inputFieldLeft}
                  name="month"
                  value={this.state.month}
                  onChange={(event) => {
                    this.handleInputChange(event);
                  }}
                >
                  {monthOptions}
                </select>
                <div className={styles.dayDrop}> Year:</div>
                <select
                  className={styles.inputFieldLeft}
                  name="year"
                  value={this.state.year}
                  onChange={(event) => {
                    this.handleInputChange(event);
                  }}
                >
                  {yearOptions}
                </select>
              </section>
              <section className={styles.timeZone}>
                Timezone:
                <select
                  className={styles.inputRight}
                  name="timezone"
                  value={this.state.timezone}
                  onChange={(event) => {
                    this.handleInputChange(event);
                  }}
                >
                  <option value="--">--</option>
                  <option value="CDT">CDT</option>
                  <option value="MDT"> MDT</option>
                  <option value="MST"> MST</option>
                  <option value="PDT"> PDT</option>
                  <option value="AKDT"> AKDT</option>
                  <option value="HDT"> HDT</option>
                </select>
              </section>
            </div>
            <div>
              <section className={styles.duration}>
                Duration (In Minutes):
                <input
                  className={styles.inputRight}
                  name="webinarDuration"
                  placeholder="webinarDuration"
                  value={this.state.webinarDuration}
                  onChange={(event) => {
                    this.handleInputChange(event);
                  }}
                />
              </section>
            </div>
            <div>
              <section className={styles.eventTitle}>
                Event Title:
                <input
                  className={styles.inputRight}
                  name="eventTitle"
                  placeholder="eventTitle"
                  value={this.state.eventTitle}
                  onChange={(event) => {
                    this.handleInputChange(event);
                  }}
                />
              </section>
            </div>
            <div>
              <section className={styles.eventStart}>
                Event Start Time:
                <input
                  className={styles.inputRight}
                  name="eventStart"
                  placeholder="eventStart"
                  value={this.state.eventStart}
                  onChange={(event) => {
                    this.handleInputChange(event);
                  }}
                />
              </section>
            </div>
            <div>
              <section className={styles.eventEnd}>
                Event End Time:
                <input
                  className={styles.inputRight}
                  name="eventEnd"
                  placeholder="eventEnd"
                  value={this.state.eventEnd}
                  onChange={(event) => {
                    this.handleInputChange(event);
                  }}
                />
              </section>
            </div>

            <section className={styles.videoURL}>
              Video URL:
              <input
                className={styles.inputRight}
                name="videoUrl"
                placeholder="videoUrl"
                value={this.state.videoUrl}
                onChange={(event) => {
                  this.handleInputChange(event);
                }}
              />
            </section>
            <section className={styles.videoTitle}>
              Video Title:
              <input
                className={styles.inputRight}
                name="videoTitle"
                placeholder="videoTitle"
                value={this.state.videoTitle}
                onChange={(event) => {
                  this.handleInputChange(event);
                }}
              />
            </section>
            <section className={styles.videoDescription}>
              Video Description:
              <input
                className={styles.inputRight}
                name="videoDescription"
                placeholder="videoDescription"
                value={this.state.videoDescription}
                onChange={(event) => {
                  this.handleInputChange(event);
                }}
              />
            </section>
            <div className={styles.tags}>
              Tags:
              <section>
                <InputGroup.Text>
                  <InputGroup.Checkbox
                    className={styles.educational}
                    name="educational"
                    value={this.state.educational}
                    onChange={(e) => {
                      this.trueFalseRadio(e);
                    }}
                    aria-label="Educational"
                  />
                  Educational
                </InputGroup.Text>
              </section>
              <section>
                <InputGroup.Text>
                  <InputGroup.Checkbox
                    className={styles.networking}
                    name="networking"
                    value={this.state.networking}
                    onChange={(e) => {
                      this.trueFalseRadio(e);
                    }}
                  />{" "}
                  Finance
                </InputGroup.Text>
              </section>
              <section>
                <InputGroup.Text>
                  <InputGroup.Checkbox
                    className={styles.finance}
                    name="finance"
                    value={this.state.finance}
                    onChange={(e) => {
                      this.trueFalseRadio(e);
                    }}
                  />{" "}
                  Finance
                </InputGroup.Text>
              </section>
              <section>
                <InputGroup.Text>
                  <InputGroup.Checkbox
                    className={styles.marketing}
                    name="marketing"
                    value={this.state.marketing}
                    onChange={(e) => {
                      this.trueFalseRadio(e);
                    }}
                  />{" "}
                  Marketing
                </InputGroup.Text>
              </section>
              <section>
                <InputGroup.Text>
                  <InputGroup.Checkbox
                    className={styles.engineer}
                    placeholder="engineering"
                    name="engineering"
                    value={this.state.engineering}
                    onChange={(e) => {
                      this.trueFalseRadio(e);
                    }}
                  />{" "}
                  Engineering
                </InputGroup.Text>
              </section>
            </div>

            <button
              id={styles.buddy}
              className="btn btn-primary"
              onClick={() => this.onSubmit()}
            >
              Create Webinar
            </button>
          </Container>
        </div>
      </form>
    );
  }
}

export default CreateWebinar;
