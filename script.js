function treino() {
  let num = document.getElementById("txt1");
  let res = document.getElementById("res");
  let n = Number(num.value);

  if (num.value.length == 0) {
    alert("Digite o número 1,2 ou 3");
  } else if (num.value.length == 1) {
    res.innerHTML = `<p>Divisão de Treino:</p>`;
    res.innerHTML = `<p><strong>Treino 1 : Peito,triceps e ombro: </strong></p> 
    <p><strong>Peito</strong> : Supino reto - supino inclinado - voador - cruxifixo; </p> 
    <p><strong>Ombro</strong> : Desenvolvimento - Elevação lateral - Elevação Frontal; </p>
    <p><strong>Triceps</strong> :  Triceps corda - Triceps pulley - Triceps Testa; `;
  }
  if (num.value == 2) {
    res.innerHTML = `<p><strong>Treino 2 : Costas e Biceps</strong></p> 
    <p><strong>Costas</strong> : Puxada frontal - Remada unilateral - Remada Curvada - Pulldown; </p> 
    <p><strong>Biceps</strong> : Rosca direta - Rosca scott - Rosca direta com halteres no banco inclinado - Rosca martelo; </p>`;
  } else if (num.value == 3) {
    res.innerHTML = `<p><strong>Treino 3 : Quadriceps,posteriores e panturrilhas</strong></p> 
    <p><strong>Quadriceps</strong> : Agachamento livre - Leg Press 360 - Cadeira extensora - (4 repetições cada um); </p> 
    <p><strong>Posteriores</strong> : Stiff - Flexora sentada - Flexora deitada; </p>
    <p><strong>Panturilhas</strong> : Panturilhas na máquina sentado - Panturrilhas na máquina em pé;(5 repetições para cada exercício). </p>`;
  }
  num.value = "";
  num.focus();
}
