
import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import Login from './Login/Login';
import Dashboard from './Dashboard/Dashboard';

//Pages

function App() {
  
  return (
    <>

       <BrowserRouter>

        <div className="pages">
          <Switch>

            <Route exact path="/" component={Login} />
            <Route exact path="/dashboard" component={Dashboard} />          

          
          </Switch>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
