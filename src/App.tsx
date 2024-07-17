import { Route, Routes } from 'react-router-dom';
import { AppRoute } from './constants';
import { Login } from './pages/login.page';
import { Private } from './components/private-route.component';
import { PrivatePage } from './pages/private.page';

function App() {
  return (
    <Routes>
      <Route path={AppRoute.Login} element={<Login />} />
      <Route
        path={AppRoute.Root}
        element={<Private Component={PrivatePage} />}
      />
    </Routes>
  )
}

export default App
