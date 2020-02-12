import React , {Component} from "react";

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
            <div>
                <form method="post" onSubmit={this.enviaDados} >
					<div className="form" >
						<label htmlFor="nome">Nome</label>
						<input type="text" id="nome" name="nome" 
						onChange={this.inputRendler}  value={this.state.nome}></input>
						<label htmlFor="lancamento">Ano de Lançamento</label>
						<input type="text" id="lancamento" name="ano_lancamento"
						 value={this.state.ano_lancamento} onChange={this.inputRendler} ></input>
						<label htmlFor="temporadas">Temporadas</label>
						<input type="text" id="temporadas" name="temporadas"
						onChange={this.inputRendler} value={this.state.temporadas}
						></input>
						<label htmlFor="sinopse">Sinopse</label>
						<textarea id="sinopse" name="sinopse" value={this.state.sinopse} onChange={this.inputRendler}></textarea>
						<button type="submit">Salvar</button>
					</div>
				</form>
            </div>
        )
    }
}

export default FormularioSeries;