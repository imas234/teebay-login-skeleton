import { Routes, Route } from 'react-router';
import './app.css';
import Login from './components/auth/Login';
import Signup from './components/auth/Signup';
import Home from './components/app/Home';
import { useContext, createContext, useState } from 'react';

export const AuthContext = createContext({
  loggedIn: false,
  setLoggedIn: (loggedIn) => {}
});

const AppRoutes = () => {
  const { loggedIn } = useContext(AuthContext);
  return (
    <Routes>
      {!loggedIn && <Route path="login" element={<Login />} />}
      {!loggedIn && <Route path="signup" element={<Signup />} />}
      {loggedIn && <Route path="home" element={<Home />} />}
      <Route path="*" element={loggedIn ? <Home /> : <Login />} />
    </Routes>
  );
};

const App = () => {
  const [loggedIn, setLoggedIn] = useState(true);
  return (
    <AuthContext.Provider value={{ loggedIn, setLoggedIn }}>
      <AppRoutes />
    </AuthContext.Provider>
  );
}

export default App;
