import { Routes, Route, BrowserRouter } from 'react-router-dom';

import { Drawer } from './Drawer';
import { Home } from './Home';

export const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/drawer" element={<Drawer />}>
            <Route path=":id" element={<Drawer />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};
