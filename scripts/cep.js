// Variáveis globais para armazenar preço do produto e frete
let preco = 2361.23;
let frete = 0;

// Tabela de frete baseada na região
const fretesPorRegiao = {
    "Norte": 50,
    "Nordeste": 40,
    "Sul": 20,
    "Sudeste": 10,
    "Centro-Oeste": 30
};

function calcularTotal() {
    const total = frete;
    document.getElementById("frete").value = `R$ ${total.toFixed(2)}`;
}

// Atualiza o campo de total
function calcularTotal() {
    const total = preco + frete;
    document.getElementById("resultado").value = `R$ ${total.toFixed(2)}`;
}

// Preenche a região e calcula o frete automaticamente
const preencherFormulario = (endereco) => {
    const regiaoInput = document.getElementById("regiao");
    const regiao = endereco.regiao; // A API já retorna a região correta
    regiaoInput.value = regiao; // Exibe a região no input

    // Define o frete com base na tabela
    frete = fretesPorRegiao[regiao] || 0; // Se não encontrar, assume 0
    
    calcularTotal(); // Atualiza o total após definir o frete
};

// Verifica se o CEP tem 8 dígitos
const cepValido = (cep) => cep.length === 8;

// Busca a API ViaCEP para obter a região
const pesquisarCep = async () => {
    const cep = document.getElementById("cep").value;
    const url = `https://viacep.com.br/ws/${cep}/json/`;

    if (cepValido(cep)) {
        try {
            const dados = await fetch(url);
            const endereco = await dados.json();
            if (!endereco.erro) {
                preencherFormulario(endereco);
            } else {
                alert("CEP inválido!");
            }
        } catch (error) {
            console.error("Erro ao buscar o CEP:", error);
        }
    } else {
        alert("CEP inválido! Digite 8 números.");
    }
};

// Evento para buscar o CEP ao perder o foco do campo
document.getElementById("cep").addEventListener("focusout", pesquisarCep);