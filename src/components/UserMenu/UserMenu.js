import { useDispatch, useSelector } from 'react-redux';
import { authSelectors, authOperations } from '../../redux/auth';

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUserName);

  return (
    <>
      <div>
        <img scr="" alt="" width="32" />
        <span>Добро пожаловать, {name}</span>
        <button type="button" onClick={() => dispatch(authOperations.logOut())}>
          Выйти
        </button>
      </div>
    </>
  );
}
