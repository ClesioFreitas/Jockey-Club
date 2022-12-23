const CAVALOS = ["Tony", "Val", "Brand", "Twister", "Blue", "Pican"];

let apostas = [];

function adicionarApostas(){
  const inCavalo = document.querySelector("#inCavalo")
  const inValor = document.querySelector("#inValor")
  const outApostas = document.querySelector("#outApostas");

  const cavalo = Number(inCavalo.value);
  const valor = Number(inValor.value);

  if(isNaN(cavalo) || isNaN(valor) || !validaApostar(cavalo)){
    alert("Cavalo inválido...");
    return;
  }

  apostas.push({cavalo: cavalo, valor: valor})

  let lista = "Apostas Realizadas\n---------------------------\n"

  for(let i = 0; i < apostas.length; i++){
    lista += "N " + apostas[i].cavalo + " " + obterCavalo(apostas[i].cavalo);
    lista += " - R$: " + apostas[i].valor.toFixed(2) + "\n";
  }
  outApostas.textContent = lista;

  inCavalo.value = "";
  inValor.value = "";
  inCavalo.focus();
}

const btApostar = document.querySelector("#btApostar");
btApostar.addEventListener("click", adicionarApostas)


function mostrarApostas(){
  const inCavalo = document.querySelector("#inCavalo")
  const outCavalo = document.querySelector("#outCavalo")

  if(inCavalo.value == ""){
    outCavalo.textContent = "";
    return
  }

  const cavalo = Number(inCavalo.value);

  if(isNaN(cavalo) || !validaApostar(cavalo)){
    outCavalo.textContent = "Numero Cavalo Invalido";
    return
  }

  const nomeCavalo = obterCavalo(cavalo);
  const numApostas = contarApostas(cavalo);
  const total = totalizarApostas(cavalo);

  outCavalo.textContent = nomeCavalo + " (Apostas: " + numApostas;
  outCavalo.textContent += " - R$: " + total.toFixed(2) + ")";
}

const inCavalo = document.querySelector("#inCavalo");
inCavalo.addEventListener("blur", mostrarApostas)


function validaApostar(num){
  const tam = CAVALOS.length;
  if(num >= 1 && num <= tam){
    return true;
  } else {
    return false;
  }
}

function obterCavalo(numCavalo){
  const posicao = [numCavalo - 1]
  return CAVALOS[posicao]
}

function contarApostas(numApostas){
  let contador  = 0;
  for(let i = 0; i < apostas.length; i++){
    if(apostas[i].cavalo === numApostas){
      contador++
    }
  }
  return contador
}

function totalizarApostas(numCavalo){
  let total = 0;

  for(let i = 0; i < apostas.length; i++){
    if(apostas[i].cavalo === numCavalo){
      total += apostas[i].valor;
    }
  }
  return total; 
}

inCavalo.addEventListener("focus", function() {
  inCavalo.value = "";
  document.querySelector("#outCavalo").textContent = "";
});

function ganhadorPareo(){
  const ganhador = Number(prompt("Numero do cavalo: "));

  if(isNaN(ganhador) || !validaApostar(ganhador)){
    alert("Cavalo inválido...");
    return;
  }

  const outApostas = document.querySelector("#outApostas");

  let resumo = "Resultado final do Pareo \n";
  resumo += "------------------------------\n";
  resumo += "N Total de Apostas: " + apostas.length + "\n";
  resumo += "Total Geral R$: " + ganhador + " - " + totalizarGeral().toFixed(2) + "\n\n";
  resumo += "Ganahdor numero: " + ganhador + " - " + obterCavalo(ganhador) + "\n";
  resumo += "------------------------------\n";
  resumo += "N de Apostas: " + contarApostas(ganhador) + "\n";
  resumo += "Total Apostado R$: " + totalizarApostas(ganhador).toFixed(2); 

  outApostas.textContent = resumo;

  btApostar.disabled = true;
  btGanhador.disabled = true;
  btNovo.focus();
}

const btGanhador = document.querySelector("#btGanhador");
btGanhador.addEventListener("click", ganhadorPareo);


function totalizarGeral(){
  let total = 0;
  for(let i = 0; i < apostas.length; i++){
    total += apostas[i].valor; 
  }
  return total;
}

const btNovo = document.querySelector("#btNovo");
btNovo.addEventListener("click", () => {
  location.reload();
})