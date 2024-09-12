function calculo(){
    
    let valorcaja = parseFloat(document.getElementById("caja").value)|| 0;
    let tf = parseFloat(document.getElementById("z").value )|| 0;
    let personal = parseFloat(document.getElementById("empleados1").value )|| 0;
    let egre = parseFloat(document.getElementById("egresos1").value )|| 0;
    let cl = parseFloat(document.getElementById("cierrelote").value )|| 0;

    document.getElementById("resultado").value = valorcaja + tf - 
    personal - egre - cl;
    
}



function calculo2(){

let final = parseFloat(document.getElementById("resultado").value )|| 0;
let efeencaja = parseFloat(document.getElementById("efectivo").value )|| 0;


if(final == efeencaja){
   document.querySelector('#texto1').innerHTML = `El cierre de caja fue exitoso`;

}else if(final < efeencaja){
    let resta = efeencaja - final;
    document.querySelector('#texto1').innerHTML = `Sobra ${resta}`;

}else{
    let resta2 = final - efeencaja;
    document.querySelector('#texto1').innerHTML =`Falta ${resta2}`;
    };
}


