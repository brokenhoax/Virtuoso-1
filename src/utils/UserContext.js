import React, { useState, createContext } from "react";

export const userContext = createContext();

export const UserProvider = (props) => {
  const [users, setUsers] = useState([
    {
      data: [
        {
          favorite: [
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

  return (
    <UserContext.Provider value={[users, setUsers]}>
      {props.children}
    </UserContext.Provider>
  );
};
