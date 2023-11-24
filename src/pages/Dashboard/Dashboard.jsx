import { useOutletContext } from 'react-router-dom';
const Dashboard = () => {
	const [role] = useOutletContext();
	console.log('🚀 ~ file: Dashboard.jsx:4 ~ Dashboard ~ role:', role);
	return <div>Dashboard Page</div>;
};

export default Dashboard;
