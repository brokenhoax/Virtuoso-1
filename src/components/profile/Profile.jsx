import React, { Component } from "react";
import styles from "./Profile.module.css";

class Profile extends Component {
  state = {
    persons: [],
    firstname: "Ricky",
    lastname: "Bobby",
    email: "rbobby42@gmail.com",
    password: "**********",
    role: "Virtuoso",
    userID: "5f5eab5db441a11880065897",
  };

  render() {
    return (
      <div className={styles.profileContainer}>
        <h1 className={styles.profileHeader}>My Profile</h1>
        <ul className={styles.profileWrapper}>
          <div className={styles.userImage}>
            <img
              src="../../assets/images/User.png"
              className={styles.userPic}
              alt="User Profile"
            />
          </div>
          <li className={styles.userCard}>
            <div className={styles.profileSection}>
              <div className={styles.profileKey}>
                <strong>Name:</strong>
              </div>
              <div className={styles.profileValue}>
                {this.state.firstname} {this.state.lastname}
              </div>
            </div>
            <div className={styles.profileSection}>
              <div className={styles.profileKey}>
                <strong>Email:</strong>
              </div>
              <div className={styles.profileValue}>{this.state.email}</div>
            </div>
            <div className={styles.profileSection}>
              <div className={styles.profileKey}>
                <strong>Password:</strong>
              </div>
              <div className={styles.profileValue}>{this.state.password}</div>
            </div>
            <div className={styles.profileSection}>
              <div className={styles.profileKey}>
                <strong>Role:</strong>
              </div>
              <div className={styles.profileValue}>{this.state.role}</div>
            </div>
            <div className={styles.buttons}>
              <button className={styles.update}>Update</button>
              <button className={styles.signOut}>Sign Out</button>
            </div>
          </li>
        </ul>
      </div>
    );
  }
}

export default Profile;
