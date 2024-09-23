import * as Z from '../styles/ZonaConteudoStyles';
import imagem from '../assets/Group_14.webp'

const ZonaConteudo = () => {
    return (
        <>
            <Z.conteudo>
                <Z.Card>ENCONTRE TODOS <br/>OS SEUS POKÉMONS FAVORITOS.</Z.Card>
                <img src={imagem} alt="Imagem de fundo" style={{ width: "60%", height: "60%", padding:"0 0 400px 465px"}} />
            </Z.conteudo>
        </>
    );
}

export default ZonaConteudo;