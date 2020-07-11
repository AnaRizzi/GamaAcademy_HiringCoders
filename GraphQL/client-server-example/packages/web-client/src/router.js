import React from 'react';
import {Switch, Route} from 'react-router-dom';
import SignIn from './pages/Sign-in';
import Home from './pages/Home';

export default function Router(){
    return (
        <Switch>
            <Route exact path={["", '/']} component={Home}/>
            <Route exact path='/sign-in' component={SignIn}/>
        </Switch>
    )

}