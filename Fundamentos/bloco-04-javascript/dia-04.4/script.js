let player = {
    name: 'Marta',
    lastName: 'Silva',
    age: 34,
    medals: ['golden: 2', 'silver: 3'],
    bestInTheWorld: [2006, 2007, 2008, 2009, 2010, 2018]
}

console.log('A jogadora ' + player.name + ' ' + player.lastName + ' tem ' + player.age + ' anos.');

let names = {
    person1: 'João',
    person2: 'Maria',
    person3: 'Jorge',
};

let mensagem = 'Olá ';

for(let key in names) {
    console.log(mensagem + names[key]);
}

let car = {
    model: 'A3 Sedan',
    manufacturer: 'Audi',
    year: 2020
};

for(let key in car) {
    console.log(key, car[key]);
}

//Exercícios do dia

//1:

let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

var mensagem2 = 'Seja bem-vindo(a) ';
console.log(mensagem2 + info.personagem)

info['recorrente'] = 'Sim';

console.log(info.recorrente);

for(let key in info) {
    console.log(key);
}

//4

for(let key in info) {
    console.log(info[key]);
}

//5

let info2 = {
    personagem: 'Tio Patinhas',
    origem: 'Christmas on Bear Mountain, Dells Four Color Comics #178',
    nota: 'O último MacPatinhas',
    recorrente: 'Sim',
}

for(let key in info2) {
    console.log(key, info[key]);
    console.log(key, info2[key]);
}

//Functions

//1

let word = 'arara';

function verificaPalindromo(word) {
    
    for(i = word.lenth - 1; i >= 0; i-= 1) {
        let resultado = word[i];
    }

    if(word === word[i]) {
        let mensagemP = 'Não é palíndromo';
    }

    return mensagemP;
}