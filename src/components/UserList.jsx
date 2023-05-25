import React from 'react';
<box-icon type="solid" name="edit"></box-icon>;

const UserList = ({ listUser, deleteUser, selectUser }) => {
  return (
    <div>
      <h1 className="title">Usuarios</h1>
      {listUser?.map((user) => (
        <li key={user.id} className="container-user">
          <h2 className="name">
            {user.first_name} {user.last_name}
          </h2>
          <hr />
          <h2 className="h2">
            <span>Email </span> : {user.email}
          </h2>
          <h2 className="h2">
            <span>Contraseña</span> : {user.password}
          </h2>
          <h2 className="h2">
            <span>Birthday</span> : {user.birthday}
          </h2>
          <button onClick={() => deleteUser(user.id)} className="btn-delete">
            Eliminar<i className="bx bxs-trash"></i>
          </button>
          <button onClick={() => selectUser(user.id)} className="btn-select">
            Editar <i className="bx bxs-edit"></i>
          </button>
        </li>
      ))}
    </div>
  );
};

export default UserList;
