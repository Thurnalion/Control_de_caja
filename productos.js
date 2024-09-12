function cargarJSON(){
    fetch('http://localhost/preentrega1javascriptsaleno-main/datos2.json')        
    .then(function(res){
        return res.json();
        })
        .then(function(data){
            let html = '';
            data.forEach(function(recipe) {
                html +=`
                    <li>${recipe.receta} ${recipe.duración}</li>
                    `;
            });
            document.getElementById('resultado').innerHTML = html;
        })
}
