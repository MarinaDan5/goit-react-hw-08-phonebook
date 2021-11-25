import React from 'react';
import { useEffect, Suspense, lazy } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';

import { authOperations } from './redux/auth';

import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';
import AppBar from 'components/AppBar/AppBar';
import Loader from './components/Loader/Loader';

const HomeView = lazy(() => import('./view/HomeView/HomeView'));
const RegisterView = lazy(() => import('./view/RegisterView/RegisterView'));
const LoginView = lazy(() => import('./view/LoginView/LoginView'));
const ContactsView = lazy(() => import('./view/ContactsView/ContactsView'));

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => dispatch(authOperations.fetchCurrentUser()), [dispatch]);
  return (
    <div>
      <AppBar />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<PublicRoute />}>
            <Route path="/" element={<HomeView />} />
          </Route>
          <Route
            path="/register"
            element={<PublicRoute restricted redirectTo="/contacts" />}
          >
            <Route path="/register" element={<RegisterView />} />
          </Route>
          <Route
            path="/login"
            element={<PublicRoute restricted redirectTo="/contacts" />}
          >
            <Route path="/login" element={<LoginView />} />
          </Route>
          <Route element={<PrivateRoute path="/contacts" redirectTo="/" />}>
            <Route path="/contacts" element={<ContactsView />} />
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
}
