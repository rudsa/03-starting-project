import React, { useState } from "react";

const AddUserForm = (props) => {
  const [userName, setUserName] = useState("");
  const [userAge, setUserAge] = useState();

  const userNameChangeHandler = (event) => {
    setUserName(event.target.value);
  };

  const userAgeChangeHandler = (event) => {
    setUserAge(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const userData = {
      userName: userName,
      userAge: userAge,
    };

    props.onSaveUserData(userData);
  };

  return (
    <form onSubmit={submitHandler}>
      <div>
        <div>
          <label>Username</label>
          <input type="text" onChange={userNameChangeHandler}></input>
        </div>
        <div>
          <label>Age (Years)</label>
          <input type="number" onChange={userAgeChangeHandler}></input>
        </div>
      </div>
      <div>
        <button type="submit">Add User</button>
      </div>
    </form>
  );
};

export default AddUserForm;
