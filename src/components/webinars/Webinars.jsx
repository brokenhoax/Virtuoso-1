import React, { useState, useContext, useEffect } from "react";
import Cards from "../cards/Cards";
import styles from "./Webinars.module.css";
import searchStyle from "../search/Search.module.css";
import Search from "../search/Search";
import { BrowserRouter as Router } from "react-router-dom";
import { WebinarContext } from "../../utils/WebinarContext";
import axios from "axios";

const Webinars = () => {
  let [webinars, setWebinars] = useContext(WebinarContext);
  // let [currentWebinars, getWebinars] = useState([]);

  // useEffect(() => {
  //   axios
  //     .get("https://salty-fortress-9010-virt-b.herokuapp.com/webinar/get/all")
  //     .then((res) => {
  //       const currentWebinars = res.data.data;
  //       console.log("Axios Webinars:" + currentWebinars);
  //       getWebinars(currentWebinars);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);

  // Search Bar
  const [searchTerm, setSearchTerm] = useState("");
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
    console.log("Hi! From: onChange", event.target.value);
  };

  return (
    <Router>
      <Cards
        className={styles.webinars}
        webinars={webinars}
        search={searchTerm}
        header={"Upcoming Webinars"}
      />
      <Search
        className={searchStyle.test}
        onChange={handleChange}
        value={searchTerm}
      />
    </Router>
  );
};

export default Webinars;

// let [search, setSearch] = useState("");

// const handleChange = (event) => {
//   setSearch(event.target.value);
//   console.log("Hi! From: onChange", event.target.value);
// };
