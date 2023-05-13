import { Fragment } from 'react';
import { BrowserRouter } from 'react-router-dom';
import React from 'react';

import CssBaseline from '@mui/material/CssBaseline';

import { withErrorHandler } from '@/error-handling';
import AppErrorBoundaryFallback from '@/error-handling/fallbacks/App';
import Pages from '@/routes/Pages';
import Header from '@/sections/Header';
import Notifications from '@/sections/Notifications';
import SW from '@/sections/SW';
import Sidebar from '@/sections/Sidebar';
import Login from './components/LogIn/LogIn';
import SplashScreen from './components/SplashScreen/SplashScreen';
import BurgerMenu from './components/BurgerMenu/BurgerMenu';


function App() {
  const [showSplashScreen, setShowSplashScreen] = React.useState(true);

  React.useEffect(() => {
    setTimeout(() => {
      setShowSplashScreen(false);
    }, 2000);
  }, []);

  const [loggedIn, setLoggedIn] = React.useState(false);
  const handleLogin = () => {
    setLoggedIn(true);
  };

  return (
    <Fragment>
      <CssBaseline />
      {showSplashScreen ? <SplashScreen /> : 
        loggedIn ? (
          <Fragment>
            <Notifications />
            <SW />
            <BrowserRouter>
              <Header />
              <Sidebar />
              <Pages />
              <BurgerMenu />
            </BrowserRouter>
          </Fragment>
        ) : ( <Login onLogin={handleLogin} /> )}
    </Fragment>
  );
}

export default withErrorHandler(App, AppErrorBoundaryFallback);
