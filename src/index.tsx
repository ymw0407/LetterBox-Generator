/* @refresh reload */
import { render } from "solid-js/web";
import "@styles/global.css";
import "@styles/index.css";
import { App } from "./App";

const root = document.getElementById("root");

render(
  () => (
    <>
      <App />
    </>
  ),
  root!
);
