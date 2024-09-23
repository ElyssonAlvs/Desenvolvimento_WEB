import * as Z from '../styles/ZonaConteudoStyles';
import imagem from '../assets/Group_14.webp'
//import { useNavigate } from 'react-router-dom';


const ZonaConteudo = () => {

    // const navigate = useNavigate();

    // const handleClick = () => {
    //     navigate('/pokemons');
    // }


    return (
        <>
            <Z.conteudo>
                <Z.Card>
                    ENCONTRE TODOS <br/> OS SEUS POKÉMONS FAVORITOS.
                     <p style={{
                                fontSize: '1.2rem',
                                marginBottom: '20px',
                                marginTop: '40px'}}>
                        Selecione os pokémons para a sua <br/> 
                        batalha em diferentes pokédex. <br/>
                        Você pode conhecer os tipos de <br/>
                        Pokémons, seus pontos fortes e <br/>
                        suas habilidades.
                    </p>
                    <button style=
                            {
                                {   
                                    padding: '10px 20px',
                                    backgroundColor: 'blue',
                                    color: 'white',
                                    border: 'none',
                                    cursor: 'pointer',
                                    fontSize: '1rem',
                                    borderRadius: '10px'
                                }
                            }
                    >
                        Ver Pokémons
                    </button>
                </Z.Card>
                <img 
                    src={imagem} 
                    alt="Imagem de fundo" 
                    style=
                        {
                            { 
                                width: "64%",
                                flex: '1', 
                                padding:"0 0 400px 450px"
                            }
                        } />
            </Z.conteudo>
                
        </>
    );
}

export default ZonaConteudo;