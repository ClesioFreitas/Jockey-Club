const CAVALOS = ["Tony", "Val", "Brand", "Twister", "Blue", "Pican"];

function adicionarApostas(){
  const inCavalo = document.querySelector("#inCavalo")
  const inValor = document.querySelector("#inValor")
  const outApostas = document.querySelector("#outApostas");

  const cavalo = Number(inCavalo.value);
  const valor = Number(inValor.value);

  if(isNaN(cavalo) || isNaN(valor) || valor === 0 || validaApostar(cavalo)){
    alert("Cavalo inválido...")
    return;
  }

}

const btApostar = document.querySelector("#btApostar");
btApostar.addEventListener("click", adicionarApostas)