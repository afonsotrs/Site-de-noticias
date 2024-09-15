import React from "react";
// import '../TelaLogin/TelaLogin.css'
const TelaCadastro = () => {
    return(
        <div className="containercadastro">
        <div className="formcadastro">
            <div className="headercadastro">
                <h1>Cadastre-se</h1>
            </div>
            <input type="email" id="email" placeholder="Digite seu email" />
            <input type="password" id="senha" placeholder="Digite sua senha" />
            <button type="submit" id="bntcadastro">Cadastre-se</button>
            <div className="footercadastro">
                <a href="/login">Já possui uma conta? Entre aqui</a>
            </div>
        </div>
    </div>
    )
}

export default TelaCadastro;