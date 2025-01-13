import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import Card from "./React.UseState/Card";

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <Card />
  </StrictMode>
);

  
