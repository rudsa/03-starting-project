import React, { useState } from "react";
import Card from "../UI/Card";
import Button from "./Button";
import ErrorModal from "../ErrorModal/ErrorModal";

const AddUser = (props) => {
  const [userName, setUserName] = useState("");
  const [userAge, setUserAge] = useState("");

  const userNameChangeHandler = (event) => {
    setUserName(event.target.value);
  };

  const userAgeChangeHandler = (event) => {
    setUserAge(event.target.value);
  };

  const addUserHandler = (event) => {
    event.preventDefault();

    if (userInputChecker()) {
      const userData = {
        userName: userName,
        userAge: userAge,
      };

      props.onSaveUserData(userData);
    }
    setUserName("");
    setUserAge("");
  };

  const userInputChecker = () => {
    if (userName === "" || userAge === "") {
      ErrorModal("test1");
      return false;
    }
    if (userAge <= 0) {
      ErrorModal("test2");
      return false;
    }
    return true;
  };

  return (
    <Card>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          value={userName}
          onChange={userNameChangeHandler}
        ></input>
        <label htmlFor="userage">Age (Years)</label>
        <input
          id="userage"
          type="number"
          value={userAge}
          onChange={userAgeChangeHandler}
        ></input>
        <Button />
      </form>
    </Card>
  );
};

export default AddUser;
