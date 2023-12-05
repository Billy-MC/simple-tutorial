import { GoogleLogin, useGoogleLogin, googleLogout } from '@react-oauth/google';
import { Button } from '@mui/material';
import { useState, useEffect } from 'react';
import { isEmpty } from 'lodash';

const SignupPage = () => {
	const [userInfo, setUserInfo] = useState([]);
	console.log('🚀 ~ file: SignupPage.jsx:7 ~ SignupPage ~ userInfo:', userInfo);
	const [profile, setProfile] = useState({});
	console.log('🚀 ~ file: SignupPage.jsx:11 ~ SignupPage ~ profile:', profile);

	const responseOutput = (response) => {
		console.log(response);
	};

	const errorOutput = (error) => {
		console.error(error);
	};

	// const logInHandler = useGoogleLogin({
	// 	onSuccess: (response) => setUserInfo(response),
	// 	onError: (error) => console.error(`Log in Field: ${error}`),
	// });

	const logInHandler = async () => {
		const width = 450;
		const height = 600;
		const left = (window.screen.width - width) / 2;
		const top = (window.screen.height - height) / 2;
		window.open(
			'http://localhost:8000/api/v1/auth/google',
			'popup',
			`height=${height},width=${width},top=${top},left=${left}`
		);
	};

	const logOutHandler = () => {
		googleLogout();
		setProfile(null);
	};

	// useEffect(() => {
	// 	const abortController = new AbortController();

	// 	if (userInfo && !isEmpty(userInfo)) {
	// 		axios
	// 			.get(
	// 				`https://www.googleapis.com/oauth2/v3/userinfo?access_token=${userInfo.access_token}`,
	// 				{
	// 					headers: {
	// 						Authorization: `Bearer ${userInfo.access_token}`,
	// 						Accept: 'application/json',
	// 					},
	// 					signal: abortController.signal,
	// 				}
	// 			)
	// 			.then((response) => {
	// 				setProfile(response.data);
	// 			})
	// 			.catch((error) => console.error(error));
	// 	}

	// 	return () => {
	// 		abortController.abort();
	// 	};
	// }, [userInfo]);

	return (
		<div>
			{/* <GoogleLogin onSuccess={responseOutput} onError={errorOutput} text='signup_with' /> */}
			{userInfo && isEmpty(userInfo) ? (
				<Button variant='contained' onClick={() => logInHandler()}>
					Sign up with Google
				</Button>
			) : (
				<>
					<p>{profile.name}</p>
					<p>{profile.email}</p>
					<Button variant='contained' onClick={logOutHandler}>
						Log Out
					</Button>
				</>
			)}
		</div>
	);
};

export default SignupPage;
