let labelChecks = document.getElementsByClassName('btn--check')

function toggleEvent(check){
    /*Quitar las clases a los demas*/
    for (let i = 0; i < labelChecks.length; i++) {
        labelChecks[i].className =  labelChecks[i].className.replace('btnCheckActive' , '');
    }
    document.getElementById(check).className +=  " btnCheckActive";
}