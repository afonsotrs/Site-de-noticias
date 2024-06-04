import './App.css'

function App() {
  const apikeynoticias = `EppOEezqBbNodqRDFIDJKzGXAdGgG6oG`;
  const apikeyclima = `b85cd0d62fa31064681a4e0ad6a81b61`;

  return (
    <div className="App">
      <header>
        <main>
          <div className="barra-preta">

            <div className="entrebnt">
                <button id="entrebnt">ENTRE</button>
            </div>

            <div className="redes-sociais">
              <ul>
                <li>
                  <a href="https://github.com/afonsotrs">
                    <img src="/src/imagens/githublogo.jpg"/>
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/afonso-torres-413542309/">
                    <img src="/src/imagens/linkedinlogo.jpg"/>
                  </a>
                </li>
                <li>
                    <a href="https://www.instagram.com/afonsotrs_">
                    <img src="/src/imagens/instalogo.jpg"/>
                  </a>
                </li>
              </ul>
            </div>

          </div>
        </main>
      </header>

      <section>

        <div className="pre-conteudo">
            <div className="logo">
                <img src="/src/imagens/logo.png" alt="logo"/>
            </div>

            <div className="cripto-container">

            </div>

            <div className="previsaodotempo">
              <div className="cidade-tempo">
                <div className="tempoimg">
                  <img src="https://openweathermap.org/img/wn/10d@2x.png"/>
                </div>
                <div className="cidade">
                  <font face="Ubuntu"><span>Parnamirim</span></font>
                  <img src="/src/imagens/lupa.png"/>
              </div>
              <div className="temperatura">
                <div className="temp-min">
                  <font face="Ubuntu" ><span>23ºC</span></font>
                </div>
                <div className="temp-max">
                  <font face="Ubuntu"><span>25ºC</span></font>
                </div>
              </div>
            </div>

            <div className="buscar-cidade">

              </div>
            </div>


            <div className="buscar">
                <input type="text" id="buscar" placeholder="Buscar Notícias..."/>
                <img src="/src/imagens/lupa.png" id="buscarbnt"/>
            </div>
        </div>

        <div className="conteudo">

            
        </div>

      </section>

      <footer>
          

      </footer>
    </div>
  )
}

export default App;
