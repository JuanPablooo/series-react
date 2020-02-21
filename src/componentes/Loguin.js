import React, { Component } from 'react';
import './loguin.css';
import { signIn } from '../services/auth-service'

const MsgErro = (props)=>(
    props.msg ? (<div className="alert alert-danger" > {props.msg} </div>) : ('')
)

export default class Loguin extends Component{
    constructor(){
        super()
        this.state = {
            email:"",
            senha: "",
            msgErro: ""
        }
    }
    inputHandler = (e)=>{
        const {name, value} = e.target
        this.setState({[name]:value})
    }
    signIn = async (e)=>{

        e.preventDefault()
        try{

        const usuario = this.state;
        delete usuario.msgErro;


        const retorno = await signIn(usuario)
            
        if(retorno.status === 400){
            console.log("400")
            const {erro} = await retorno.json();
            return this.setState({msgErro: erro})
        }
        if(retorno.ok) this.props.history.push('/');
            
        } 
        catch (erro) {
            console.log(erro)
        }
    }

    render() {
        return(
            <div className="body">
            <form className="form-signin" onSubmit={this.signIn}>
                
				<h1 className="h3 mb-3 font-weight-normal">Por favor, faça login</h1>
                <MsgErro msg ={this.state.msgErro}/>
                <label htmlFor="inputEmail" className="sr-only" >E-mail</label>
                <input type="email" id="inputEmail" className="form-control" name="email" placeholder="Endereço de e-mail" required autofocus
                onChange={this.inputHandler} />
				<label htmlFor="inputPassword" className="sr-only"  >Senha</label>
                <input type="password" id="inputPassword" className="form-control" name="senha" placeholder="Sua senha" 
                required
                onChange={this.inputHandler} />
				<button className="btn btn-lg btn-primary btn-block" type="submit">Entrar</button>
			</form>

            </div>
        )
    }


}

