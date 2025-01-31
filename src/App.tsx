import { onMount } from "solid-js";
import { vishTheme } from "@styles/theme/vishTheme.css";
import { Main } from "@components/pages/main";

export const App = () => {
  onMount(() => {
    document.body.classList.add(vishTheme);
  });

  return (
    <>
      <Main />
    </>
  );
};
