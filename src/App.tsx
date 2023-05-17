import { Routes, Route, useLocation } from 'react-router-dom';

import './App.css';
import { Box, Divider } from '@mui/material';
import Jumbotron from './view/Jumbotron';
import MainView from './view/Main';
import Navigation from './view/Navigation';
import MiddleNavigation from './view/Navigation/MiddleNavigation';
import SignIn from './view/Authentication/SignIn';
import SignUp from './view/Authentication/SignUp';
import LatesInformationList from './view/LatestInformation/List';
import LatesInformationDetail from './view/LatestInformation/Detail';

function App() {

  const path = useLocation();

  return (
    <Box sx={{whiteSpace: 'pre-wrap'}}>
      <Navigation />
      <Jumbotron />
      { 
        path.pathname !== '/sign-up' && 
        path.pathname !== '/sign-in' && 
        (<><MiddleNavigation /><Divider /></>)
      }
      <Routes>
        <Route path='/' element={<MainView />} />
        <Route path='/sign-in' element={<SignIn />} />
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='/lates-information'>
          <Route index element={<LatesInformationList />} />
          <Route path=':boardNumber' element={<LatesInformationDetail />} />
        </Route>
      </Routes>
    </Box>
  );
}

export default App;
