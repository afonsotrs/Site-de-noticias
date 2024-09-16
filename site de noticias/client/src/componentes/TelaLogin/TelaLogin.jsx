import React from "react";

const TelaLogin = () => {
    return(
        <div className="containerlogin">
            <div className="formlogin">
                <div className="headerlogin">
                    <h1>Faça seu login</h1>
                </div>
                <input type="email" id="email" placeholder="Digite seu email" />
                <input type="password" id="senha" placeholder="Digite sua senha" />
                <p id="entrecom">ou entre com</p>
                <button id="googleimg">
                    <img src="https://files.tecnoblog.net/wp-content/uploads/2021/09/logotipo_da_empresa_google.jpg" alt="" />
                </button>
                <button type="submit" id="bntlogin">Entrar</button>
                <div className="footerlogin">
                    <a href="/cadastro">Não possui uma conta? cadastre-se aqui</a>
                </div>
            </div>
        </div>
    )
}

export default TelaLogin;