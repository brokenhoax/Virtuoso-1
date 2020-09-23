import React, { createContext, useState, useContext } from "react";
import styles from "./Profile.module.css";
import "../../App.css";
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
      userCreated: "",
    },
  });

  const onSubmitLogin = (e) => {
    e.preventDefault();
    axios
      .get(
        `https://salty-fortress-9010-virt-b.herokuapp.com/user/get/verify/${user.userdata.email}/${user.userdata.password}`
      )
      .then((res) => {
        const results = res.data.data;
        console.log(`Results of Axios Call: ${JSON.stringify(results)}`);
        setUser({ logged: true, userdata: results });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const onSubmitUpdate = (e) => {
    e.preventDefault();
    axios
      .patch(
        `https://salty-fortress-9010-virt-b.herokuapp.com/user/update/${user.userdata._id}`,
        user.userdata
      )
      .then((res) => {
        axios
          .get(
            `https://salty-fortress-9010-virt-b.herokuapp.com/user/get/id/${user.userdata._id}`
          )
          .then((res) => {
            const results = res.data.data;
            console.log(`Results of Axios Call: ${JSON.stringify(results)}`);
            setUser({ logged: true, userdata: results });
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const onSubmitDelete = (e) => {
    e.preventDefault();
    axios
      .delete(
        `https://salty-fortress-9010-virt-b.herokuapp.com/user/delete/${user.userdata._id}`,
        user.userdata
      )
      .then((res) => {
        console.log(`User Deleted!`);
        setUser({
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
            userCreated: "",
          },
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleInputChange = (event) => {
    const {
      target: { name, value },
    } = event;
    setUser({
      logged: user.logged,
      userdata: { ...user.userdata, [name]: value },
    });
  };

  if (user.logged) {
    return (
      <div className={styles.main}>
        <div className={styles.profileWrapper}>
          <h1 className={styles.profileHeader}>Welcome!</h1>
          <div className={styles.profileSection}>
            <div className={styles.profileKey}>
              <input
                name="email"
                className={styles.inputField}
                placeholder=" Email"
                autoComplete="off"
                value={user.userdata.email}
                onChange={(event) => {
                  handleInputChange(event);
                }}
              />
            </div>
            <div className={styles.profileValue}>
              <input
                name="password"
                type="password"
                className={styles.inputField}
                placeholder=" Password"
                autoComplete="off"
                value={user.userdata.password}
                onChange={(event) => {
                  handleInputChange(event);
                }}
              />
            </div>
            <div className={styles.profileButton}>
              <button
                className={styles.myBud}
                onClick={(e) => onSubmitLogin(e)}
              >
                Log In
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  } else if (!user.logged) {
    return (
      <div className={styles.main}>
        <div className={styles.profileContainer}>
          <div className={styles.profileWrapper}>
            <h1 className={styles.profileHeader}>My Profile</h1>
            <div className={styles.userImage}>
              <img
                src="../../assets/images/User.png"
                className={styles.userPic}
                alt="User Profile"
              />
            </div>
            <div className={styles.userCard}>
              <div className={styles.profileSection}>
                <div className={styles.loggedKey}>
                  <strong>Name:</strong>
                </div>
                <div className={styles.loggedValue}>
                  {user.userdata.firstname} {user.userdata.lastname}
                </div>
              </div>
              <div className={styles.profileSection}>
                <div className={styles.loggedKey}>
                  <strong>Email:</strong>
                </div>
                <div className={styles.loggedValue}>
                  <input
                    name="email"
                    type="email"
                    className={styles.inputField}
                    placeholder="Edit Your Email Address"
                    autoComplete="off"
                    value={user.userdata.email}
                    onChange={(event) => {
                      handleInputChange(event);
                    }}
                  />
                </div>
              </div>
              <div className={styles.profileSection}>
                <div className={styles.loggedKey}>
                  <strong>Password:</strong>
                </div>
                <div className={styles.loggedValue}>
                  <input
                    name="password"
                    type="password"
                    className={styles.inputField}
                    placeholder="Edit Your Password"
                    autoComplete="off"
                    value={user.userdata.password}
                    onChange={(event) => {
                      handleInputChange(event);
                    }}
                  />
                </div>
              </div>
              <div className={styles.profileSection}>
                <div className={styles.loggedKey}>
                  <strong>Role:</strong>
                </div>
                <div className={styles.loggedValue}>{user.userdata.role}</div>
              </div>
              <div className={styles.myBuds}>
                <button
                  className={styles.myBud}
                  onClick={(e) => onSubmitUpdate(e)}
                >
                  Update
                </button>
                <button
                  className={styles.myBud}
                  onClick={(e) => onSubmitDelete(e)}
                >
                  Sign Out
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Profile;
