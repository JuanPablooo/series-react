import React, {Component} from 'react';
import { Link, Redirect } from 'react-router-dom';
import {signOut} from   '../services/auth-service';


export default class Navbar extends Component{
    constructor(){
        super()
        this.state = {
            signOut:false
        }
    }
    signOut = (e)=>{
        signOut()
    }

    render(){
        if(this.state.signOut){
            return <Redirect to="/login"/>
        }
        return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <Link className="navbar-brand" to="/">Series</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <Link className="nav-link" to="./">Home <span className="sr-only">(current)</span> </Link>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Link</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="./autores">Autores</a>
                    </li>
                </ul>
                
                   
                    <button className="btn btn-outline-danger my-2 my-sm-0 " type="submit"
                    onClick={ ()=>{
                        signOut()
                        this.setState({signOut: true})

                    }
                    }
                    >Search</button>
               
            </div>
        </nav>

        )
    }
}
