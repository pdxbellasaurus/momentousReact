import React from "react";

const GlobalContext = React.createContext({
  loggedIn: false,
  username: "",
  id: "",
  onUpdate: () => undefined
});

export default GlobalContext;
