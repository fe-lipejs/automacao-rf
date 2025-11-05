import './cadServico.css'

function CadServico() {
    return (
        <div className="container">
            <h1>Postar Serviço</h1>

            <label htmlFor="categoria">Categoria</label>
            <select id="categoria">
                <option value="">Selecione uma categoria</option>
                <option value="corte">Corte de cabelo</option>
                <option value="manicure">Manicure</option>
                <option value="pedicure">Pedicure</option>
                <option value="maquiagem">Maquiagem</option>
            </select>

            <label>Imagem do serviço</label>
            <div className="upload" onClick={() => document.getElementById('imagem').click()}>
                <img className='mx-auto '
                    src="https://cdn-icons-png.flaticon.com/512/685/685655.png"
                    alt="camera icon"
                />
                <span>Adicionar imagem</span>
            </div>

            <input
                type="file"
                id="imagem"
                accept="image/*"
                style={{ display: 'none' }}
                onChange={(event) => mostrarImagem(event)}
            />

            <img id="preview" alt="Prévia da imagem" />

            <label htmlFor="nome">Nome do serviço</label>
            <input type="text" id="nome" placeholder="Digite o nome do serviço" />

            <label htmlFor="valor">Valor</label>
            <input type="text" id="valor" placeholder="Digite o valor" />

            <button>Publicar</button>
        </div>

    )
}

export default CadServico;