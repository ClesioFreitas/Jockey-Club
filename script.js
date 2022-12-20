const CAVALOS = ["Marujo", "Tordilho", "Belga", "Twister", "Jade", "Lucky"];

let apostas = []; // vetor vazio para capturar os valores 

function adicionarApostas(){
  const inCavalo = document.querySelector("#inCavalo");
  const inValor = document.querySelector("#inValor");
  const outApostas = document.querySelector("#outApostas");

  const cavalo = Number(inCavalo.value);
  const valor = Number(inValor.value);

  if(isNaN(cavalo) || isNaN(valor) || valor === 0 || !validarApostar(cavalo)){
    alert("Aposta inválida");
    inCavalo.focus()
    return;
  }

  apostas.push({cavalo: cavalo, valor: valor});

  let lista = "Apostas Realizadas\n--------------------------\n";

  for(let i = 0; i < apostas.length; i++){
    lista += "N " + apostas[i].cavalo + " " + obterCavalo(apostas[i].cavalo);
    lista += " - R$: " + apostas[i].valor.toFixed(2) + "\n";
  }
  outApostas.textContent = lista;


  inCavalo.value = "";
  inValor.value = "";
  inCavalo.focus();
}

const btApostar = document.querySelector("#btApostar")
btApostar.addEventListener('click', adicionarApostas)


function validarApostar(num){
  const tam = CAVALOS.length
  if(num >= 1 && num <= tam){
    return true;
  } else {
    return false
  }
}

function mostrarCavalo(){
  const outCavalo = document.querySelector("#outCavalo");

  if(inCavalo.value === ""){
    outCavalo.textContent = "";
    return;
  }

  const cavalo = Number(inCavalo.value);

  if(isNaN(cavalo) || !validarApostar(cavalo)){
    outCavalo.textContent = "Número do Cavalo Inválido"
    return;
  }

  const nomeCavalo = obterCavalo(cavalo);
  const numApostas = contarApostas(cavalo);
  const total = totalizarApostas(cavalo);

  outCavalo.textContent = nomeCavalo + " (Apostas: " + numApostas;
  outCavalo.textContent = " - R$: " + total + ")";
}
const inCavalo = document.querySelector("#inCavalo");
inCavalo.addEventListener("blur", mostrarCavalo)


function obterCavalo(numCavalo){
