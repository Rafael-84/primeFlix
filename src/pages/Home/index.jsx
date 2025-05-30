import { useEffect, useState } from "react";
import api from "../../services/api";
import { Link } from "react-router-dom";
import './home.css';

//URL API: movie/now_playing?api_key=5e16d340c819ca5881e67343c297adc6&language=pt-BR

function Home() {
    const [filmes, setFilmes] = useState([]);
    const [loading, setLoading] = useState(true);

    //const key = "5e16d340c819ca5881e67343c297adc6";

    useEffect(() => {
        async function loadFilmes() {
            const response = await api.get('movie/now_playing', {
                params: {
                    api_key: import.meta.env.VITE_DBMOVIE_API,
                    language: 'pt-BR',
                    page: 1,
                },

            })

            setFilmes(response.data.results.slice(0, 16));
            setLoading(false);
        }

        loadFilmes()

    }, []);

    if(loading){
        return(
            <div className="loading">
                <h2>Carregando filmes...</h2>
            </div>
        )
    }

    return (
        <div className="container">
            <div className="lista-filmes">
                {filmes.map((filme) => {
                    return (
                        <article key={filme.id}>
                            <strong>{filme.title}</strong>
                            <img src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`} alt={filme.title} />
                            <Link to={`/filme/${filme.id}`}>Acessar</Link>
                        </article>
                    )
                })}
            </div>
        </div>
    )
};

export default Home;