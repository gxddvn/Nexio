import React from "react";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <div className='Wrapper'>
        <Outlet />
      </div>
    </>
  );
};

export { Layout };
