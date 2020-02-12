import React, {Component} from 'react';
import FormularioSeries from './formulario';
import TabelaSeries from './TabelaSeries';





class BoxSeries extends Component{
    constructor(){
		super();
		this.state={series: []}
	}
	//apos a montagem do componete
	async componentDidMount(){
		//mechendo no estado do componente
		let resposta = await fetch('http://localhost:3000/series')
		const series = await resposta.json();
		this.setState({series:series}) // pegando as series e jogando no estado lista que esta sendo usado para montar as listas
		console.log(series)
		console.log('ja estou pronto')
		//this.setState({lista:[{nome:"Rei Leao", lancamento:2012}]})
		console.log('pronto');
	}

    enviaDados = async (serie)=>{
        console.log('enviando dados');
        console.log(serie)
        const url = 'http://localhost:3000/series';
        const options = {
            method: 'POST',
            headers: {
                "Content-type": 'application/json'
            },
            body: JSON.stringify( serie )
        };
        
        const retorno = await fetch(url, options );
        console.log(retorno)
            // .then( response => response.json() )
            // .then( data => console.log (data));
          
          
         
    }
    render(){
        return(
            <div>
                <FormularioSeries enviaDados = {this.enviaDados} />
                {/* enviando as sereis para a tabela series */}
                <TabelaSeries  series={this.state.series} /> 
            </div>
        )
    }
}

export default BoxSeries;