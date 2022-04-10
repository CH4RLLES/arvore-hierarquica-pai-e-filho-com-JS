//[1,2] [1,3] [2,7] [3,8] [5,6] [2,4] [3,5]
//[A,B] [A,C] [B,G] [C,H] [E,F] [B,D] [C,E]
var entrada = [[1,2] ,[1,3], [2,7] ,[3,8] ,[5,6], [2,4] ,[3,5]];
var letras = 'ABCDEFGHIJKLMNOPQRSTUVXZ';
var arrayLetras = letras.split('');

//Popula dadosDaArvore conforme array de entrada
var dadosDaArvore2 = [{idPai:null, id:1, Pai:arrayLetras[0]}]
var i = 1;
entrada.forEach(element => {
    dadosDaArvore2.push(
        {idPai:element[0], id:element[1], Pai:arrayLetras[element[1]-1]}); 
        i++;
});

var excecao = [
    {id:"E1" ,erro:"Mais de 2 filhos"},
    {id:"E2" ,erro:"Ciclo presente"},
    {id:"E3" ,erro:"Raizes multiplas"},
    {id:"E4" ,erro:"Qualquer outro erro"}
]
    
// cria uma árvore que representa a estrutura hierárquica do array inicial
var CriarArvore = function(dadosDaArvore, id, idPai)
{
    var ids = [];
    dadosDaArvore.map(function(x){
        x.Filho = [];
        ids.push(x[id]);
    });
    var raiz = dadosDaArvore.filter(function(x){return ids.indexOf(x[idPai])==-1});
    var dados = [];
    raiz.map(function(x){dados.push(x)});
    while(dados.length > 0)
    {
        var dado = dados.pop();
        var filho =  dadosDaArvore.filter(function(x){return x[idPai] == dado[id]});
        filho.map(function(x){
            dado.Filho.push(x);
            dados.push(x)
        });
    }
    if(raiz.length==1) return raiz[0];

    //EXCEÇÃO
    if(raiz.length>=2) return excecao[2].erro;
    
    return raiz;
}


var arvore = CriarArvore(dadosDaArvore2, "id", "idPai");
var jsonArvore = JSON.stringify(arvore, ["Pai", "Filho"], '\t',);

console.log(jsonArvore);
document.getElementById("arvore").innerHTML = jsonArvore;
    