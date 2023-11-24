import { Navigate, Outlet } from 'react-router-dom';

const validatedRole = ['Admin', 'Staff', 'SuperAdmin'];

const useAuth = () => {
	const token = window.localStorage.getItem('token');
	const user = { login: token };
	return !!user.login;
};

const useRole = () => {
	const user = window.localStorage.getItem('userData');
	const { role } = user;

	return validatedRole.includes(role) && role;
};

const PrivateRoute = () => {
	const isAuth = useAuth();
	const role = useRole();
	return isAuth ? <Outlet context={role} /> : <Navigate replace to='/login' />;
};

export default PrivateRoute;
