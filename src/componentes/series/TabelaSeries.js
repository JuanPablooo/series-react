import React, {Component} from 'react';
import './TabelaSeries.css';


const ListaSeries = (props)=>{
    

    return (
        <div className="card-body card-body-flex">
            
            {props.series.map(serie => {
                return (        
                    <div className="card card-serie" key={serie.id}>
                        <div className="card-header">
                            <h5 className="card-title">{serie.nome}</h5> 
                            <h6 className="card-title text-muted">{serie.ano_lancamento}</h6> 
                        </div>
                        <div className="card-body">
                            <img src="/logo192.png" className="card-img" />
                        </div>
                        <div className="card-footer">
                            {serie.temporadas}
                            {serie.temporadas > 1 ? ' temporadas' : ' temporada'}
                            <br />
                            <a href="#" >Sinopse </a> <br />
                            <div className="text-center mt-1">
                                <button className="btn btn-outline-danger btn-sm mr-2" 
                                onClick={() => { 
                                    if(window.confirm('confirma a exclusão ?'))
                                        props.deleta(serie.id)
                                    }
                                }>delete</button>
                                <button className="btn btn-outline-warning btn-sm " 
                                onClick={ ()=> {
                                    console.log("entrou")
                                        props.consulta(serie)
                                    }
                                
                                } 
                                >Editar</button>
                            </div>
                        </div>

                    </div>
                );
            })}
       </div>
    );
}
class TabelaSeries extends Component{
    
    consulta = (serie) =>{
        this.setState({})
    }
    render(){
        const {series, deleta, consulta } = this.props;
        return (
            <div className="card">

                <div className="card-header">
                    <h5 className="text-center" >Lista series</h5>
                </div>

                

                    
                <ListaSeries series={series} deleta ={deleta}  consulta={this.onsulta}/>
				
            </div>
        )
    }
}

export default TabelaSeries;