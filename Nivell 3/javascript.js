
//BOTÓ 1

let myNom = new Array('M', 'A', 'R', 'T', 'I', 'N')

function btn1() {

    for (i=0; i < myNom.length; i++) {
    console.log(myNom[i]);
    document.getElementById("resultats").innerHTML = '- Imprimeix el meu nom a la consola -';
    }
}


//////////FIN BOTÓ 1//////////



//BOTÓ 2

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
        document.getElementById("resultats").innerHTML = '- Imprimeix a la consola les lletras del meu nom y especifica si són vocals, consonants o números (si haguessin) -'
}

document.getElementById("btn1").addEventListener("click", function() {
    console.clear()
    btn1()
});
document.getElementById("btn2").addEventListener("click", function() {
    console.clear()
    btn2()
});

//////////FIN BOTÓ 2//////////

//BOTÓ 3

function btn3() {

    let quantLet = new Map()
const myNom = new Array('A', 'D', 'R', 'I', 'A', 'N') 
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
    document.getElementById("resultats").innerHTML = "- Crea un Map a partir d'un Array i afegeix el nombre de vegades que apareixen les lletres del meu nom -" 
}



//////////FIN BOTÓ 3//////////

//BOTÓ 4

function btn4() {

const myNom = ['M', 'A', 'R', 'T', 'I', 'N'];
const myCog = ['F', 'R', 'A', 'N', 'G', 'U', 'L'];

let fullName = myNom.concat('', myCog)

console.log(fullName)
document.getElementById("resultats").innerHTML = "- A partir de dos arrays (nom i cognom) fusiona els 2 arrays i afegeix un espai al mitg -" 
}

//////////FIN BOTÓ 4//////////

//BOTÓ 5

function btn5() {

var str = 'Una dirección de correo electrónico es la dirección que utiliza para recibir y enviar correos electrónicos. Se muestra a los destinatarios de sus correos electrónicos para que sepan quién le envió un correo electrónico. Cada dirección de correo electrónico sólo se puede asignar una vez en todo el mundo y, por lo tanto, está disponible exclusivamente para usted. No puede cambiar las direcciones de correo electrónico, pero puede eliminarlas en cualquier momento. Una dirección de correo electrónico consiste en el signo @ (arroba), el nombre de usuario delante y el dominio detrás, por ejemplo, nombre-de-usuario@ionos.es: La parte del dominio depende del dominio bajo el cual se crea la dirección de correo electrónico: en nuestro ejemplo es ionos.es. Esta información varía de proveedor a proveedor, por lo que una parte del dominio también puede ser gmail.com o gmx.es si utiliza una dirección de correo electrónico de estos proveedores. Si ha registrado su propio dominio, por ejemplo, www.el-nombre-de-sus-sueños.es, las direcciones de correo electrónico que configura para el dominio lo tienen como parte del dominio (nombre-de-usuario@el-nombre-de-sus-sueños.es o nombre-de-usuario@el-nombre-de-sus-sueños.ES). El nombre de usuario es la parte de una dirección de correo electrónico que puede seleccionar libremente en la medida de lo posible. Puede, por ejemplo, utilizar su propio nombre o el nombre o departamento de una empresa. Si utiliza una dirección de correo electrónico con un proveedor de correo como gmail.com o gmx.es, es posible que la combinación con la parte del dominio deseada ya esté registrada. En este caso, deberá considerar alternativas para el nombre de usuario de su dirección de correo electrónico. Si utiliza su propio dominio, estas restricciones no se aplican porque sólo usted puede crear direcciones de correo electrónico que coincidan con su propio dominio. En resumen, nombre-de-usuario@ionos.es es un email';

let regexp = /[\wñÑ._-]+@[\wñÑ._-]+\.[a-zA-Z]{2,4}/gi

let correus = str.match(regexp)
let noRep = new Map()

for (i=0; i < correus.length; i++){
    if (noRep.has(correus[i])) {
        correus.pop() //ELIMINA L'ENTRADA REPETIDA
    }    
    else {
        noRep.set(correus[i])
    }
}

noRep = correus

console.log(correus);
document.getElementById("resultats").innerHTML = "- Utilitzant una expressió regular troba al text els correus electrònics sense repetir i els afegeix a un nou array. -" 
}
//////////FIN BOTÓ 5//////////


//ADDEVENTLISTENERS

document.getElementById("btn1").addEventListener("click", function() {
    console.clear()
    btn1()
});
document.getElementById("btn2").addEventListener("click", function() {
    console.clear()
    btn2()
});

document.getElementById("btn3").addEventListener("click", function() {
    console.clear()
    btn3()
});
document.getElementById("btn4").addEventListener("click", function() {
    console.clear()
    btn4()
});

document.getElementById("btn5").addEventListener("click", function() {
    console.clear()
    btn5()
});