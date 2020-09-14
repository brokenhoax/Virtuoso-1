import React, { Component } from 'react';
import { Container, Row, Col, InputGroup } from 'react-bootstrap'

class CreateWebinar extends Component {
    state = {
        title: '',
        description: '',
        timezone: '',
        date: '',
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
    handleTopicChange = e => {
        this.setState({ mainTopic: e.target.value });
    }
    handleSkillChange = e => {
        this.setState({ skillLevel: e.target.value});
    }
    handleTimezoneChange = e => {
        this.setState({ timezone: e.target.value});
    }



    render() {
        return (
            <form>
                <Container>
                    <div>
                        <input placeholder="title" value={this.state.title} onChange={e => this.setState({ title: e.target.value })} />
                        <input placeholder="description" value={this.state.description} onChange={e => this.setState({ description: e.target.value })} />
                        <Col>
                        <select value={this.state.timezone} onChange={this.handleTimezoneChange}>
                            <option value="CDT">CDT</option>
                            <option value="MDT"> MDT</option>
                            <option value="MST"> MST</option>
                            <option value="PDT"> PDT</option>
                            <option value="AKDT"> AKDT</option>
                            <option value="HDT"> HDT</option>
                        </select>
                        </Col>
                        <input placeholder="date" value={this.state.date} onChange={e => this.setState({ date: e.target.value })} />
                        <input placeholder="webinarDuration" value={this.state.webinarDuration} onChange={e => this.setState({ webinarDuration: e.target.value })} />

                        <input placeholder="eventTitle" value={this.state.eventTitle} onChange={e => this.setState({ eventTitle: e.target.value })} />
                        <input placeholder="eventStart" value={this.state.eventStart} onChange={e => this.setState({ eventStart: e.target.value })} />
                        <input placeholder="eventEnd" value={this.state.eventEnd} onChange={e => this.setState({ eventEnd: e.target.value })} />

                        <input placeholder="videoUrl" value={this.state.videoUrl} onChange={e => this.setState({ videoUrl: e.target.value })} />
                        <input placeholder="videoTitle" value={this.state.videoTitle} onChange={e => this.setState({ videoTitle: e.target.value })} />
                        <input placeholder="videoDescription" value={this.state.videoDescription} onChange={e => this.setState({ videoDescription: e.target.value })} />

                        <input placeholder="hosts" value={this.state.hosts} onChange={e => this.setState({ hosts: e.target.value })} />

                        <select value={this.state.mainTopic} onChange={this.handleTopicChange}>
                            <option value="JavaScript">JavaScript</option>
                            <option value="Python"> Python</option>
                            <option value="Angular"> Angular</option>
                            <option value="React"> React</option>
                            <option value="Node JS"> Node JS</option>
                            <option value="MongoDB"> MongoDB</option>
                        </select>
                        <select value={this.state.skillLevel} onChange={this.handleSkillChange}>
                            <option value="Beginner">Beginner</option>
                            <option value="Intermediate"> Intermediate</option>
                            <option value="Advanced"> Advanced</option>
                        </select>
                    </div>
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

                    <button onClick={() => this.onSubmit()}>Submit</button>
                </Container>
            </form>
        )
    }
}

export default CreateWebinar;