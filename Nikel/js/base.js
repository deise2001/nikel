const nome="Deise Ferreira";
let nome2 = "";
let pessoa1 = {
    nome:"Marcelo",
    idade: "33",
    profissão: "programador",
}

let nomes = ["Deise", "Ezequiel", "Juvito"];

let pessoasListaVazia = [];

let pessoas = [
    {
        nome:"Deise",
        idade: "21",
        profissão: "atoa",
    },
    {
        nome:"Ezequiel",
        idade: "20",
        profissão: "lindo"
    }
];

function alterarNome() {
    nome2 = "Dede";
    console.log("valor alterado:");
    console.log(nome2);
}

function recebeEalteraNome (novoNome) {
    nome2 = novoNome;
    console.log("valor alterado recebendo um nome:");
    console.log(nome2);
}

function imprimirPessoa(pessoa){
    console.log(pessoa);

console.log("nome:");
console.log(pessoa.nome);

console.log("idade:");
console.log(pessoa.idade);

console.log("profissão:");
console.log(pessoa.profissão);
}

function adicionarPessoa (pessoa) {
    pessoas.push(pessoa);
}

function imprimirPessoas(){
    console.log("-------IMPRIMIR PESSOAS--------");
    pessoas.forEach((item) => {
        console.log("nome:");
        console.log(item.nome);

        console.log("idade:");
        console.log(item.idade);

        console.log("profissão:");
        console.log(item.profissão);
    })
}

imprimirPessoas();

adicionarPessoa({
    nome: "pedrao",
    idade: "28",
    trabalha: "porteiru",
})

imprimirPessoas();

console.log(pessoas);

// imprimirPessoa(pessoa1);

// imprimirPessoa({
//     nome:"Mariana",
//     idade: "347",
//     profissão: "vendedora",
// })

//recebeEalteraNome("Zeze");
//recebeEalteraNome("MAria");
//alterarNome();
