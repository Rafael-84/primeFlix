import { Link } from "react-router-dom";
import "./erro.css"

function Error(){
    return(
        <div className="not-found">
            <h1>404</h1>
            <h2>Página não encontrada!</h2>
            <Link to="/">Veja Todos os Filmes!</Link>
        </div>
    )
};

export default Error;