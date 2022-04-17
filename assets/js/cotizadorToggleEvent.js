/*Checks de las vistas, los checks solo despiertan el evento*/
let tipoDePropiedadOption1 = document.getElementById('tipoDePropiedadOption1');
let tipoDePropiedadOption2 = document.getElementById('tipoDePropiedadOption2');
let si1 = document.getElementById('si-1');
let no1 = document.getElementById('no-1');

/*Los labels son los que muetran realmente el efecto toggle*/
let labelTipoDePropiedadOption1 = document.getElementById("labelTipoDePropiedadOption1");
let labelTipoDePropiedadOption2 = document.getElementById("labelTipoDePropiedadOption2");
let labelSi1 = document.getElementById('labelSi-1');
let labelNo1 = document.getElementById('labelNo-1');

/*Eventos*/
tipoDePropiedadOption1.addEventListener('click' , ()=>{
    /*Quitar el active al otro check*/
    labelTipoDePropiedadOption2.className = labelTipoDePropiedadOption2.className.replace('btnCheckActive' , '');
    /*Hacer el toggle*/
    labelTipoDePropiedadOption1.className += " btnCheckActive";
})

tipoDePropiedadOption2.addEventListener('click' , ()=>{
    /*Quitar el active al otro check*/
    labelTipoDePropiedadOption1.className = labelTipoDePropiedadOption1.className.replace('btnCheckActive' , '');
    /*Hacer el toggle*/
    labelTipoDePropiedadOption2.className += " btnCheckActive";
})

si1.addEventListener('click' , ()=>{
    /*Quitar el active al otro check*/
    labelNo1.className = labelNo1.className.replace('btnCheckActive' , '');
    /*Hacer el toggle*/
    labelSi1.className += " btnCheckActive";
})

no1.addEventListener('click' , ()=>{
    /*Quitar el active al otro check*/
    labelSi1.className = labelSi1.className.replace('btnCheckActive' , '');
    /*Hacer el toggle*/
    labelNo1.className += " btnCheckActive";
})