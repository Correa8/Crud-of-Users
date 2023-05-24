import { useForm } from 'react-hook-form';
import { useEffect } from 'react';

const UserForm = ({ addUser, userSelected }) => {
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
    addUser(data);
  };
  return (
     <div >
      <form
        onSubmit={handleSubmit(submit)}
        className="w-96 10px bg-gradient-to-t
      from-yellow-300 via-300 to-blue-600 rounded-3xl"
      >
        <h1>Nuevo Usuario</h1>
        <div className="target-user">
          <label htmlFor="firsName"></label>
          <input type="text" id="firsName" required {...register('first_name')} />
        </div>
        <div className="target-user">
          <label htmlFor="lastName">
            <input type="text" id="lastName" required {...register('last_name')} />
          </label>
        </div>
        <div className="target-user">
          <label htmlFor="email">
            <input type="text" id="email" required {...register('email')} />
          </label>
        </div>
        <div className="target-user">
          <label htmlFor="password">
            <input type="text" id="password" required {...register('password')} />
          </label>
        </div>
        <div className="target-user">
          <label htmlFor="birthday">
            <input type="date" id="birthday" required {...register('birthday')} />
          </label>
        </div>
        <button>Agregar Nuevo Usuario</button>
      </form>
    </div>
  );
};

export default UserForm;
