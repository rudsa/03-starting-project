import React, { useState } from "react";

import AddUser from "./Users/AddUser";
import UserList from "./Users/UserList";

const Site = () => {
  const [userArrayData, setUserArrayData] = useState([]);
  const saveUserData = (userJsonData) => {
    setUserArrayData([userJsonData, ...userArrayData]);
  };
  return (
    <div>
      <div>
        <AddUser onSaveUserData={saveUserData} />
        {userArrayData.length > 0 && <UserList userDatas={userArrayData} />}
      </div>
    </div>
  );
};

export default Site;
