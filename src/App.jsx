import React from 'react';
import UserList from './components/UserList';
import UserForm from './components/UserForm';
import axios from 'axios';
import './App.css';
import { useState, useEffect } from 'react';

const App = () => {
  const [listUser, setListUser] = useState([]);
  const [userSelected, setUserSelected] = useState(null);
  /*GET peticion total */
  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios
      .get('https://users-crud.academlo.tech/users/')
      .then((res) => {
        setListUser(res.data);
        console.log(res.data);
      })
      .catch((error) => console.error(error));
  };

  /*POST para mi UserForm*/
  const addUser = (addUsers) => {
    axios
      .post('https://users-crud.academlo.tech/users/', addUsers)
      .then(() => {
        getData();
        setUserSelected(null);
      })
      .catch((error) => console.error(error));
  };
  /*DELETE User */
  const deleteUser = (idUser) => {
    axios
      .delete(`https://users-crud.academlo.tech/users/${idUser}`)
      .then(() => getData())
      .catch((error) => console.error(error));
  };
  /*GET Editar Usuario */
  const selectUser = (idUser) => {
    axios
      .get(`https://users-crud.academlo.tech/users/${idUser}`)
      .then((res) => {
        setUserSelected(res.data);
        console.log(res.data);
      })
      .catch((error) => console.error(error));
  };
  /*PUT Remover lo de UserForm */
  const editUser = (user) => {
    axios
      .put(`https://users-crud.academlo.tech/users/${user.id}/`, user)
      .then((res) => {
        getData();
        setUserSelected(null);
        console.log(res);
      })
      .catch((error) => console.error(error));
  };

  return (
    <div>
      <UserList listUser={listUser} deleteUser={deleteUser} selectUser={selectUser} />
      <UserForm addUser={addUser} userSelected={userSelected} editUser={editUser} />
    </div>
  );
};

export default App;
