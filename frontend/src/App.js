import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import { Layout } from "./components/Layout";
import Direct from "./components/Direct";
import Chat from "./components/Chat";
import Search from "./components/Search";
import Notifications from "./components/Notifications";
import Profile from "./components/Profile";
import Login from "./components/Auth/Login";
import Reg from "./components/Auth/Reg";
import { useDispatch } from "react-redux";
import { fetchAuthMe } from "./Redux/Slices/auth";
import Create from "./components/Create";

function App() {
  const dispatch = useDispatch();
  // const token = window.localStorage.getItem("token");

  React.useEffect(() => {
    dispatch(fetchAuthMe());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />}></Route>
        <Route path="direct" element={<Direct />}></Route>
        <Route path='direct/chat/:id' element={<Chat />}></Route>
        <Route path="search" element={<Search />}></Route>
        <Route path="notifications" element={<Notifications />}></Route>
        <Route path="profile" element={<Profile />}></Route>
        <Route path="auth">
          <Route path="login" element={<Login />}></Route>
          <Route path="reg" element={<Reg />}></Route>
        </Route>
        <Route path="create" element={<Create />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
