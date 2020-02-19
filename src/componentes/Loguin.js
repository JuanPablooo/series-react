import React, { Component } from 'react';
import './loguin.css'

export default class Loguin extends Component{
    constructor(){
        super()
        this.state = {
            email:"",
            senha: ""
        }
    }
    inputHandler = (e)=>{
        const {name, value} = e.target
        this.setState({[name]:value})
    }
    signIn = async (e)=>{
        e.preventDefault()
        const {email, senha} = this.state;
        const params = {
            method:"POST",
            headers: {
                Accept: 'application/json',
                "Content-type": 'application/json'
            },
            body: JSON.stringify({
                email:email,
                senha: senha
            })
        }
        try {
            const retorno = await fetch("http://localhost:3000/auth/autenticar", params)
            console.log(retorno)
            const usuario = await retorno.json();
            console.log(usuario)
        } 
        catch (erro) {
            console.log(erro)
        }
    }

    render() {
        return(
            <form className="form-signin" onSubmit={this.signIn}>
				<h1 className="h3 mb-3 font-weight-normal">Por favor, faça login</h1>
                <label for="inputEmail" className="sr-only" >E-mail</label>
                <input type="email" id="inputEmail" className="form-control" placeholder="Endereço de e-mail" required autofocus
                onChange={this.inputHandler} />
				<label for="inputPassword" className="sr-only">Senha</label>
                <input type="password" id="inputPassword" className="form-control" placeholder="Sua senha" 
                required
                onChange={this.inputHandler} />
				<button className="btn btn-lg btn-primary btn-block" type="submit">Entrar</button>
			</form>
        )
    }


}

