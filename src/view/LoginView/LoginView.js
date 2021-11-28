import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import authOperations from '../../redux/auth/auth-operations';

export default function LoginView() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);

      default:
        break;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(authOperations.logIn({ email, password }));

    setEmail('');
    setPassword('');
  };

  return (
    <div>
      <h1 className="mainTitle">Login Page</h1>
      <form className="form" onSubmit={handleSubmit}>
        <label>
          <p className="form__lable">E-mail </p>
          <input
            className="form__input"
            type="email"
            name="email"
            // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            value={email}
            onChange={handleChange}
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
            onChange={handleChange}
            required
          />
        </label>

        <button type="submit" className="button">
          Log in
        </button>
      </form>
    </div>
  );
}
