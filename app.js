const listaAmigos = document.getElementById('listaAmigos');
const amigoInput = document.getElementById('amigo');
const resultadoLista = document.getElementById('resultado');
let amigos = []; 

function adicionarAmigo() {
  const nomeAmigo = amigoInput.value.trim(); 

  if (nomeAmigo !== "") { 
    amigos.push(nomeAmigo); 
    atualizarListaAmigos(); 
    amigoInput.value = ""; 
  } else {
    alert("Por favor, digite um nome."); 
  }
}

function atualizarListaAmigos() {
  listaAmigos.innerHTML = ""; 

  amigos.forEach(amigo => {
    const li = document.createElement('li'); 
    li.textContent = amigo; 
    listaAmigos.appendChild(li); 
  });
}

function sortearAmigo() {
  if (amigos.length < 2) {
    alert("É necessário pelo menos dois amigos para o sorteio.");
    return;
  }

  
  for (let i = amigos.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [amigos[i], amigos[j]] = [amigos[j], amigos[i]];
  }

  resultadoLista.innerHTML = ""; 


  for (let i = 0; i < amigos.length; i++) {
    const amigoAtual = amigos[i];
    const amigoSorteado = amigos[(i + 1) % amigos.length]; 

    const resultadoItem = document.createElement('li');
    resultadoItem.textContent = `${amigoAtual} tirou ${amigoSorteado}`;
    resultadoLista.appendChild(resultadoItem);
  }
}



amigoInput.addEventListener("keyup", function(event) {
  if (event.key === "Enter") {
    adicionarAmigo();
  }
});