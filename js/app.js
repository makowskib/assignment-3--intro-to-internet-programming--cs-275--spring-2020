let letter =document.querySelectorAll('td');

window.onload=()=>{
    for(let i=0; i < letter.length; i++){
        letter[i].addEventListener('click',()=>{
            letter[i].classList.add('transform');
        });
    }
    //letterA
    letter[0].addEventListener('click', ()=>{
        if(letter[0].classList.contains('transform')){
            letter[1].classList.remove('transform');
            letter[2].classList.remove('transform');
            letter[3].classList.remove('transform');
        }
    });
    //letterB
    letter[1].addEventListener('click', ()=>{
        if(letter[1].classList.contains('transform')){
            letter[0].classList.remove('transform');
            letter[2].classList.remove('transform');
            letter[3].classList.remove('transform');
        }
    });
    //letterC
    letter[2].addEventListener('click', ()=>{
        if(letter[2].classList.contains('transform')){
            letter[1].classList.remove('transform');
            letter[0].classList.remove('transform');
            letter[3].classList.remove('transform');
        }
    });
    //letterD
    letter[3].addEventListener('click', ()=>{
        if(letter[3].classList.contains('transform')){
            letter[1].classList.remove('transform');
            letter[2].classList.remove('transform');
            letter[0].classList.remove('transform');
        }
    });
}


