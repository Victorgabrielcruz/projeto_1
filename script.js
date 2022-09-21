function passar(elemento){
    elemento.style.color = "black";
}

function sair(elemento){
    elemento.style.color = "rgb(138, 138, 138)";
}
function ti(elemento){
    elemento.style.color = "rgb(97, 96, 96)";
}

const switchModal = () =>{
    const modal = document.querySelector('.modal');
    const actualStyle = modal.style.display;
    console.log("a")
    if(actualStyle == 'block'){
        modal.style.display = 'none';
        console.log("b")

    }
    else{
        modal.style.display = 'block';
                console.log("b")

    }
}

