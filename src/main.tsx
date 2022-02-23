import { StrictMode } from "react";
import { createRoot } from "react-dom";
import { RecoilRoot } from "recoil";
import { App } from "./components/App";

const rootElement = document.createElement("div");
document.body.appendChild(rootElement);

createRoot(rootElement).render(
  <StrictMode>
    <RecoilRoot>
      <App />
    </RecoilRoot>
  </StrictMode>,
);
