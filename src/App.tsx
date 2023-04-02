import { Global } from "@emotion/react";
import { globalStyles } from "./ui/globalStyles";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";

export const App = () => {
  return (
    <>
      <Global styles={globalStyles} />
      <RouterProvider router={router} />
    </>
  );
};
