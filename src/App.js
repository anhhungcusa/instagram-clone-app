import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import 'antd/dist/antd.css';
import { DataProvider } from './store/DataProvider';
import { SignUpPage } from './pages/SignUpPage/SignUpPage';
import { SignInPage } from './pages/SignInPage/SignInPage';
import { Header } from './components/Header/Header';
import { RouteWithAuth } from './custom-routes/RouteWithAuth';
import { HomePage } from './pages/HomePage/HomePage';
import { ProfilePage } from './pages/ProfilePage/ProfilePage';

function App() {
	return ( 
		<div className="App">
			<Router>
				<DataProvider>
					<Switch>
						<Route path="/sign-up">
							<SignUpPage />
						</Route>
						<Route path="/sign-in">
							<SignInPage />
						</Route>
						<RouteWithAuth path="/">
							<Header />
							<Switch>
								<Route exact path="/">
									<HomePage />
								</Route>
								<Route path="/:id">
									<ProfilePage />
								</Route>
							</Switch>
						</RouteWithAuth>
					</Switch>
				</DataProvider>
			</Router>
		</div>
	);
}

export default App;
