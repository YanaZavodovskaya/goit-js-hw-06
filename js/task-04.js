let counterValue  = 0;


const counter = document.getElementById('value');

const decrementBtnClick = document.querySelector('button[data-action="decrement"]');
decrementBtnClick.addEventListener('click', counterValueDecrement);

const incrementBtnClick = document.querySelector('button[data-action="increment"]');
incrementBtnClick.addEventListener('click', counterValueIncrement);

function counterValueDecrement (){
    
    counter.textContent = counterValue -=1 ;  
}


function counterValueIncrement (){
    
    counter.textContent = counterValue +=1 ;  
}

