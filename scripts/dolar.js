// Seleciona todos os elementos com a classe 'produto'
const produtos = document.querySelectorAll('.produto');

produtos.forEach(produto => {
    const precoTexto = produto.querySelector('.preco').innerText; // Obtém o texto do preço
    const precoDolar = parseFloat(precoTexto); // Converte para número (float)

    // Função para obter o valor do dólar em relação ao real
    fetch(`https://economia.awesomeapi.com.br/last/USD-BRL`)
        .then(resposta => resposta.json())
        .then(economia => {
            const cotacaoDoDolar = economia.USDBRL.bid; // Obtendo a cotação do dólar

            const valorReal = precoDolar * cotacaoDoDolar; // Convertendo para reais
            produto.querySelector('.precoReal').innerHTML = `R$ ${valorReal.toFixed(2)}`; // Atualizando o HTML

            produto.querySelector('.preco').innerHTML = `$ ${precoDolar.toFixed(2)}`; // Atualizando o HTML para mostrar o preço em dólar
        });
});