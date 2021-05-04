import React from 'react';
import GoogleLogin from 'react-google-login';
import axios from 'axios';
import { refreshGooglToken } from '../config/refreshGoogleToken';

const Google = () => {
	const responseGoogle = (response) => {
		console.log(response.tokenId);
		axios({
			method: 'POST',
			url: `http://localhost:8000/google-login`,
			data: { idToken: response.tokenId },
		})
			.then((resposne) => {
				console.log('Google Signin Successful', response);
				// inform parent component
			})
			.catch((error) => {
				console.log('Google Sign in Error', error.response);
			});
	};

	const onSuccess = (res) => {
		console.log('login success: currentUser:', res.profileObj);
		axios({
			method: 'POST',
			url: `http://localhost:8000/google-login`,
			data: { idToken: response.tokenId },
		}).then((response) => {
			console.log('Google sign in successful', response);
		});
		refreshGooglToken;
	};

	const onFailure = (res) => {
		console.log('login failed: res:', res);
	};

	return (
		<div className='pb-3'>
			<GoogleLogin
				clientId='401853306024-pbig7urt774q77cgeeu7ebq344evo4cu.apps.googleusercontent.com'
				buttonText='Sign in with Google'
				onSuccess={onSuccess}
				onFailure={onFailure}
				cookiePolicy={'single_host_origin'}
			/>
		</div>
	);
};

export default Google;
