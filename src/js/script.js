// declaracoes e variantes

var nome = "fiap;"
console.log(nome)

let idade1 = 19
console.log(idade1)

const sobrenome="fabiho"
console.log(sobrenome)

// declarando uma variavel indefinida
let nome1;
console.log(nome1)
// declarando uma variavel nula
let nome2=null;
console.log(nome2)

// tipo de variavveis

let exemplo1 =10;
console.log(typeof exemplo1)

let exemplo2 ="tecnologia"
console.log(typeof exemplo2)

let exemplo3 =true;
console.log(typeof exemplo3)

let exemplo4 ={};
console.log(typeof exemplo4)

let exemplo5 =[];
console.log(typeof exemplo5)

let numFloat =123.456;
console.log(parseInt(numFloat));

let numString ="123.456"
console.log(parseFloat(numString));

// metodos 

// length = verifica o tamanho da string 
let frase ="o mundo da tecnologia";
console.log(frase.length);

// indexOF - retorna um trecho do texto 

let texto="a programaçao indomavel e sustentavel";
console.log(texto.indexOf("ao"))

// slice - retorna um trecho do texto com inicio e final

let info ="processamento de ponta";
console.log(info.slice(2,6));

//operados aritimeticos

const num1=10;
const num2=20;

console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);

// operadores logicos


const num3=10;
const num4=20;

console.log(num3 < num4);
console.log(num3 > num4 && num4 < num3);
console.log(num3 > num4 || num4 > num3);

//operadores de comparaçao 

console.log(num3 == num4 );
console.log(num3 === num4 );

// estrutura condicional //

//if
let logado="fiap";

if(logado=="fiap"){
    console.log("e verdadeiro")

}

//if/else

let usuario="teste"
if(usuario=="teste"){
    console.log("usuario correto")
}else{
    console.log("usuaio errado")
}

//if encadeado / aninhado

let idade =15

if(idade < 15){
    console.log("menor de idade")
}else if(idade >15 && idade <18){
    console.log("nao e maior mas pode entrar")    
}else{
    console.log("e maior de idade pode entrar")
}

//switch

let time ="vasco"

switch(time){
    case "vasco":
        console.log("melhor time")
        break;
    case "sao paulo":
        console.log("nao e melhor time")
        break;
    case "palmeiras":
        console.log("nao tem mundial")
        break;
    default:
        console.log("nenhuma das opçoes")
}

// ternario 

let valor =100;

let resultado = valor == 100? "certo" :"errado"
console.log(resultado)

//ternario encadeado
let produto ="notebok"
const desconto =true;
const preco= produto ==="notebok" ? desconto ? 100 :200 : produto ==="mouse" ? 30 : 100
console.log(preco)  

//estrutura de repetiçao

//for

for(let i=0; i<=10;i++){
    consolelog.("o valor de i e" ,i)

}