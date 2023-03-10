import React from "react";
import RecoilProvider from "./RecoilProvider";
import Query from "./Query";
import Router from "./Router";

type Props = {
  children: React.ReactNode;
};

const Provider: React.FC<Props> = ({ children }) => {
  return (
    <Query>
      <RecoilProvider>
        <Router>
        {children}
        </Router>
      </RecoilProvider>
    </Query>
  );
}

export default Provider;