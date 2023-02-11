/*
* File: app.js
* Author: Resperger Patrik
* Copyright: 2023, Resperger Patrik
* Group: Szoft I/1/E
* Date: 2023-02-11
* Github: https://github.com/respat/
* Licenc: GNU GPL
*/

hossz = document.querySelector('#hossz');
elotolas = document.querySelector('#elotolas');
rpm = document.querySelector('#rpm');
ido = document.querySelector('#ido');
kiszamol = document.querySelector('#kiszamol');


function kiszamit()
{
    megmunkalasiIdo = (hossz.value / (rpm.value * elotolas.value));
    ido.value = megmunkalasiIdo;
    console.log(megmunkalasiIdo);
} 

kiszamol.addEventListener("click", () => {
    kiszamit();
 });
