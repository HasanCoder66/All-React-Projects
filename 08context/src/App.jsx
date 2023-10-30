import { Children, useState } from "react";
import "./App.css";
import UserContextProvider from "./context/UserContextProvider";
import Profile from "./components/Profile.jsx";
import Login from "./components/Login.jsx";
function App() {
  return (
    <UserContextProvider>
      <h1>Chai aur react with context api</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  );
}

export default App;
