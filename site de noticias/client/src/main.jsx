import { StrictMode } from 'react'
import Reactdom from 'react-dom'
import './index.css'
import {createBrowserRouter, RouterProvider } from 'react-router-dom'
import TelaInicial from './componentes/TelaInicial/TelaInicial.jsx'
import TelaLogin from './componentes/TelaLogin/TelaLogin.jsx'
import TelaCadastro from './componentes/TelaCadastro/TelaCadastro.jsx'


const rota = createBrowserRouter([
  {
    path: '/',
    element: <TelaInicial/>
  },
  {
    path: 'login',
    element: <TelaLogin/>
  },
  {
    path: 'cadastro',
    element: <TelaCadastro/>
  }
]);

Reactdom.render(
  <StrictMode>
    <RouterProvider router={rota} />
  </StrictMode>,
  document.getElementById('root')
)
