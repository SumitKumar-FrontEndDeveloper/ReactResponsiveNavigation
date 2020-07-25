import React from 'react';
import NavBar from './Nav/NavBar';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import UserList from './../Users/UserList/UserList';
import {useSelector,useDispatch,connect} from 'react-redux';
import Home from './../Home/Home';
import Login from './../Login/Login';
import Register from './../Register/Register';
import AddUsers from './../Users/AddUsers/AddUsers';
import 'tachyons';
function App() {
  return (
    <div className="App">
      <NavBar />
      <Router>
            <Switch>
                <Route path="/" exact  component={Home}/>
                <Route path="/userlist" exact  component={UserList}/>
                <Route path="/adduser" exact  component={AddUsers}/>
                <Route path="/login" exact  component={Login}/>
                <Route path="/register" exact  component={Register}/>
             </Switch>
        </Router>
    </div>
  );
}

export default App;
