import React from "react";
import Card from "../UI/Card";

const UserList = (props) => {
  return (
    <Card>
      {props.userDatas.map((userData) => {
        return (
          <p>{userData.userName + " (" + userData.userAge + " years old)"}</p>
        );
      })}
    </Card>
  );
};

export default UserList;
