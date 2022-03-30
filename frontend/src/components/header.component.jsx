import { FaSignInAlt, FaSignOutAlt, FaUser } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout, reset } from '../features/auth/authSlice';

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate('/');
  };

  return (
    <div>
      <div>
        <Link to='/'>Home</Link>
      </div>
      <ul>
        {user ? (
          <li>
            <button onClick={onLogout}>
              <FaSignOutAlt /> Logout
            </button>
          </li>
        ) : (
          <>
            <li>
              <Link to='/login'>
                <FaSignInAlt /> Login
              </Link>
            </li>
            <li>
              <Link to='/register'>
                <FaUser /> Register
              </Link>
            </li>
          </>
        )}
      </ul>
      {user ? (
        <>
          <h1>Hello @{user.username}!</h1>
          <h2>{user.name}</h2>
          <h3>{user.email}</h3>
        </>
      ) : (
        <>Please login to see your details</>
      )}
    </div>
  );
};
export default Header;
