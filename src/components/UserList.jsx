import React from 'react';

const UserList = ({ listUser, deleteUser, selectUser }) => {
  return (
    <div>
      <h1>Usuarios</h1>
      {listUser?.map((user) => (
        <li key={user.id}>
          <h2>
            Name : {user.first_name} {user.last_name}
          </h2>
          <h3>Email : {user.email}</h3>
          <h3>Contraseña : {user.password}</h3>
          <h3>Birthday : {user.birthday}</h3>
          <button onClick={() => deleteUser(user.id)}>Eliminar</button>
          <button onClick={() => selectUser(user.id)}>Editar</button>
        </li>
      ))}
    </div>
  );
};

export default UserList;
