let test = document.querySelector('.blurActive');


window.onload = ()=>{
    let a = true;
    while(a){
        var pass = prompt('taper le mot de passe : ');
        if(pass === 'ENSA2020'){
            test.classList.remove('blurActive');
            test.classList.add('blurNotActive');
            a = false;
        }
        else{
            alert("le mot de passe n'est pas correcte");
        }
    }
};