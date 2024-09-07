import React from "react";
import '../TelaLogin/TelaLogin.css'
const TelaCadastro = () => {
    return(
        <div className="container">
        <div className="header">
            <h1>Cadastre-se</h1>
        </div>
        <div className="form">
            <input type="email" id="email" placeholder="Digite seu email..." />
            <input type="password" id="senha" placeholder="Digite sua senha..." />
            <button type="submit" id="bnt">Cadastre-se</button>
        </div>
        <div className="footer">
            <a href="/login">Já possui uma conta? Entre aqui</a>
        </div>
    </div>
    )
}

export default TelaCadastro;