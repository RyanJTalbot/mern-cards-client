import React, { Component } from 'react';
import {
	BrowserRouter,
	BrowserRouter as Router,
	Route,
	Switch,
} from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import setAuthToken from './utils/setAuthToken';
import { setCurrentUser, logoutUser } from './actions/authActions';
import queryString from 'query-string';
import { Provider } from 'react-redux';
import store from './store';

// Create Card Routes
// import CreateReduxCard from './components/flashcards/createCards/CreateReduxCard';
// import CreateNPMCard from './components/flashcards/createCards/CreateNPMCard';
// import CreateJavaScriptCard from './components/flashcards/createCards/CreateJavaScriptCard';
// import CreateExpressCard from './components/flashcards/createCards/CreateExpressCard';
// import CreateReactCard from './components/flashcards/createCards/CreateReactCard';
// import CreateMongoCard from './components/flashcards/createCards/CreateMongoCard';
// import CreateNodeCard from './components/flashcards/createCards/CreateNodeCard';

import NodePage from './pages/NodePage';
import MongoPage from './pages/MongoPage';
import ReactPage from './pages/ReactPage';
import NPMPage from './pages/NPMPage';
import JavaScriptPage from './pages/JavaScriptPage';
import ExpressPage from './pages/ExpressPage';
import ReduxPage from './pages/ReduxPage';
import FcardPage from './pages/FcardPage';

import Landing from './components/layout/Landing';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import PrivateRoute from './components/private-route/PrivateRoute';
import Dashboard from './components/dashboard/Dashboard';
import NotFoundPage from './pages/NotFoundPage';

// Check for token to keep user logged in
// if (localStorage.jwtToken) {
// 	// Set auth token header auth
// 	const token = localStorage.jwtToken;
// 	setAuthToken(token);
// 	// Decode token and get user info and exp
// 	const decoded = jwt_decode(token);
// 	// Set user and isAuthenticated
// 	store.dispatch(setCurrentUser(decoded));

// 	// Check for expired token
// 	const currentTime = Date.now() / 1000;

// 	// to get in milliseconds
// 	if (decoded.exp < currentTime) {
// 		// Logout user
// 		store.dispatch(logoutUser());
// 		// Redirect to login
// 		window.location.href = './login';
// 	}
// }

class App extends Component {
	// UNSAFE_componentWillMount() {
	// 	var query = queryString.parse(this.props.location.search);
	// 	if (query.token) {
	// 		window.localStorage.setItem('jwt', query.token);
	// 		this.props.history.push('/dashboard');
	// 	}
	// }

	render() {
		return (
			<Provider store={store}>
				<Router>
					<div className='App'>
						<Switch>
							<Route exact path='/' component={FcardPage} />
							{/* <Route exact path='/register' component={Register} />
							<Route exact path='/login' component={Login} />

							<Route exact path='/dashboard' component={Dashboard} /> */}
							<Route exact path='/cards' component={FcardPage} />
							<Route exact path='/reduxs' component={ReduxPage} />
							<Route exact path='/expresses' component={ExpressPage} />
							<Route exact path='/npms' component={NPMPage} />
							<Route exact path='/javascripts' component={JavaScriptPage} />
							<Route exact path='/reacts' component={ReactPage} />
							<Route exact path='/mongos' component={MongoPage} />
							<Route exact path='/nodes' component={NodePage} />
							<Route component={NotFoundPage} />

							{/* To populate a new flashcards set use the following and change the Create Card */}

							{/* <PrivateRoute exact path='/add' component={CreateMongoCard} /> */}
							<Route component={NotFoundPage} />
						</Switch>
					</div>
				</Router>
			</Provider>
		);
	}
}
export default App;
