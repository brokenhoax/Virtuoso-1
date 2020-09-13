import React, { Component } from "react";
import axios from "axios";
import styles from "./Profile.module.css";

class Profile extends Component {
  state = {
    persons: [],
  };

  componentDidMount() {
    axios
      .get("http://localhost:3000/user/get/id/5f5d0a933ff9981734ab95a9")
      .then((res) => {
        const persons = res.data.data;
        console.log(persons);
        this.setState({ persons });
      });
  }

  render() {
    return (
      <div className={styles.profileContainer}>
        <ul className={styles.classy}>
          <div>
            <img src="../../assets/images/User.png" alt="User Profile" />
          </div>
          <li className={styles.userCard}>
            <div>{"Name: "}</div>
            <div>{"Email: "}</div>
            <div>{"Password: "}</div>
            <div>{"Role: "}</div>
          </li>
        </ul>
      </div>
    );
  }
}

export default Profile;
