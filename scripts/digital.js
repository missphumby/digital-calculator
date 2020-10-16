(function(){
    let buttons = document.querySelectorAll('.btn');
    let screen = document.querySelector('.screen');
    let equal = document.querySelector('.btn-equal');
    let clear = document.querySelector('.btn-clear');
    


buttons.forEach(function (button){
    button.addEventListener('click', function(e){
        if(button.classList.contains('btn')){
            e.preventDefault();
  let value = e.target.dataset.num;
  screen.value += value

    }
})
})

equal.addEventListener('click', function(e){
    e.preventDefault();
 let answer = eval(screen.value);
 screen.value = answer;
})

clear.addEventListener('click', function(e){
    e.preventDefault();
 screen.value = ""
})



})()