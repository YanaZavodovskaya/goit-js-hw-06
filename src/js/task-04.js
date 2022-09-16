let counterValue  = 0;


const counter = document.getElementById('value')


function decrement (){
    
    counter.textContent = counterValue -=1 ;  
}


function increment (){
    
    counter.textContent = counterValue +=1 ;  
}

const decFoo = document.querySelector('button[data-action="decrement"]');
decFoo.addEventListener('click', decrement)

const incFoo = document.querySelector('button[data-action="increment"]');
incFoo.addEventListener('click', decrement)