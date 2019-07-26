// select the elements 
const btns = document.querySelectorAll('.btn');
const screen = document.querySelector('.screen');
const equalBtn = document.querySelector('.btn-equal');
const clearBtn = document.querySelector('.btn-clear');

//adding event listeners to all the buttons 

// console.log(btns);

btns.forEach(function(btn) {
    btn.addEventListener('click', function(){

    let number = btn.getAttribute('data-num'); //getting each and every buttin value of the atrribute  
    screen.value += number; //add to it the screen 
    })
});

equalBtn.addEventListener('click', function () {
    if (screen.value === ''){
        screen.value = `error`
    } else {
        let value = eval(screen.value);
        screen.value = value;
    }
})

clearBtn.addEventListener('click', function(){
    screen.value = "";
    
})




