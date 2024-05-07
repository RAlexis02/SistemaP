function calcularTotal() {
    var combo1 = parseInt(document.getElementById('combo1').value) || 0;
    var combo2 = parseInt(document.getElementById('combo2').value) || 0;
    var combo3 = parseInt(document.getElementById('combo3').value) || 0;
    var combo4 = parseInt(document.getElementById('combo4').value) || 0;
    var polloSolo = parseInt(document.getElementById('polloSolo').value) || 0;
    var polloAcompanantes = parseInt(document.getElementById('polloAcompanantes').value) || 0;
    var medioPolloSolo = parseInt(document.getElementById('medioPolloSolo').value) || 0;
    var medioPolloAcompanantes = parseInt(document.getElementById('medioPolloAcompanantes').value) || 0;
    var polloRestanteEnteros = parseInt(document.getElementById('polloRestanteEnteros').value) || 0;
    var polloRestanteFracciones = parseFloat(document.getElementById('polloRestanteFracciones').value) || 0;

    var total = (combo1 / 8) + (combo2 / 8) + (combo3 / 4) + (combo4 / 4) +
                polloSolo + polloAcompanantes + (medioPolloSolo / 2) + (medioPolloAcompanantes / 2) +
                polloRestanteEnteros + polloRestanteFracciones;

    var fraccionDenominador = 8;
    var totalFraccion = Math.round((total - Math.floor(total)) * fraccionDenominador);

    var fracciones = {0: '', 1: '1/8', 2: '1/4', 3: '3/8', 4: '1/2', 5: '5/8', 6: '3/4', 7: '7/8'};

    var fraccion = fracciones[totalFraccion] || '';
    var pollosEnteros = Math.floor(total);

    var resultado = pollosEnteros + (fraccion ? ' ' + fraccion : ''); // Agregando un espacio condicional
    document.getElementById('total').innerHTML = 'Total Pollos Vendidos: ' + resultado;
}



/*limpiar campos*/
function limpiarCampos() {
    document.getElementById('combo1').value = '';
    document.getElementById('combo2').value = '';
    document.getElementById('combo3').value = '';
    document.getElementById('combo4').value = '';
    document.getElementById('polloSolo').value = '';
    document.getElementById('polloAcompanantes').value = '';
    document.getElementById('medioPolloSolo').value = '';
    document.getElementById('medioPolloAcompanantes').value = '';
    document.getElementById('polloRestanteEnteros').value = '';
    document.getElementById('polloRestanteFracciones').value = '0'; // Asegurándose de resetear al valor por defecto
    document.getElementById('total').innerHTML = 'Total Pollos Vendidos: 0';
}
