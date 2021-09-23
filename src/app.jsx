import { HashRouter, Route } from 'react-router-dom';
import LoginPage from './routes/login-page';

function App({authService}) {
  return (
    <HashRouter>
      <Route path="/login">
        <LoginPage authService={authService}></LoginPage>
      </Route>
    </HashRouter>
  );
}

export default App;
