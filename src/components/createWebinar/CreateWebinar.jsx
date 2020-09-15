import React, { Component } from 'react';
import { Container, Row, Col, InputGroup } from 'react-bootstrap'

class CreateWebinar extends Component {
    state = {
        title: '',
        description: '',
        timezone: '',
        year: '',
        month: '',
        day: '',
        webinarDuration: '',
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

    onSubmit = e => {
        console.log(this.state);
        debugger
    }

    trueFalseRadio = (e) => {
        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({ [name]: value });
    }
    handleInputChange(event) {
        const { target: { name, value } } = event
        this.setState({ [name]: value });
        console.log(this.state.title);
    }
    handleTopicChange = e => {
        this.setState({ mainTopic: e.target.value });
    }
    handleSkillChange = e => {
        this.setState({ skillLevel: e.target.value });
    }
    handleTimezoneChange = e => {
        this.setState({ timezone: e.target.value });
    }
    handleDayChange = e => {
        this.setState({ day: e.target.value });
    }
    handleMonthChange = e => {
        this.setState({ month: e.target.value });
    }
    handleYearChange = e => {
        this.setState({ year: e.target.value });
    }



    render() {
        let day = ['--', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31'];
        let dayOptions = day.length > 0 && day.map((num, i) => {
            return (
                <option key={i} value={num}>{num}</option>
            );
        });
        let month = ['--', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];
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

        return (
            <form>
                <Container>
                    <Row>
                        <Col>
                            <input name="title" 
                            placeholder="title" 
                            value={this.state.title} 
                            onChange={event => {this.handleInputChange(event)}} />
                        </Col>
                        <Col>
                            <input name="description" 
                            placeholder="description" 
                            value={this.state.description} 
                            onChange={event => {this.handleInputChange(event)}} />
                        </Col>
                    </Row>
                    <Row>
                        <Col size="md">
                            Timezone:
                                <select name="timezone" value={this.state.timezone} onChange={event => {this.handleInputChange(event)}}>
                                <option value="--">--</option>
                                <option value="CDT">CDT</option>
                                <option value="MDT"> MDT</option>
                                <option value="MST"> MST</option>
                                <option value="PDT"> PDT</option>
                                <option value="AKDT"> AKDT</option>
                                <option value="HDT"> HDT</option>
                            </select>
                        </Col>
                        <Row>
                            Day:
                                <select name="day" 
                                value={this.state.day} 
                                onChange={event => {this.handleInputChange(event)}}>
                                {dayOptions}
                                </select>
                                Month:
                                <select name="month" 
                                value={this.state.month} 
                                onChange={event => {this.handleInputChange(event)}}>
                                {monthOptions}
                                </select>
                                Year:
                                <select name="year" 
                                value={this.state.year} 
                                onChange={event => {this.handleInputChange(event)}}>
                                {yearOptions}
                                </select>
                        </Row>
                    </Row>
                    <Col>
                        <input placeholder="webinarDuration" value={this.state.webinarDuration} onChange={e => this.setState({ webinarDuration: e.target.value })} />
                    </Col>

                    <input placeholder="eventTitle" value={this.state.eventTitle} onChange={e => this.setState({ eventTitle: e.target.value })} />
                    <input placeholder="eventStart" value={this.state.eventStart} onChange={e => this.setState({ eventStart: e.target.value })} />
                    <input placeholder="eventEnd" value={this.state.eventEnd} onChange={e => this.setState({ eventEnd: e.target.value })} />

                    <input placeholder="videoUrl" value={this.state.videoUrl} onChange={e => this.setState({ videoUrl: e.target.value })} />
                    <input placeholder="videoTitle" value={this.state.videoTitle} onChange={e => this.setState({ videoTitle: e.target.value })} />
                    <input placeholder="videoDescription" value={this.state.videoDescription} onChange={e => this.setState({ videoDescription: e.target.value })} />

                    <input placeholder="hosts" value={this.state.hosts} onChange={e => this.setState({ hosts: e.target.value })} />

                    <select value={this.state.mainTopic} onChange={this.handleTopicChange}>
                        <option value="--">--</option>
                        <option value="JavaScript">JavaScript</option>
                        <option value="Python"> Python</option>
                        <option value="Angular"> Angular</option>
                        <option value="React"> React</option>
                        <option value="Node JS"> Node JS</option>
                        <option value="MongoDB"> MongoDB</option>
                    </select>
                    <select value={this.state.skillLevel} onChange={this.handleSkillChange}>
                        <option value="--">--</option>
                        <option value="Beginner">Beginner</option>
                        <option value="Intermediate"> Intermediate</option>
                        <option value="Advanced"> Advanced</option>
                    </select>

                    <Col>
                        <Row>
                            <InputGroup.Checkbox name="educational" value={this.state.educational} onChange={(e) => { this.trueFalseRadio(e) }} /> Educational
                        </Row>
                        <Row>
                            <InputGroup.Checkbox name="networking" value={this.state.networking} onChange={(e) => { this.trueFalseRadio(e) }} /> Finance
                        </Row>
                        <Row>
                            <InputGroup.Checkbox name="finance" value={this.state.finance} onChange={(e) => { this.trueFalseRadio(e) }} /> Finance
                        </Row>
                        <Row>
                            <InputGroup.Checkbox name="marketing" value={this.state.marketing} onChange={(e) => { this.trueFalseRadio(e) }} /> Marketing
                        </Row>
                        <Row>
                            <InputGroup.Checkbox placeholder="engineering" name="engineering" value={this.state.engineering} onChange={(e) => { this.trueFalseRadio(e) }} /> Engineering
                        </Row>
                    </Col>

                    <button onClick={() => this.onSubmit()}>Create Webinar</button>
                </Container>
            </form>
        )
    }
}

export default CreateWebinar;