import React, {useState} from 'react';
import MyForm from './component/Users/MyForm';
import UserList from './component/Users/UserList';

function App() {
  const [userList, setUserList] = useState([]);

  const addUserHandler = (uName, uAge) =>{
    setUserList((prevUsersList) =>{
      return [...prevUsersList, {name: uName, age: uAge, id:Math.random().toString() }];
    });
  };

  return (
     <div>
      <MyForm onAddUser={addUserHandler} />
      <UserList users={userList} />
     </div>
  );
}

export default App;