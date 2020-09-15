import React, { Component } from 'react';
import axios from 'axios';
import { Container, Row, Col, InputGroup } from 'react-bootstrap'

class CreateWebinar extends Component {
    state = {
        title: '',
        description: '',
        timezone: '',
        year: '',
        month: '',
        day: '',
        webinarDuration: 0,
        eventTitle: '',
        eventStart: '',
        eventEnd: '',
        hosts: [],
        mainTopic: 'Topic',
        skillLevel: '',
        videoUrl: '',
        videoTitle: '',
        videoDescription: '',
        educational: false,
        networking: false,
        finance: false,
        marketing: false,
        engineering: false,
        created_by: {}

    }
    postNewWebinar = async (data) => {
        try{
            const res = await axios.post('https://salty-fortress-9010-virt-b.herokuapp.com/webinar/create',
             data,
            {headers: {
                        'Content-Type': 'application/json'
                    }});
            console.log(res.data);
        }catch (err) {
            console.log(err);
        }
    };
    onSubmit = e => {
        e.preventDefault();
        let data = {
            title: this.state.title,
            description: this.state.description,
            date: {
                timezone: this.state.timezone,
                date: this.state.year + "-" + this.state.month + "-" + this.state.day,
                duration: this.state.webinarDuration,
                event: {
                    title: this.state.eventTitle,
                    start: this.state.eventStart,
                    end: this.state.eventEnd
                }
            },

            mainTopic: this.state.mainTopic,
            skillLevel: this.state.skillLevel,
            video: {
                url: this.state.videoUrl,
                title: this.state.videoTitle,
                description: this.state.videoDescription
            },
            tags: {
                educational: this.state.educational,
                networking: this.state.networking,
                finance: this.state.finance,
                marketing: this.state.marketing,
                engineering: this.state.engineering
            }
        }
        this.postNewWebinar(data);

        // axios({
        //     method: 'POST',
        //     url:"https://salty-fortress-9010-virt-b.herokuapp.com/webinar/create",
        //     data: data,
        //     headers: {
        //         'Content-Type': 'application/json',
        //         'Authorization': '*'
        //     }
        // }).then((res) => {
        //         console.log(res);
        //         console.log(res.data);
        //     }).catch((err) => console.log(err.response.request._response));
    }

    trueFalseRadio = (e) => {
        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({ [name]: value });
    }
    handleInputChange(event) {
        const { target: { name, value } } = event
        if (name === "webinarDuration") {
            this.setState({ [name]: parseInt(value) });
        } else {
            this.setState({ [name]: value });
        }
    }


    render() {
        let day = ['--', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31'];
        let dayOptions = day.length > 0 && day.map((num, i) => {
            return (
                <option key={i} value={num}>{num}</option>
            );
        });
        let month = ['--', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
        let monthOptions = month.length > 0 && month.map((num, i) => {
            return (
                <option key={i} value={num}>{num}</option>
            );
        });
        let year = ['--', '2020', '2021', '2022', '2023', '2024'];
        let yearOptions = year.length > 0 && year.map((num, i) => {
            return (
                <option key={i} value={num}>{num}</option>
            );
        });
        let dur = ['--', 0, 15, 30, 45, 60, 75, 90, 105, 120]
        let durOptions = dur.length > 0 && dur.map((num, i) => {
            return (
                <option key={i} value={num}>{num}</option>
            )
        })

        return (
            <form>
                <Container>
                    <Row>
                        <Col>
                            <input name="title"
                                placeholder="title"
                                value={this.state.title}
                                onChange={event => { this.handleInputChange(event) }} />
                        </Col>
                        <Col>
                            <input name="description"
                                placeholder="description"
                                value={this.state.description}
                                onChange={event => { this.handleInputChange(event) }} />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            Main Topic:
                            <select name="mainTopic" value={this.state.mainTopic} onChange={event => { this.handleInputChange(event) }}>
                                <option value="--">--</option>
                                <option value="JavaScript">JavaScript</option>
                                <option value="Python"> Python</option>
                                <option value="Angular"> Angular</option>
                                <option value="React"> React</option>
                                <option value="Node JS"> Node JS</option>
                                <option value="MongoDB"> MongoDB</option>
                            </select>
                        </Col>
                        <Col>
                            Skill Level:
                            <select name="skillLevel" value={this.state.skillLevel} onChange={event => { this.handleInputChange(event) }}>
                                <option value="--">--</option>
                                <option value="Beginner">Beginner</option>
                                <option value="Intermediate"> Intermediate</option>
                                <option value="Advanced"> Advanced</option>
                            </select>
                        </Col>
                    </Row>
                    <Row>
                        <Col md="auto">
                            Timezone:
                                <select name="timezone" value={this.state.timezone} onChange={event => { this.handleInputChange(event) }}>
                                <option value="--">--</option>
                                <option value="CDT">CDT</option>
                                <option value="MDT"> MDT</option>
                                <option value="MST"> MST</option>
                                <option value="PDT"> PDT</option>
                                <option value="AKDT"> AKDT</option>
                                <option value="HDT"> HDT</option>
                            </select>
                        </Col>
                        <Col md="auto">
                            Day:
                                <select name="day"
                                value={this.state.day}
                                onChange={event => { this.handleInputChange(event) }}>
                                {dayOptions}
                            </select>
                                Month:
                                <select name="month"
                                value={this.state.month}
                                onChange={event => { this.handleInputChange(event) }}>
                                {monthOptions}
                            </select>
                                Year:
                                <select name="year"
                                value={this.state.year}
                                onChange={event => { this.handleInputChange(event) }}>
                                {yearOptions}
                            </select>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            Duration:
                            <select name="webinarDuration"
                                value={this.state.webinarDuration}
                                onChange={event => { this.handleInputChange(event) }}>
                                {durOptions}
                            </select>

                        </Col>
                        <Col>
                            <input name="eventTitle"
                                placeholder="eventTitle"
                                value={this.state.eventTitle}
                                onChange={event => { this.handleInputChange(event) }} />
                        </Col>
                        <Col>
                            <input name="eventStart"
                                placeholder="eventStart"
                                value={this.state.eventStart}
                                onChange={event => { this.handleInputChange(event) }} />
                        </Col>
                        <Col>
                            <input name="eventEnd"
                                placeholder="eventEnd"
                                value={this.state.eventEnd}
                                onChange={event => { this.handleInputChange(event) }} />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <input name="videoUrl"
                                placeholder="videoUrl"
                                value={this.state.videoUrl}
                                onChange={event => { this.handleInputChange(event) }} />
                        </Col>
                        <Col>
                            <input name="videoTitle"
                                placeholder="videoTitle"
                                value={this.state.videoTitle}
                                onChange={event => { this.handleInputChange(event) }} />
                        </Col>
                        <Col>
                            <input name="videoDescription"
                                placeholder="videoDescription"
                                value={this.state.videoDescription}
                                onChange={event => { this.handleInputChange(event) }} />
                        </Col>
                    </Row>

                    <Row>
                        Tags:
                        <Col md={3} xs={4} >
                            <InputGroup.Text>
                                <InputGroup.Checkbox name="educational" value={this.state.educational} onChange={(e) => { this.trueFalseRadio(e) }} aria-label="Educational" />
                            Educational
                            </InputGroup.Text>
                        </Col>
                        <Col md={3} xs={4} >
                            <InputGroup.Text>
                                <InputGroup.Checkbox name="networking" value={this.state.networking} onChange={(e) => { this.trueFalseRadio(e) }} /> Finance
                            </InputGroup.Text>
                        </Col>
                        <Col md={3} xs={4} >

                            <InputGroup.Text>
                                <InputGroup.Checkbox name="finance" value={this.state.finance} onChange={(e) => { this.trueFalseRadio(e) }} /> Finance
                            </InputGroup.Text>
                        </Col>
                        <Col md={3} xs={4} >

                            <InputGroup.Text>
                                <InputGroup.Checkbox name="marketing" value={this.state.marketing} onChange={(e) => { this.trueFalseRadio(e) }} /> Marketing
                            </InputGroup.Text>
                        </Col>
                        <Col md={3} xs={4} >

                            <InputGroup.Text>
                                <InputGroup.Checkbox placeholder="engineering" name="engineering" value={this.state.engineering} onChange={(e) => { this.trueFalseRadio(e) }} /> Engineering
                            </InputGroup.Text>
                        </Col>
                    </Row>

                    <button onClick={(e) => this.onSubmit(e)}>Create Webinar</button>
                </Container>
            </form>
        )
    }
}

export default CreateWebinar;