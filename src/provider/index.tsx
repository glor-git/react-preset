import React from "react";
import RecoilProvider from "./RecoilProvider";

type Props = {
  children: React.ReactNode;
};

const Provider: React.FC<Props> = ({ children }) => {
  return (
    <RecoilProvider>
      {children}
    </RecoilProvider>
  );
}

export default Provider;