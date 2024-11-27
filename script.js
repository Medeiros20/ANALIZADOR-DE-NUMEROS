let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = []

function isNumero(n){
  if(Number(n) >= 1 && Number(n) <= 100){
    return true;
  }else{
    return false;
  }
}

function inLista (n,l){
  if(l.indexOf(Number(n)) != -1){
    return true
  }else{
    return false
  }
}


function adicionar() {
  if (isNumero(num.value) && !inLista(num.value, valores)) {
    valores.push(Number(num.value)); // Add the number to the valores array
    let item = document.createElement('option'); // Corrected: use document.createElement
    item.textContent = `Valor ${num.value} adicionado`; // Set the text for the new option
    lista.appendChild(item); // Append the new option to the select list
    res.innerHTML = ''
  } else {
    window.alert('Valor inválido ou já encontrado na lista'); // Display error if invalid or already in list
  }
  num.value = ''
  num.focus()
}
function finalizar() {
  if (valores.length == 0) {
    window.alert('Adicione valores antes de finalizar!');
  } else {
    let tot = valores.length;
    let maior = valores[0]
    let menor = valores[0]
    let soma = 0
    let media = 0
    for (let pos in valores){
      soma += valores[pos]
      if(valores[pos] > maior){
        maior = valores[pos]
      }
      if(valores[pos] < menor){
        menor = valores[pos]
      }
    }
    media = soma / tot
    res.innerHTML = '';  // Clear previous content
    res.innerHTML += `<p>Ao todo temos ${tot} números cadastrados.</p>`;
    res.innerHTML += `<p>O maior valor informado foi ${maior}</p>`;
    res.innerHTML += `<p>O menor valor encontrado foi ${menor}</p>`;
    res.innerHTML += `<p>A soma dos valores adicionados é ${soma}`
    res.innerHTML += `<p>A media dos valores adicionados é ${media}`


  }
}
