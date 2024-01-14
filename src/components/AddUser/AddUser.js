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

  const submitHandler = (event) => {
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
      alert("test!");
      return false;
    }
    if (userAge <= 0) {
      alert("test!!");
      return false;
    }
    return true;
  };

  return (
    <Card>
      <form onSubmit={submitHandler}>
        <div>
          <div>
            <label>Username</label>
            <input
              type="text"
              value={userName}
              onChange={userNameChangeHandler}
            ></input>
          </div>
          <div>
            <label>Age (Years)</label>
            <input
              type="number"
              value={userAge}
              onChange={userAgeChangeHandler}
            ></input>
          </div>
        </div>
        <div>
          <Button />
        </div>
      </form>
    </Card>
  );
};

export default AddUser;
