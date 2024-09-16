import React, { useEffect, useRef } from 'react'
import '../../App.css'
import {useNavigate} from "react-router-dom"

function TelaInicial() {
    // Variáveis
    const apikeynoticias = `EppOEezqBbNodqRDFIDJKzGXAdGgG6oG`;
    const apikeyclima = `0de1f91a7e589fb85bb403399de16f61`;
    const cidadeRef = useRef(null);
    const tempminRef = useRef(null);
    const tempmaxRef = useRef(null);
    const imgclima = useRef(null);

    const navigate = useNavigate();
    const navegar = () => {
        navigate('/login');
    };

    // API clima
    useEffect(() => {
        if("geolocation" in navigator){
        navigator.geolocation.getCurrentPosition(function(position){
        console.log(position);
        const lon = position.coords.longitude;
        const lat = position.coords.latitude;

        const acessardados = async() => {
            const urlapiclima =  `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apikeyclima}`;
            const res = await fetch(urlapiclima);
            const data = await res.json(); 
            console.log(data);
            return data;
        }

        const mostrardados = async() => {
            const data = await acessardados();
            cidadeRef.current.innerHTML = data.name;
            tempmaxRef.current.innerHTML = parseInt(data.main.temp_max.toString().slice(0, 2)) + "°c"; 
            tempminRef.current.innerHTML = parseInt(data.main.temp_min.toString().slice(0, 2)) + "°c";
            const tempo = data.weather[0].icon;
            imgclima.current.setAttribute("src", `http://openweathermap.org/img/wn/${tempo}.png`)
        }
        mostrardados();
        },function(error){
        console.log(error);
        })
        }else{
        alert("não foi possivel pegar a localização");  
        }
        }, [apikeyclima], [apikeynoticias]);
    return (
        <div className="App">
        <header>
        <main>
            <div className="barra-preta">
            <div className="entrebnt">
                    <button id="entrebnt" onClickCapture={navegar}>ENTRE</button>
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

            <div className="previsaodotempo">
            <div className="cidade-tempo">
                <div className="tempoimg">
                <img id="imgclima" ref={imgclima} src=""/>
                </div>
                <div className="cidade">
                <font face="Ubuntu">
                    <span id="nomecidade" ref={cidadeRef}></span>
                </font>
                <img src="/src/imagens/lupa.png"/>               
                </div>

                <div className="temperatura">
                <div className="temp-min">
                    <font face="Ubuntu">
                    <span id="temp-min" ref={tempminRef}></span>
                    </font>
                </div>
                <div className="temp-max">
                    <font face="Ubuntu">
                    <span id="temp-max" ref={tempmaxRef}></span>
                    </font>
                </div>
                </div>
            </div>
            </div>
            <div className="buscar">
                <input type="text" id="buscar" placeholder="Buscar Notícias..."/>
                <img src="/src/imagens/lupa.png" id="buscarbnt"/>
            </div>
        </div>

        <div className="conteudo">
            <div className='categorias'>
                <button id='bntcategorias'>
                    <p>ECONOMIA</p>
                </button>
                <button id='bntcategorias'>
                    <p>ESPORTES</p>
                </button>
                <button id='bntcategorias'>
                    <p>CULTURA</p>
                </button>
                <button id='bntcategorias'>
                    <p>ENTRETERIMENTO</p>
                </button>
                <button id='bntcategorias'>
                    <p>FOFOCA</p>
                </button>
                <button id='bntcategorias'>
                    <p>MODA</p>
                </button>
                <button id='bntcategorias'>
                    <p>MUSICA</p>
                </button>
            </div>

            <div className="principaisnoticias">
                <h1>Notícias do dia</h1>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5SAMcJQwsoL2QowsKsjv3JTCNtE0mx8rL5Q&s" alt="" />
                <p>Datena senta o cacete no Pablo Marçal</p>
            </div>
            
        </div>

        </section>

        <footer>
            

        </footer>
    </div>
    )
}

export default TelaInicial;
