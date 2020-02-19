import React , {Component} from "react";
import PubSub from "pubsub-js";
class FormularioSeries extends Component{
    constructor(){
        super()
        this.stateInicial = {
			nome: "",
			temporadas: "",
			sinopse: "",
			ano_lancamento: ""
        }

		this.state = this.stateInicial;
		PubSub.subscribe('editing', (msg, serie)=>{
			console.log(msg + "---" );
			console.log(serie)
			this.setState(serie)
		})
    }
    inputRendler = (event) =>{
        console.log(event.target.name);
        const {name, value} = event.target;
		this.setState({[name]: value});
	}

	enviaDados =  (event)=>{
		event.preventDefault();
        this.props.enviaDados(this.state);
        this.setState(this.stateInicial);
		
	}
    render(){
        return(
            <div className="card">
				<div className="card-header" >
					<h5>Cadastro de series</h5>
				</div>
				<div className="card-body">
                <form method="post" onSubmit={this.enviaDados} >
					<div className="form-group" >
						<label htmlFor="nome">Nome</label>
						<input type="text" id="nome" name="nome"  className="form-control"
						onChange={this.inputRendler}  value={this.state.nome}></input>
						<label htmlFor="lancamento">Ano de Lançamento</label>
						<input type="text" id="lancamento" name="ano_lancamento" className="form-control"
						 value={this.state.ano_lancamento} onChange={this.inputRendler} ></input>
						<label htmlFor="temporadas">Temporadas</label>
						<input type="text" id="temporadas" name="temporadas" className="form-control"
						onChange={this.inputRendler} value={this.state.temporadas}
						></input>
						<label htmlFor="sinopse">Sinopse</label>
						<textarea id="sinopse" name="sinopse" value={this.state.sinopse} className="form-control" onChange={this.inputRendler}></textarea>
						<button type="submit" className="bbn btn-success form-control mt-3">Salvar</button>
					</div>
				</form>

				</div>
            </div>
        )
    }
}

export default FormularioSeries;