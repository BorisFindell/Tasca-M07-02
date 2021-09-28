
// EXERCICI 1

let myNom = new Array('M', 'A', 'R', 'T', 'I', 'N')

for (i=0; i < myNom.length; i++) {
    console.log(myNom[i]);
}



// EXERCICI 2

let vocales = ['A', 'E', 'I', 'O', 'U']
let myNom2 = ['M', 'A', 'R', 3, 'T', 'I', 'N']
let trobat = true;


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

// AIXÓ TAMBÉ ES PODRÍA FER AMB includes()



// EXERCICI 3


let quantLet = new Map()
    for (i=0; i < myNom.length; i++) {
        let num = 1
        if(quantLet.has(myNom[i])) {
            quantLet.set(myNom[i], num + 1)
        }
        else{
            quantLet.set(myNom[i], num)
        }
    }

    console.log(quantLet);


    
    
// EXERCICI 4

let myCog = ['F', 'R', 'A', 'N', 'G', 'U', 'L'];

let fullName = myNom.concat('', myCog)

console.log(fullName)