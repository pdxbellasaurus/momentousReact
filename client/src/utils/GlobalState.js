import React from "react";

const GlobalContext = React.createContext({
  loggedIn: false,
  username: "",
  id: ""
});

export default GlobalContext;
