import { Fragment } from 'react';
import { BrowserRouter } from 'react-router-dom';
import React from 'react';

import CssBaseline from '@mui/material/CssBaseline';

import { withErrorHandler } from '@/error-handling';
import AppErrorBoundaryFallback from '@/error-handling/fallbacks/App';
import Pages from '@/routes/Pages';
import Notifications from '@/sections/Notifications';
import SW from '@/sections/SW';
import Sidebar from '@/sections/Sidebar';
import Login from './components/LogIn/LogIn';
import SplashScreen from './components/SplashScreen/SplashScreen';

function App() {
  const [showSplashScreen, setShowSplashScreen] = React.useState(true);

  React.useEffect(() => {
    setTimeout(() => {
      setShowSplashScreen(false);
    }, 2000);
  }, []);

  const [loggedIn, setLoggedIn] = React.useState(
    sessionStorage.getItem('isLoggedIn') === 'true'
  );

  const handleLogin = () => {
    setLoggedIn(true);
    sessionStorage.setItem('isLoggedIn', 'true');
  };

  return (
    <Fragment>
      <CssBaseline />
      {showSplashScreen ? (
        <SplashScreen />
      ) : loggedIn ? (
        <Fragment>
          <Notifications />
          <SW />
          <BrowserRouter>
            <Sidebar />
            <Pages />
          </BrowserRouter>
        </Fragment>
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </Fragment>
  );
}

export default withErrorHandler(App, AppErrorBoundaryFallback);


