import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';

import PrivateRoute from './privateRoute';

const LoginPage = lazy(() => import('../pages/LoginPage'));
const SignupPage = lazy(() => import('../pages/SignupPage'));
const HomePage = lazy(() => import('../pages/HomePage'));
const Dashboard = lazy(() => import('../pages/Dashboard'));
const ErrorPage = lazy(() => import('../pages/ErrorPage'));

const Router = () => {
	return (
		<Routes>
			<Route path='/' element={<HomePage />} />
			<Route path='/signup' element={<SignupPage />} />
			<Route path='/login' element={<LoginPage />} />
			<Route element={<PrivateRoute />}>
				<Route path='/dashboard' element={<Dashboard />} />
			</Route>
			<Route path='*' element={<ErrorPage />} />
		</Routes>
	);
};

export default Router;
