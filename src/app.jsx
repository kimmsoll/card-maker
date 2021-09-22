import { HashRouter, Route } from 'react-router-dom';
import LoginPage from './routes/login-page';

function App() {
  return (
    <HashRouter>
      <Route path="/login">
        <LoginPage></LoginPage>
      </Route>
    </HashRouter>
  );
}

export default App;
