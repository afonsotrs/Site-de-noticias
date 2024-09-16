import React from "react";
import GoogleLogin from 'react-google-login'

const TelaCadastro = () => {
    const response = (response) => {
        console.log(response)
    }
    return(
        <div className="containercadastro">
        <div className="formcadastro">
            <div className="headercadastro">
                <h1>Cadastre-se</h1>
            </div>
            <input type="text" id="nome" placeholder="Digite seu nome" />
            <input type="email" id="email" placeholder="Digite seu email" />
            <input type="password" id="senha" placeholder="Digite sua senha" />
            <p id="entrecom">ou entre com</p>
            <GoogleLogin
                clientId="526062878779-hb72k0oicheo7c80cosvobrt7rdon63o.apps.googleusercontent.com"
                buttonText="Entre com o google"
                onSuccess={response}
                onFailure={response}

            />
            {/* <button id="googleimg">
                <img src="https://files.tecnoblog.net/wp-content/uploads/2021/09/logotipo_da_empresa_google.jpg" alt="" />
            </button> */}
            <button type="submit" id="bntcadastro">Cadastre-se</button>
            <div className="footercadastro">
                <a href="/login">Já possui uma conta? Entre aqui</a>
            </div>
        </div>
    </div>
    )
}

export default TelaCadastro;