
//BOTÓN 1

let myNom = new Array('M', 'A', 'R', 'T', 'I', 'N')

function btn1() {

    for (i=0; i < myNom.length; i++) {
    console.log(myNom[i]);
    document.getElementById("resultats").innerHTML = '- Imprime mi nombre en consola -';
    }
}


// function clear() {
//     document.getElementById("resultats").innerHTML = ''
// }


//FIN BOTON 1//////////



//BOTON 2

let vocales = ['A', 'E', 'I', 'O', 'U']
let myNom2 = ['M', 'A', 'R', 3, 'T', 'I', 'N']
let trobat = true;

function btn2() {

    for (i = 0; i < myNom2.length; i++){
        trobat = true;
        for (x = 0; x < vocales.length; x++) {
            if (myNom2[i] == vocales[x] && trobat == true) {
                console.log('He trobat la vocal:' + vocales[x])
                trobat = false;  
            }
        }
            if (trobat == true && isNaN(myNom2[i])) {
            console.log('He trobat la consonant:' + myNom2[i])
            trobat = false;  
            }

            if (trobat == true && !isNaN(myNom2[i])) {
            console.log('Els noms de persones no contenen el numero:' + myNom2[i])
            trobat = false;
            }
        }
        document.getElementById("resultats").innerHTML = '- Imprime en consola las letras de mi nombre y especifica si son vocales, consonantes o números (si hubiere)-'
}

document.getElementById("btn1").addEventListener("click", function() {
    btn1()
});
document.getElementById("btn2").addEventListener("click", function() {
    btn2()
});