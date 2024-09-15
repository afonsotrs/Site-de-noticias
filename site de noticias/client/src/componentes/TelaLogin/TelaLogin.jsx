import React from "react";
// import './TelaLogin.css';

const TelaLogin = () => {
    return(
        <div className="containerlogin">
            <div className="formlogin">
                <div className="headerlogin">
                    <h1>Faça seu login</h1>
                </div>
                <input type="email" id="email" placeholder="Digite seu email" />
                <input type="password" id="senha" placeholder="Digite sua senha" />
                <button type="submit" id="bntlogin">Entrar</button>
                <div className="footerlogin">
                    <a href="/cadastro">Não possui uma conta? cadastre-se aqui</a>
                </div>
            </div>
        </div>
    )
}

export default TelaLogin;