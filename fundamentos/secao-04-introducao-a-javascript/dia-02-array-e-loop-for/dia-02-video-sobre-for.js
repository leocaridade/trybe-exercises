var listaDeNomes = ['Joana', 'Maria', 'Lucas'];
listaDeNomes.push('Gabriel');

for (var indice = 0; indice < listaDeNomes.length; indice++) {
    var mensagem = 'Boas vindas, ' + listaDeNomes[indice] + '!';
    console.log(mensagem);
}