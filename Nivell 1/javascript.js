let vocales = ['A', 'E', 'I', 'O', 'U']
let myNom = ['M', 'A', 'R', 3, 'T', 'I', 'N']
let trobat = true;


for (i = 0; i < myNom.length; i++){
    trobat = true;
    for (x = 0; x < vocales.length; x++) {
        if (myNom[i] == vocales[x] && trobat == true) {
            console.log('He trobat la vocal:' + vocales[x])
            trobat = false;  
        }
    }
        if (trobat == true && isNaN(myNom[i])) {
        console.log('He trobat la consonant:' + myNom[i])
        trobat = false;  
        }

        if (trobat == true && !isNaN(myNom[i])) {
        console.log('Els noms de persones no contenen el numero:' + myNom[i])
        trobat = false;
        }
    }

