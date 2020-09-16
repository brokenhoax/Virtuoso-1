import React, { createContext, useState, useContext } from "react";
import styles from "./Profile.module.css";
import axios from "axios";

// import { useUser } from "../../utils/UserContext";

const Profile = () => {

  const UserContext = createContext();

  function useUser() {
    return useContext(UserContext);
  }

  const [user, setUser] = useState({
    logged: false,
    userdata: {
      favorite: [],
      registered: [],
      completedVideo: [],
      passedQuiz: [],
      _id: "",
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      role: "",
      userCreated: ""
    }
  });

  const onSubmitLogin = e => {
    e.preventDefault();
    axios.get(`https://salty-fortress-9010-virt-b.herokuapp.com/user/get/verify/${user.userdata.email}/${user.userdata.password}`)
      .then((res) => {
        const results = res.data.data;
        console.log(`Results of Axios Call: ${JSON.stringify(results)}`);
        setUser({logged : true, userdata: results});
      })
      .catch((err) => {
        console.log(err);
      });
  }

  const onSubmitUpdate = e => {
    e.preventDefault();
    axios.patch(`https://salty-fortress-9010-virt-b.herokuapp.com/user/update/${user.userdata._id}`,user.userdata)
      .then((res) => {
        axios.get(`https://salty-fortress-9010-virt-b.herokuapp.com/user/get/id/${user.userdata._id}`)
        .then((res) => {
          const results = res.data.data;
          console.log(`Results of Axios Call: ${JSON.stringify(results)}`);
          setUser({logged : true, userdata: results});
        })
        .catch((err) => {
          console.log(err);
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  const onSubmitDelete = e => {
    e.preventDefault();
    axios.delete(`https://salty-fortress-9010-virt-b.herokuapp.com/user/delete/${user.userdata._id}`, user.userdata)
      .then((res) => {
        console.log(`User Deleted!`);
        setUser({logged : false, userdata: {
          favorite: [],
          registered: [],
          completedVideo: [],
          passedQuiz: [],
          _id: "",
          firstname: "",
          lastname: "",
          email: "",
          password: "",
          role: "",
          userCreated: ""
        }});
      })
      .catch((err) => {
        console.log(err);
      });
  }


  const handleInputChange = event => {
    const { target: { name, value } } = event
    setUser({ logged: user.logged, userdata: { ...user.userdata, [name]: value } });
  }



  if (!user.logged) {
    return (
      <div className={styles.profileContainer}>
      <h1 className={styles.profileHeader}>Please Log In</h1>
      <ul className={styles.profileWrapper}>
        <li className={styles.userCard}>
          <div className={styles.profileSection}>
            <div className={styles.profileKey}>
              <input name="email"
                placeholder="Please enter your Email"
                autoComplete="off"
                value={user.userdata.email}
                onChange={event => { handleInputChange(event) }} />
            </div>
            <div className={styles.profileValue}>
              <input name="password"
                type="password"
                placeholder="Please enter your Password"
                autoComplete="off"
                value={user.userdata.password}
                onChange={event => { handleInputChange(event) }} />
            </div>
          </div>
          <div className={styles.profileSection}>
            <div className={styles.profileKey}>
              <button onClick={(e) => onSubmitLogin(e)}>Log In!</button>
            </div>
          </div>
        </li>
      </ul>
    </div>
    );
  }
  else if (user.logged) {
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
              {user.userdata.firstname} {user.userdata.lastname}
            </div>
          </div>
          <div className={styles.profileSection}>
            <div className={styles.profileKey}>
              <strong>Email:</strong>
            </div>
            <div className={styles.profileValue}>
              <input name="email"
                  placeholder="Update your Email Here!"
                  autoComplete="off"
                  value={user.userdata.email}
                  onChange={event => { handleInputChange(event) }} />
            </div>
          </div>
          <div className={styles.profileSection}>
            <div className={styles.profileKey}>
              <strong>Password:</strong>
            </div>
            <div className={styles.profileValue}>
              <input name="password"
                  type="password"
                  placeholder="Update your Password Here!"
                  autoComplete="off"
                  value={user.userdata.password}
                  onChange={event => { handleInputChange(event) }} />
            </div>
          </div>
          <div className={styles.profileSection}>
            <div className={styles.profileKey}>
              <strong>Role:</strong>
            </div>
            <div className={styles.profileValue}>{user.userdata.role}</div>
          </div>
          <div className={styles.buttons}>
            <button className={styles.update} onClick={(e) => onSubmitUpdate(e)}>Update</button>
            <button className={styles.signOut} onClick={(e) => onSubmitDelete(e)}>Sign Out</button>
          </div>
        </li>
      </ul>
    </div>
    );
  }
}
 
export default Profile;