import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import Card from "./React.UseState/Card";
import Counter from "./React.useEffect/UseEffect";
import { Router } from "react-router-dom";
import App from "./M12/coba";

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App/>
  </StrictMode>
);

  
