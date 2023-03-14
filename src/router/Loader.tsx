import React, { Suspense } from 'react';

interface ILoader {
  (elementPath: string): any
}

const Loader: ILoader = (elementPath) => {
  const Page = React.lazy(() => import(`../pages/${elementPath}`));
  return (
    <Suspense fallback={<>loading</>}>
      <Page />
    </Suspense>
  );
};

export default Loader;