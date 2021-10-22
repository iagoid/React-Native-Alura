import logo from "../../assets/logo.png"

import tomate from '../../assets/frutas/Tomate.png';
import brocolis from '../../assets/frutas/Brócolis.png';
import batata from '../../assets/frutas/Batata.png';
import pepino from '../../assets/frutas/Pepino.png';
import abobora from '../../assets/frutas/Abóbora.png';

const cesta = {
    topo: {
        titulo: "Detalhe da cesta",
    },
    detalhes: {
        nome: "Cesta de Verduras",
        logoFazenda: logo,
        nomeFazenda: "Johny Jack Farm",
        descricao: "Uma cesta com produtos selecionados cuidadosamente diretamente para sua fazenda.",
        preco: "R$ 40,00",
        botao: "Comprar"
    },
    itens: {
        titulo: "Itens da cesta",
        lista: [
            {
                id: 1,
                nome: "Tomate",
                imagem: tomate,
            },
            {
                id: 2,
                nome: "Brócolis",
                imagem: brocolis,
            },
            {
                id: 3,
                nome: "Batata",
                imagem: batata,
            },
            {
                id: 4,
                nome: "Pepino",
                imagem: pepino,
            },
            {
                id: 5,
                nome: "Abóbora",
                imagem: abobora,
            }
        ]
    },

}

export default cesta