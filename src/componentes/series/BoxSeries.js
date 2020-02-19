import React, { Component } from 'react';
import FormularioSeries from './FormularioSeries';
import TabelaSeries from './TabelaSeries';





class BoxSeries extends Component {
    constructor() {
        super()
        this.state = { series: [] }
    }


    //apos a montagem do componete
    async componentDidMount() {
        //mechendo no estado do componente
        let resposta = await fetch('http://localhost:3000/series')
        const series = await resposta.json();
        this.setState({ series: series }) // pegando as series e jogando no estado lista que esta sendo usado para montar as listas
        console.log(series)
        console.log('ja estou pronto')
        //this.setState({lista:[{nome:"Rei Leao", lancamento:2012}]})
        console.log('pronto');
    }

    enviaDados = async (serie)=>{
        console.log('enviando dados');
        // let {serie} = this.state;
        console.log(serie)
        const urlParam = serie.id  || '' ;
        const method = serie.id ? "PUT" : "POST";
        const url = 'http://localhost:3000/series/'+urlParam;
        const options = {
            method: method,
            headers: {
                "Content-type": 'application/json'
            },
            body: JSON.stringify( serie )
        };
        try {
            
            const retorno = await fetch(url, options );
            console.log(serie)
            console.log(serie)
            console.log('enviando');
            serie = await retorno.json();
            if(retorno.status === 201){
                console.log('enviado');
                return this.setState(
                        {
                            series: [...this.state.series, serie],
                            serie: this.novaSerie
                        }
                    )
            }
            if(retorno.status === 200){
                return this.setState(
                    {
                        series: this.state.series.map(ser => ser.id == serie.id ? serie:ser),
                        serie:this.novaSerie
                    }
                )
            }
        } catch (error) {
            console.log(error)
        }
          
          
         
    }
    deleta = async (id) => {
        const seriesAtual = this.state.series
        const params = {
            method: 'DELETE',
        }
        const retorno = await fetch('http://localhost:3000/series/' + id, params);
        if (retorno.status === 204) {
            this.setState({
                series: seriesAtual.filter((serie) => {
                    return serie.id != id;
                })
            })
        }
    }
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-4" >
                        <FormularioSeries enviaDados={this.enviaDados} />
                    </div>
                    <div className="col-md-8" >
                        {/* enviando as sereis para a tabela series */}
                        <TabelaSeries series={this.state.series} deleta={this.deleta} />
                    </div>
                </div>
            </div>
        )
    }
}

export default BoxSeries;