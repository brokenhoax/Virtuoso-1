import React, { Component } from "react";
import axios from "axios";
import styles from "./Profile.module.css";

class Profile extends Component {
  state = {
    persons: [],
  };

  componentDidMount() {
    axios.get("http://localhost:3000/user/get/all").then((res) => {
      const persons = res.data.data;
      console.log(persons);
      this.setState({ persons });
    });
  }

  render() {
    return (
      <div className={styles.testy}>
        <ul className={styles.classy}>
          {this.state.persons.map((person) => (
            <li className="userCard" key={person._id}>
              <div>{"Name: " + person.firstname + " " + person.lastname}</div>
              <div>{"Email: " + person.email}</div>
              <div>{"Password: " + person.password}</div>
              <div>{"Role: " + person.role}</div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Profile;
