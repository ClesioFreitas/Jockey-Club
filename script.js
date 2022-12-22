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

  outApostas.textContent = lista
}

const btApostar = document.querySelector("#btApostar");
btApostar.addEventListener("click", adicionarApostas)

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