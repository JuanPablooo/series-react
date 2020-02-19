import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import BoxSeries from './componentes/series/BoxSeries';
import Navbar from './componentes/NavBar';
import Autores from './componentes/Autores';
import Home from './componentes/Home';


const NotFound = ()=>{
	return(
		<div>pagina nao encontrada</div>
	)
}
class App extends Component{
	
	
	

	//chamado toda vez que tiver uma verificação
	render(){
		return (
			<Router> 
				<div>
					<Navbar />
					<Switch>
						<Route path="/series"  component={BoxSeries}/>
						<Route path ="/autores"  component={Autores} />
						<Route exact path ="/" component={Home} />
						<Route  component={NotFound} />
					</Switch>
				</div>
			</Router>
		);
	}

}


export default App;
