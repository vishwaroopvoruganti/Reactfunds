import React, { Component } from 'react'
import './App.css';
import hometitle from './home-title-img.jpg';

import {
  Route,
  NavLink,
  BrowserRouter as Router,
  Switch
} from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
//import App from "./App";
import Home from "./Components/header/Home/Home";
import HowDoesChitWorks from "./Components/header/HowDoesChitWorks/HowDoesChitWorks";
import ChitPlan from "./Components/header/ChitPlan/ChitPlan";
import InterestedToJoin from "./Components/header/InterestedToJoin/InterestedToJoin";
 
class App extends Component {  
     render() {    
       return (

        <div>
         <h1>Home</h1>
         <img src= { hometitle } alt="MyHome" width = "50%" />
        
       
     
        <Router>
            <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
              <ul>
                <li>
                  <NavLink exact activeClassName="active" to="/Home">
                    Home
                  </NavLink>
                </li>
                <li>
                <NavLink activeClassName="active" to="/HowDoesChitWorks">
                How Does Chit Works
                  </NavLink>
                </li>
                <li>
                  <NavLink activeClassName="active" to="/ChitPlan">
                  Chit Plan
                  </NavLink>
                </li>
                <li>
                  <NavLink activeClassName="active" to="/InterestedToJoin">
                  Interested To Join
                  </NavLink>
                </li>
              </ul>
              </nav>
              <hr />
              <Switch>
                <Route exact path="/" component={App} />
                <Route path="/Home" component={Home} />
                <Route path="/HowDoesChitWorks" component={HowDoesChitWorks} />
                <Route path="/ChitPlan" component={ChitPlan} />
                <Route path="/InterestedToJoin" component={InterestedToJoin} />
        
              </Switch>
              
            </div>
          </Router>

          </div>
        );
        
       
     }
   }
   export default App;

//ReactDOM.render(routing, document.getElementById("root"));

// class App extends Component {  
//   render() {    
//     return (
//       <div>
//         <h1>Home</h1>
//         <img src= { hometitle } alt="MyHome" width = "50%" />
        
//       </div>
//     )
//   }
// }
// export default App;