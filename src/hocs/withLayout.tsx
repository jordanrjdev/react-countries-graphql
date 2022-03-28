import { Nav } from '@/components';
import React from 'react';

//hoc para añadir el layout a un componente
const WithLayout = (Component: React.FunctionComponent) => (props: any) => {
  return (
    <div>
      <Nav />
      <main className="h-[calc(100vh_-_56px)]">
        <div className="w-10/12 mx-auto py-4 h-full">
          <Component {...props} />
        </div>
      </main>
    </div>
  );
};

export default WithLayout;
