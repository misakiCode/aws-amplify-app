import logo from './logo.svg';
import './App.css';
import { Amplify } from "aws-amplify";
import { withAuthenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";

import awsExports from "./aws-exports";
import { Route, Routes } from 'react-router-dom';
import Login from './pages/login';
import Home from './pages/home';
import Todo from './pages/todo';
import NotFound from './pages/notfound';
Amplify.configure(awsExports);

function App({signOut, user }) {
  return (
    <div className="App">
      <h1>hello</h1>
      <ul>
        <li><a href='/'>login</a></li>
        <li><a href='home'>home</a></li>
        <li><a href='todo'>todo</a></li>
      </ul>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/home" element={<Home />} />
        <Route path="/todo" element={<Todo />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
