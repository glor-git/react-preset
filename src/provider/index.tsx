import React from "react";
import RecoilProvider from "./RecoilProvider";
import Query from "./Query";

type Props = {
  children: React.ReactNode;
};

const Provider: React.FC<Props> = ({ children }) => {
  return (
    <Query>
      <RecoilProvider>
        {children}
      </RecoilProvider>
    </Query>
  );
}

export default Provider;