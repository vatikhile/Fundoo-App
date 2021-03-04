
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Registration from '../src/Components/registration/registration';
import Login from '../src/Components/Login/login';
import Forget from '../src/Components/ForgetPassword/forgetPassword'
import Reset from '../src/Components/ResetPassword/resetPassword'
import Dashboard from '../src/Components/Dashboard/Dashboard'

const authentication = {
  isLoggedIN: false,

  getLogInStatus() {
    if (localStorage.userToken !== undefined) {
      this.isLoggedIN = true;
    }
    else {
      this.isLoggedIN = false;
    }
    return this.isLoggedIN;
  }

}

function SecuredRoute(props) {
  return (
    <Route path={props.path} render={data => authentication.getLogInStatus() ? (<props.component {...data}></props.component>) : (<Redirect to={{ pathname: "/" }}></Redirect>)}>
    </Route>)
}
function App() {
  return (

    <Router>
      <Switch>
        <Route exact path="/" component={Registration} />

        <Route path="/login" component={Login} />

        <Route path="/forget" component={Forget} />

        <Route path="/resetPassword/:token" component={Reset} />

        <SecuredRoute exact path="/dashboard" component={Dashboard} />
      </Switch>

    </Router>



  );
}

export default App;
