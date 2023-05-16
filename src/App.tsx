import './App.css';
import { Box, Divider } from '@mui/material';
import Jumbotron from './view/Jumbotron';
import MainView from './view/Main';
import Navigation from './view/Navigation';
import MiddleNavigation from './view/Navigation/MiddleNavigation';
import SignIn from './view/Authentication/SignIn';
import SignUp from './view/Authentication/SignUp';

function App() {
  return (
    <Box sx={{whiteSpace: 'pre-wrap'}}>
      <Navigation />
      <Jumbotron />
      {/* <SignIn /> */}
      <SignUp />
      {/* <MiddleNavigation />
      <Divider />
      <MainView /> */}
    </Box>
  );
}

export default App;
