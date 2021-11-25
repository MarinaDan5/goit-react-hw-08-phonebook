import { useSelector } from 'react-redux';
import { authSelectors } from '../../redux/auth';
import Navigation from '../Navigation/Navigations';
import UserMenu from '../UserMenu/UserMenu';
import AuthMenu from '../AuthMenu/AuthMenu';
import '../AppBar/AppBar.css';

const AppBar = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <header className="headerBar">
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthMenu />}
    </header>
  );
};

export default AppBar;
