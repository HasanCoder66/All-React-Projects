import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { logout, login } from "./Store/authSlice";
import { Header, Footer } from "./components/index";
import authService from "./appwrite/auth";
import "./App.css";
import { Outlet } from "react-router-dom";

function App() {
  const [isLoading, setIsloading] = useState();
  const dispatch = useDispatch();

  useEffect(() => {
    authService
      .getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }));
        } else {
          dispatch(logout());
        }
      })
      .finally(() => setIsloading(false));
  }, []);
  return !isLoading ? (
    <div className="min-h-screen flex flex-wrap content-between bg-gray-400">
      <div className="w-full block">
        <Header />
        <main>
          TODO : <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  ) : null;
}

export default App;
