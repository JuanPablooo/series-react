import React, { Component } from 'react';
import './App.css';



class App extends Component{
	constructor(){
		super();
		this.state = {
			lista:[]
		}
	}

	async componentDidMount(){
		//mechendo no estado do componente
		let resposta = await fetch('http://localhost:3000/series')
		const series = await resposta.json();
		this.setState({lista:series})
		console.log(series)
		console.log('ja estou pronto')
		this.setState({lista:[{nome:"Rei Leao", lancamento:2012}]})
		console.log('pronto');
	}
	
	render(){
		console.log('estou sendo renderizado na tela');
		return (
			<div className="App">
				Cadastro de Series

				<form method="post">
					<div className="form">
						<label htmlFor="nome">Nome</label>
						<input type="text" id="nome" name="nome"></input>
						<label htmlFor="lancamento">Ano de Lançamento</label>
						<input type="text" id="lancamento" name="lancamento"></input>
						<label htmlFor="temporadas">Temporadas</label>
						<input type="text" id="temporadas" name="temporadas"></input>
						<label htmlFor="sinopse">Sinopse</label>
						<textarea id="sinopse" name="sinopse"></textarea>
						<button type="submit">Salvar</button>
					</div>
				</form>
				<div className="list">
					<table>
						<thead>
							<tr>
								<th>Nome</th>
								<th>Lançamento</th>
								<th>Temporadas</th>
								<th>Sinopse</th>
							</tr>
						</thead>
						<tbody>
							{this.state.lista.map(serie =>{
								return (
									<tr key={serie.id}>
										<td>{serie.nome}</td>
										<td>{serie.ano_lancamento}</td>
										<td>{serie.temporadas}</td>
										<td>{serie.sinopse}</td>
									</tr>

								)
							})}
						</tbody>
					</table>
				</div>
			</div>
		);
	}

}


export default App;
