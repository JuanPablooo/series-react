import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import BoxSeries from '../componentes/series/BoxSeries'
import Autores from '../componentes/Autores';
import Home from '../componentes/Home';

import Navbar from '../componentes/NavBar';
import { isSignedIn } from '../services/auth-service';
import Loguin from '../componentes/Loguin';

const NotFound = ()=>{
	return(
		<div>pagina nao encontrada</div>
	)
}
const PrivateRoutes = ({ component: Component, ...rest }) => {
	return (
		<Route {...rest}
			render={props =>
				isSignedIn() ? (
					<div>
						<Navbar />
						<Component {...props} />
					</div>
				) : (
						<Redirect to={{
							pathname: '/login',
							state: { from: props.location }
						}} />
				)
			}
		/>
	)
}

const Routes = ()=>(
    <Router> 
            <div>
                <Switch>
                    <Route path="/login" component={Loguin} />
                    <PrivateRoutes path="/series"  component={BoxSeries}/>
                    <PrivateRoutes path ="/autores"  component={Autores} />
                    <PrivateRoutes exact path ="/" component={Home} />
                    <Route component={NotFound} />
                </Switch>
            </div>
        </Router>
)

export default Routes;


