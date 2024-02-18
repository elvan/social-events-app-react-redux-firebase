import { onAuthStateChanged } from 'firebase/auth';
import { useEffect } from 'react';
import { Outlet, ScrollRestoration, useLocation } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import { logout, signIn } from '../../features/auth/authSlice';
import HomePage from '../../features/home/HomePage';
import ModalManager from '../common/modals/ModalManager';
import { auth } from '../config/firebase';
import { useAppDispatch } from '../store/store';
import NavBar from './nav/NavBar';

function App() {
  const location = useLocation();
  const dispatch = useAppDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, {
      next: (user) => {
        if (user) {
          dispatch(signIn(user));
        } else {
          dispatch(logout());
        }
      },
      error: (error) => console.log(error),
      complete: () => {},
    });
  }, [dispatch]);

  return (
    <>
      {location.pathname === '/' ? (
        <HomePage />
      ) : (
        <>
          <ScrollRestoration />
          <ModalManager />
          <NavBar />
          <Container className='main'>
            <Outlet />
          </Container>
        </>
      )}
    </>
  );
}

export default App;
