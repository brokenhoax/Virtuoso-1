import React, { Component } from 'react';

class CreateWebinar extends Component {
    state = {
        title: '',
        description: '',
        timezone: '',
        day: 0,
        month: 0,
        year: 0,
        startTime: 0,
        endTime: 0,
        duration: 0,
        hosts: [],
        mainTopic: '',
        SkillLevel: '',
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

        console.log(this.state);
    }



    render() {
        return (
            <form>
                <div>
                    <input placeholder="title" value={this.state.title} onChange={e => this.setState({ title: e.target.value })} />
                    <input placeholder="description" value={this.state.description} onChange={e => this.setState({ description: e.target.value })} />

                    <input placeholder="timezone" value={this.state.timezone} onChange={e => this.setState({ timezone: e.target.value })} />
                    <input placeholder="day" value={this.state.day} onChange={e => this.setState({ day: e.target.value })} />
                    <input placeholder="month" value={this.state.month} onChange={e => this.setState({ month: e.target.value })} />
                    <input placeholder="year" value={this.state.year} onChange={e => this.setState({ year: e.target.value })} />
                    <input placeholder="startTime" value={this.state.startTime} onChange={e => this.setState({ startTime: e.target.value })} />
                    <input placeholder="endTime" value={this.state.endTime} onChange={e => this.setState({ endTime: e.target.value })} />
                    <input placeholder="duration" value={this.state.duration} onChange={e => this.setState({ duration: e.target.value })} />

                    <input placeholder="hosts" value={this.state.hosts} onChange={e => this.setState({ hosts: e.target.value })} />
                    <input placeholder="mainTopic" value={this.state.mainTopic} onChange={e => this.setState({ mainTopic: e.target.value })} />
                    <input placeholder="skillLevel" value={this.state.skillLevel} onChange={e => this.setState({ skillLevel: e.target.value })} />
                </div>
                <div>
                <label>
                    educational
                <input type="checkbox" name="educational" value={this.state.educational} onChange={(e) => { this.trueFalseRadio(e) }} />
                </label>
                <label>
                    networking
                <input type="checkbox" name="networking" value={this.state.networking} onChange={(e) => { this.trueFalseRadio(e) }} />
                </label>
                <label>
                    finance
                <input type="checkbox" name="finance" value={this.state.finance} onChange={(e) => { this.trueFalseRadio(e) }} />
                </label>
                <label>
                    marketing
                <input type="checkbox" name="marketing" value={this.state.marketing} onChange={(e) => { this.trueFalseRadio(e) }} />
                </label>
                <label>
                    engineering
                    <input type="checkbox" name="engineering" value={this.state.engineering} onChange={(e) => { this.trueFalseRadio(e) }} />
                </label>
                </div>

                <button onClick={() => this.onSubmit()}>Submit</button>
            </form>
        )
    }
}

export default CreateWebinar;