import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import BoxSeries from './componentes/series/BoxSeries';
import Navbar from './componentes/NavBar';



class App extends Component{
	
	
	

	//chamado toda vez que tiver uma verificação
	render(){
		console.log('estou sendo renderizado na tela');
		return (
			<div>
				<Navbar />
				<BoxSeries/>
			</div>
		);
	}

}


export default App;
