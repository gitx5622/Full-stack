import React, {Component, Fragment} from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as Router, Route, Redirect, Switch} from 'react-router-dom';


import Headers from './layout/Headers';
import Dashboard from './leads/Dashboard';
import  {Provider} from  'react-redux';
import store from '../Store';
import Login from './accounts/Login';
import Register from './accounts/Register';
import PrivateRoute from './common/PrivateRoute';
import {loadUser} from '../actions/auth';
import Layout from './layout/Layout';


class App extends Component {
    componentDidMount(){
        store.dispatch(loadUser());
    }
    render() {
        return ( 
<Provider store={store}>
        <Router>
         <Fragment >
            <Headers/>
            <Layout/>
            <Switch>
               <PrivateRoute exact path="/" component={Dashboard}/>
               <Route exact path="/register" component={Register}/>
               <Route exact path="/login" component={Login}/>
               <PrivateRoute exact path="/user"/>
            </Switch>
           
            </Fragment>
        </Router>
</Provider>
     
        )
    }
}

ReactDOM.render( < App/> , document.getElementById('app'));