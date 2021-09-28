
// EXERCICI 1

let myNom = new Array('M', 'A', 'R', 'T', 'I', 'N')

for (i=0; i < myNom.length; i++) {
    console.log(myNom[i]);
}




// EXERCICI 2

let vocales = ['A', 'E', 'I', 'O', 'U']
myNom = ['M', 'A', 'R', 3, 'T', 'I', 'N']
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

// AIXÓ TAMBÉ ES PODRÍA FER AMB includes()



// EXERCICI 3
//FAIG SERVIR EL MEU SEGON NOM PERQUÈ TÉ UNA LLETRA REPETIDA (EL PRIMER NO)

let quantLet = new Map()
let mySecNom = new Array('A', 'D', 'R', 'I', 'A', 'N')
    for (i=0; i < mySecNom.length; i++) {
        let num = 1
        if(quantLet.has(mySecNom[i])) {
            quantLet.set(mySecNom[i], num + 1)
        }
        else{
            quantLet.set(mySecNom[i], num)
        }
    }

    console.log(quantLet);


    
    
// EXERCICI 4

let myCog = ['F', 'R', 'A', 'N', 'G', 'U', 'L'];

let fullName = myNom.concat('', myCog)

console.log(fullName)