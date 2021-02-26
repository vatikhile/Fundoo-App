
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Registration from '../src/Components/registration/registration';
import Login from '../src/Components/Login/login';
import Forget from '../src/Components/ForgetPassword/forgetPassword'
import Reset from '../src/Components/ResetPassword/resetPassword'
import Dashboard from '../src/Components/Dashboard/Dashboard'
function App() {
  return (

    <Router>
      <Switch>
        <Route exact path="/" component={Registration} />
          {/* <Registration />
        </Route> */}
        <Route path="/login" component={Login} />
          {/* <Login />
        </Route> */}
        <Route path="/forget" component={Forget} />
          {/* <Forget />
        </Route> */}
        <Route path="/resetPassword/:token"component={Reset} />
          {/* <Reset />
        </Route> */}
                <Route exact path="/dashboard" component={Dashboard} />
      </Switch>

    </Router>

    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>

  );
}

export default App;
