import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import TelaInicial from "../componentes/TelaInicial/TelaInicial";
import TelaLogin from "../componentes/TelaLogin/TelaLogin";
import TelaCadastro from "../componentes/TelaCadastro/TelaCadastro";

const Routes = () => {
   return(
       <BrowserRouter>
           <Route component = { TelaInicial }  path="/" exact />
           <Route component = { TelaLogin}  path="/sobre" />
           <Route component = { TelaCadastro }  path="/usuario" />
       </BrowserRouter>
   )
}

export default Routes;