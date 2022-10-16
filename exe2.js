var agora = new Date();
var ano = agora.getFullYear();

var res = window.document.getElementById("mensagem");
var fot = window.document.getElementsByTagName("img")[0];

function botaozar() {
  var tab1 = window.document.getElementById("caixa1");
  var man = tab1.checked;
  var tab2 = window.document.getElementById("caixa2");
  var fem = tab2.checked;

  var vol = window.document.getElementById("anu");
  var pow = Number(vol.value);

  var idade = ano - pow;

  if (idade < 4) {
    fot.src = "Imagens/baybe.jpg";
    var sex = "um bebe";
  } else if (idade <= 12 && man) {
    fot.src = "Imagens/meninozin.jpg";
    var sex = "um meninoninho";
  } else if (idade <= 12 && fem) {
    fot.src = "Imagens/meninazin.jpg";
    var sex = "uma meninoninha";
  } else if (idade <= 22 && man) {
    fot.src = "Imagens/menino.jpg";
    var sex = "um boy";
  } else if (idade <= 22 && fem) {
    fot.src = "Imagens/menina.jpg";
    var sex = "uma girl";
  } else if (idade < 60 && man) {
    fot.src = "Imagens/homemAdulto.jpg";
    var sex = "um homem";
  } else if (idade < 60 && fem) {
    fot.src = "Imagens/mulher.jpg";
    var sex = "uma mulher";
  } else if (fem) {
    fot.src = "Imagens/velha.jpg";
    var sex = "um velha";
  } else {
    fot.src = "Imagens/velho.jpg";
    var sex = "uma velho";
  }
  res.innerHTML = `Detectamos ${sex} de ${idade} anos`;

  if (idade > 1000 || idade < 0 || (man == false && fem == false)) {
    res.innerHTML = `Detectamos um erro`;
    window.alert("Coloca os resultados");
  }
}
