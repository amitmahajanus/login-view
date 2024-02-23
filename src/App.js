import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useRoutes,
} from "react-router-dom";
import IndexPage from './IndexPage';
import LoginPage from './LoginPage';

const App = () => {
  let routes = useRoutes([
    { path: "/index", element: <IndexPage /> },
    { path: "/login", element: <LoginPage /> },
    // ...
  ]);
  return routes;
};

const AppWrapper = () => {
  return (
    <Router>
      <App />
    </Router>
  );
};

export default AppWrapper;