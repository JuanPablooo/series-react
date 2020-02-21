import React, { Component } from 'react';
import FormularioSeries from './FormularioSeries';
import TabelaSeries from './TabelaSeries';
import {getToken} from '../../services/auth-service';
import { listar, inserir, atualizar, remover } from "../../services/series-services";



class BoxSeries extends Component {
    constructor() {
        super()
        this.state = { series: [] }
    }


    //apos a montagem do componete
    async componentDidMount() {
        
        try {
            const retorno = await listar()
            const series = await retorno.json()
            console.log(series)
            this.setState({ series: series }) // pegando as series e jogando no estado lista que esta sendo usado para montar as listas
        } catch (error) {
            console.log(error)
        }
        
        
        console.log('ja estou pronto')
        console.log('pronto');
    }

    enviaDados = async (serie)=>{

        try { 
            let retorno ="";
            if(serie.id) retorno = await atualizar(serie)
            else retorno = await inserir(serie)
            
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
        const retorno = await remover(id)
        if (retorno.status === 204) {
            this.setState({
                series: retorno.filter((serie) => {
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