import React from "react";
import './TelaLogin.css';

const TelaLogin = () => {
    return(
        <div className="container">
            <div className="header">
                <h1>Faça seu login</h1>
            </div>
            <div className="form">
                <input type="email" id="email" placeholder="Digite seu email..." />
                <input type="password" id="senha" placeholder="Digite sua senha..." />
                <button type="submit" id="bnt">Entrar</button>
            </div>
            <div className="footer">
                <a href="/cadastro">Não possui uma conta? cadastre-se aqui</a>
            </div>
        </div>
    )
}

export default TelaLogin;