import React, { useContext } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext.js';
import { ChatProvider } from '../context/ChatContext.js';
import HomePage from '../pages/HomePage.jsx';
import LandingPage from '../pages/LandingPage.jsx';
import AuthPage from '../pages/AuthPage.jsx';
import ChatPage from '../pages/ChatPage.jsx';
import NavSideBar from './Navigation/NavSideBar.jsx';

import './App.css';

function App() {
  
  const { isLoggedIn } = useContext(AuthContext);

  const ProtectedRoute = (props) => {
    if (!isLoggedIn) return <Redirect to="/auth" />
    return <Route {...props} />
  };


  return (
    <div className="App flex_row">  
      <NavSideBar />
      <ChatProvider>
        <Switch>
          <Route exact path="/auth" component={AuthPage} />
          <Route exact path="/chat:id" component={ChatPage} />
          <Route path="/chat" component={ChatPage} />
          <Route path="/" component={HomePage} />
          <Route component={() => <h1>Not found</h1>} />
        </Switch>
      </ChatProvider>
    </div>
  );
}

export default App;
