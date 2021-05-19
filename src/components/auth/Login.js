import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loginUser } from '../../actions/authActions';
import classnames from 'classnames';
import Navbarz from '../layout/Navbarz';
import Footer from '../Footer';

class Login extends Component {
	constructor() {
		super();
		this.state = {
			email: '',
			password: '',
			errors: {},
		};
	}

	componentDidMount() {
		// If logged in and user navigates to Login page, should redirect them to dashboard
		if (this.props.auth.isAuthenticated) {
			this.props.history.push('/dashboard');
		}
	}

	UNSAFE_componentWillReceiveProps(nextProps) {
		if (nextProps.auth.isAuthenticated) {
			this.props.history.push('/dashboard');
			// push user to dashboard when they login
		}

		if (nextProps.errors) {
			this.setState({
				errors: nextProps.errors,
			});
		}
	}

	onChange = (e) => {
		this.setState({ [e.target.id]: e.target.value });
	};
	onSubmit = (e) => {
		e.preventDefault();

		const userData = {
			email: this.state.email,
			password: this.state.password,
		};
		this.props.loginUser(userData);
		// since we handle the redirect within our component, we don't need to pass in this.props.history as a parameter
	};

	render() {
		const { errors } = this.state;
		return (
			<div>
				<Navbarz />
				<div className='container'>
					<div>
						<div style={{ textAlign: 'center', marginTop: '5rem' }}>
							<div
								style={{
									paddingLeft: '11.250px',
									textAlign: 'center',
									fontSize: '2rem',
								}}
							>
								<h4
									style={{ fontSize: '3rem', fontFamily: 'permanent marker' }}
								>
									<b>Login</b> Here!
								</h4>
								<p className='grey-text text-darken-1'>
									Don't have an account? <Link to='/register'>Register</Link>
								</p>
							</div>
							<hr style={{ margin: '3rem' }}></hr>
							<form noValidate onSubmit={this.onSubmit}>
								<div style={{ fontSize: '2rem' }}>
									<label htmlFor='email'>Email: </label>
									<input
										style={{ marginLeft: '3rem' }}
										onChange={this.onChange}
										value={this.state.email}
										error={errors.email}
										id='email'
										type='email'
										className={classnames('', {
											invalid: errors.email || errors.emailnotfound,
										})}
									/>

									<span className='red-text'>
										{errors.email}
										{errors.emailnotfound}
									</span>
								</div>
								<div style={{ fontSize: '2rem' }}>
									<label htmlFor='password'>Password: </label>
									<input
										style={{ marginLeft: '1rem' }}
										onChange={this.onChange}
										value={this.state.password}
										error={errors.password}
										id='password'
										type='password'
										className={classnames('', {
											invalid: errors.password || errors.passwordincorrect,
										})}
									/>

									<span className='red-text'>
										{errors.password}
										{errors.passwordincorrect}
									</span>
								</div>
								<div style={{ paddingLeft: '11.250px' }}>
									<button
										style={{
											width: '150px',
											borderRadius: '3px',
											letterSpacing: '1.5px',
											marginTop: '5rem',
											border: 'solid black 1px',
											fontSize: '2rem',
										}}
										type='submit'
										className='btn btn-large waves-effect waves-light hoverable blue accent-3'
									>
										Login
									</button>
								</div>
								<h4 style={{ paddingTop: '3rem' }}>
									to sign-in, you can use 'test@mail.com' for email and
									'password' for password
								</h4>
							</form>
						</div>
					</div>
				</div>
				<Footer />
			</div>
		);
	}
}

Login.propTypes = {
	loginUser: PropTypes.func.isRequired,
	auth: PropTypes.object.isRequired,
	errors: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
	auth: state.auth,
	errors: state.errors,
});

export default connect(mapStateToProps, { loginUser })(Login);
