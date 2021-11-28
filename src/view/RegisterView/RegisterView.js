import React from 'react';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import authOperations from '../../redux/auth/auth-operations';
import '../RegisterView/RegisterView.css';

export default function RegisterView() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const handleRegisterChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);

      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(authOperations.register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <div className="container">
      <h1 className=" mainTitle">Register Page</h1>
      <form className="form" onSubmit={handleSubmit}>
        <label>
          <p className="form__lable">Name </p>
          <input
            className="form__input"
            type="name"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            value={name}
            onChange={handleRegisterChange}
            required
          />
        </label>
        <label>
          <p className="form__lable">E-mail </p>
          <input
            className="form__input"
            type="email"
            name="email"
            value={email}
            onChange={handleRegisterChange}
            required
          />
        </label>
        <label className="form__lable">
          <p className="form__lable"> Password</p>
          <input
            className="form__input"
            type="password"
            name="password"
            title="Пароль должен составлять не менее 8 символов"
            value={password}
            onChange={handleRegisterChange}
            required
          />
        </label>

        <button type="submit" className="button">
          Register
        </button>
      </form>
    </div>
  );
}
