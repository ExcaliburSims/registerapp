import React from "react";
import Header from "../composants/Header";
import Login from "../composants/Login";

const LoginPage = () => {
  return (
    <>
      <Header
        heading="Login to your account"
        paragraph="Don't have an account yet? "
        linkName="Signup"
        linkUrl="/signup"
      />
      <Login />
    </>
  );
};

export default LoginPage;
