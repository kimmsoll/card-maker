import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LoginPage from './routes/login-page';
import Home from './routes/home';

function App({authService, FileInput, cardRepository}) {
  return (
    <BrowserRouter>
    <Switch>
      <Route exact path="/">
        <LoginPage
        authService={authService}
        ></LoginPage>
      </Route>
      <Route path="/maker">
        <Home
        authService={authService}
        FileInput={FileInput}
        cardRepository={cardRepository}
        ></Home>
      </Route>
    </Switch>
    </BrowserRouter>
  );
}

export default App;
