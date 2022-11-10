import { Route, Switch } from 'react-router';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import './style.scss';
import Home from './components/Home';
import About from './components/About';
import Navbar from './components/Navbar';
import Contact from './components/Contact';
import Login from './components/Login';
import SignUp from './components/SignUp';
import ErrorPage from './components/ErrorPage';



function App() {
  return(
    <>
      <Navbar />

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/signup">
          <SignUp />
        </Route>
        <Route>
          <ErrorPage />
        </Route>
      </Switch>
    </>
  );
}

export default App;
