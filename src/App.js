import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Routes from './routes/Routes'


const NotFound = ()=>{
	return(
		<div>pagina nao encontrada</div>
	)
}
class App extends Component{
	
	
	

	//chamado toda vez que tiver uma verificação
	render(){
		return (
			<Routes/>
			
		);
	}

}


export default App;
