import { Routes, Route } from 'react-router';
import { Button } from 'semantic-ui-react';
import './app.css';
import Login from './components/auth/Login';
import Signup from './components/auth/Signup';

const App = () => {
  return (
    <Routes>
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<Signup />} />
      {/* <Route /> */}
    </Routes>
  );
}

export default App;
