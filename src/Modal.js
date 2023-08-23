export default function Modal({ personagem }) {
    return ( 
        <div id = 'Modal'>
            <p className="design">Nome: {personagem.name} </p>
            <p className="design">Origem: {personagem.origin.name} </p>
        </div>
        );
}

