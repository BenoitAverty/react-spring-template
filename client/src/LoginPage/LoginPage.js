import React from 'react'

import './LoginPage.css'

const LoginPage = () =>
  <div>
    <form className="Login-form">
      <span><label htmlFor="username">Username : </label><input type="text" id="username" name="username" /></span>
      <span><label htmlFor="password">Password : </label><input type="text" id="password" name="password" /></span>
      <input type="submit" value="Login" />
    </form>
  </div>

export default LoginPage;
