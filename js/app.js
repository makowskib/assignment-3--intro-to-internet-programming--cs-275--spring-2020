let letter =document.querySelectorAll('td');

window.onload=()=>{
    for(let i=0; i < letter.length; i++){
        letter[i].addEventListener('click',()=>{
            letter[i].classList.toggle('transform');
        });
    }
    letter[0].addEventListener('click', ()=>{
        if(letter[0].classList.contains('transform')){
            letter[1].classList.remove('transform');
            letter[2].classList.remove('transform');
            letter[3].classList.remove('transform');
        }
    })
}


