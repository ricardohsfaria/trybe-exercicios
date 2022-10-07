const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = (callback) => {
    setTimeout(() => {
  const maxTemperature = 58;
  const temperature = Math.floor(Math.random() * maxTemperature);
    callback(temperature);

}, messageDelay());

};

// crie a função sendMarsTemperature abaixo

const sendMarsTemperature = (getMarsTemperature(temperature)) => {
    console.log(`A temperatura de Marte é: ${getMarsTemperature(temperature)} graus celsius`);
}; // Imprime "A temperatura de Marte é: 20 graus celsius", por exemplo

console.log(sendMarsTemperature(getMarsTemperature))