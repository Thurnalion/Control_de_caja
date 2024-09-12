function presentismo() {
    const rows = document.querySelectorAll('.table1 tr[data-employee]');

    rows.forEach((row) => {
        const ausentesEmpleados = parseFloat(row.querySelector('.ausente').value) || 0;

        if (ausentesEmpleados >= 5) {
            row.querySelector('.resultado').innerHTML = 'Muchas inasistencias, pierde presentismo';
            row.querySelector('.resultado').style.color = '#ff0000';
        } else {
            row.querySelector('.resultado').innerHTML = 'Pocas inasistencias, mantiene presentismo';
            row.querySelector('.resultado').style.color = '#00ff00';

        }
    });
}

boton4.addEventListener("click",presentismo);

/*
function presentismo(){
    let ausentesEmpleados = parseFloat(document.getElementById("ausente").value )|| 0;
    
    if(ausentesEmpleados >= 5){
        document.getElementById('resultado1').innerHTML = 'Muchas inasistencias, pierde presentismo';   
    }else{
        document.getElementById('resultado1').innerHTML = 'Pocas inasistencias, mantiene presentismo';   

    }
}
boton4.addEventListener("click",presentismo);

*/

