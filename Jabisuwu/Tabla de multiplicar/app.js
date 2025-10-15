function generarTabla() {

    const inputNumero = document.getElementById('numero');
    
    const N=parseInt(inputNumero.value)
    const resultadoDiv = document.getElementById('resultado');
    

    resultadoDiv.innerHTML = '';


  


    let tablaHTML = '<table class="tabla-multiplicar">';

    
    for (let i = 1; i <= N; i++) {
        tablaHTML += '<tr>'; 


        for (let j = 1; j <= N; j++) {

            const resultado = i * j;
            
            tablaHTML += `<td>${resultado}</td>`;
        }

        tablaHTML += '</tr>'; 
    }

    tablaHTML += '</table>'; 


    resultadoDiv.innerHTML = tablaHTML;
}