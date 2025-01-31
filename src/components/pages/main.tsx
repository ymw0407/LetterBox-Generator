import { MainTemplate } from "@components/template/mainTemplate/mainTemplate";

const title = {
  text: `레터박스 생성기`,
};

const description = {
  text: `lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
};

export const Main = () => {
  return (
    <>
      <MainTemplate title={title} description={description} />
    </>
  );
};
