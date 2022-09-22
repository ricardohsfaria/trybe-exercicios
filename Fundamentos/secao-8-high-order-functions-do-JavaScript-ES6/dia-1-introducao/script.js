//Nova pessoa contratada

const generateEmployee = (fullName) => {
    const email = fullName.replace(' ', '_').toLowerCase();
    return { fullName, email: `${email}@trybe.com`};
}

const newEmployees = (callback) => {
    const employees = {
      id1: callback('Pedro Guerra'),
      id2: callback('Luiza Drumond'),
      id3: callback('Carla Paiva'),
    }
    
    return employees;
  };

// console.log(newEmployees(generateEmployee));

//Sorteador de loteria

const result = (bettedNumber, rightNumber) => {
    bettedNumber === rightNumber;
}

const sorteio = (bettedNumber, callback) => {
    const randomNumber = Math.floor(Math.random() * (5 - 1 + 1)) + 1;
    return callback(bettedNumber, randomNumber) ? 'Parabéns você ganhou' : 'Tente novamente'
}

console.log(sorteio(2, result));