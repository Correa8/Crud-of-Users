import { useForm } from 'react-hook-form';
import { useEffect } from 'react';

const UserForm = ({ addUser, userSelected, editUser }) => {
  const { register, handleSubmit, reset } = useForm();

  const empyUser = {
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    birthday: '',
  };

  useEffect(() => {
    if (userSelected) {
      reset(userSelected);
    } else {
      reset(empyUser);
    }
  }, [userSelected]);

  const submit = (data) => {
    if (userSelected) {
      editUser(data);
    } else {
      addUser(data);
      reset(empyUser);
    }
  };
  return (
    <div className="all">
      <form
        onSubmit={handleSubmit(submit)}
        className=" 10px bg-gradient-to-t
      from-yellow-300 via-300 to-blue-600 rounded-3xl"
      >
        <h1 className="new-user">Nuevo Usuario</h1>
        <div className="target-user">
          <label htmlFor="firsName"></label>
          <input
            type="text"
            id="firsName"
            placeholder="Nombre"
            required
            {...register('first_name')}
          />
        </div>
        <div className="target-user">
          <label htmlFor="lastName">
            <input
              type="text"
              id="lastName"
              placeholder="Apellido"
              required
              {...register('last_name')}
            />
          </label>
        </div>
        <div className="target-user">
          <label htmlFor="email">
            <input
              type="text"
              id="email"
              placeholder="Email"
              required
              {...register('email')}
            />
          </label>
        </div>
        <div className="target-user">
          <label htmlFor="password">
            <input
              type="text"
              id="password"
              placeholder="Contraseña"
              required
              {...register('password')}
            />
          </label>
        </div>
        <div className="target-user">
          <label htmlFor="birthday">
            <input type="date" id="birthday" required {...register('birthday')} />
          </label>
        </div>
        <button type="submit" className="">
          {userSelected ? 'Editar' : 'Crear'}
        </button>
      </form>
    </div>
  );
};

export default UserForm;
