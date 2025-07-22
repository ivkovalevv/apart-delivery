import { createContext, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import menuItemStore from "./store/menuItemStore";
import UserStore from "./store/userStore";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

export const Context = createContext(null);

root.render(
  <Context.Provider
    value={{
      user: new UserStore(),
      menuItem: new menuItemStore(),
    }}
  >
    <StrictMode>
      <App />
    </StrictMode>
  </Context.Provider>
);
