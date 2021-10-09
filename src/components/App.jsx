import React, { useContext } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import HomePage from '../pages/HomePage.jsx';
import LandingPage from '../pages/LandingPage.jsx';
import AuthPage from '../pages/AuthPage.jsx';
import { AuthContext } from '../context/AuthContext.js'
import Chat from '../components/Chat/Chat.jsx';

import './App.css';

function App() {

  const { isLoggedIn } = useContext(AuthContext);

  const ProtectedRoute = (props) => {
    if (!isLoggedIn) return <Redirect to="/auth" />
    return <Route {...props} />
  };


  return (
    <div className="App">
      <Switch>
				<Route exact path="/auth" component={AuthPage} />
        <Route path="/home" component={HomePage} />
        <Route path="/" component={Chat} />
        <Route component={() => <h1>Not found</h1>} />
			</Switch>
    </div>
  );
}

export default App;
