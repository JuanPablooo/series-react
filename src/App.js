import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import BoxSeries from './componentes/series/BoxSeries';



class App extends Component{
	
	
	

	//chamado toda vez que tiver uma verificação
	render(){
		console.log('estou sendo renderizado na tela');
		return (
			<div className="App">
				Cadastro de Series
				<BoxSeries/>
			</div>
		);
	}

}


export default App;
