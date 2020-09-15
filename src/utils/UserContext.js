import React, { useState, createContext, useEffect, useContext } from "react";
import axios from "axios";

export const UserContext = createContext();

export function useUser() {
  return useContext(UserContext);
}

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState([
    {
      data: [
        {
          favorite: [
            "5f5eab5cb441a1188006588f",
            "5f5eab5eb441a118800658a4",
            "5f5eab5eb441a118800658a5",
            "5f5eab5fb441a118800658a6",
          ],
          registered: [
            "5f5eab5cb441a1188006588f",
            "5f5eab5eb441a118800658a4",
            "5f5eab5eb441a118800658a5",
            "5f5eab5fb441a118800658a6",
            "5f5eab5fb441a118800658a7",
            "5f5eab60b441a118800658a8",
            "5f5eab60b441a118800658a9",
            "5f5eab61b441a118800658aa",
            "5f5eab61b441a118800658ab",
          ],
          completedVideo: [],
          passedQuiz: [],
          _id: "5f5eab5db441a11880065897",
          firstname: "Sasha",
          lastname: "Sashason",
          email: "sasha@testmail.com",
          password: "testingupdate",
          role: "Virtuoso",
          userCreated: "2020-09-13T23:29:33.517Z",
          __v: 9,
        },
      ],
    },
  ]);

  // useEffect(() => {
  //   axios
  //     .get(
  //       `https://salty-fortress-9010-virt-b.herokuapp.com/user/get/id/${user.data._id}`
  //     )
  //     .then((res) => {
  //       const results = res.data.data;
  //       console.log("Axios Key:" + Object.keys(results));
  //       console.log("Axios Value:" + results.firstname);
  //       console.log("Axios Entries:" + Object.entries(results));
  //       const obj = Object.entries(results);
  //       setUser(obj);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);

  // console.log("This shows Your User!" + user);

  return (
    <UserContext.Provider value={[user, setUser]}>
      {children}
    </UserContext.Provider>
  );
};
