import { Refine } from '@pankod/refine-core';
import routerProvider from '@pankod/refine-react-router';
import dataProvider from '@pankod/refine-simple-rest';
import { Layout } from 'components/Layout';

import 'styles/tailwind.css';
import { TestList } from 'pages/sample/lists';

function App() {
  return (
    <Refine
      routerProvider={routerProvider}
      dataProvider={dataProvider('http://localhost:3000')}
      resources={[
        {
          name: 'users',
          list: TestList,
        },
      ]}
      Layout={Layout}
    />
  );
}

export default App;
