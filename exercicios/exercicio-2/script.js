function calcularPesoIdeal() {
    let campoAltura = document.getElementById('altura');
    let campoSexo = document.getElementById('sexo');
    
    let altura = parseInt(campoAltura.value);

    if (isNaN(altura) || altura <= 0) {
        alert("Por favor, insira uma altura válida.");
        return;
    }

    let pesoIdeal;
    if (campoSexo.value === 'masculino') {
        pesoIdeal = 52 + (0.75 * (altura - 152.4));
    } else if (campoSexo.value === 'feminino') {
        pesoIdeal = 52 + (0.67 * (altura - 152.4));
    }

    let resultadoElement = document.getElementById('resultado');
    resultadoElement.innerHTML = `Seu peso ideal é: <strong>${pesoIdeal.toFixed(2)} kg</strong>`;
}