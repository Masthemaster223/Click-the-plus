var plus = document.getElementById("plus");

var number = document.getElementById("number");

// var is variable( ͡° ͜ʖ ͡°)

// verry simulair to C#.( ͡° ͜ʖ ͡°)( ͡° ͜ʖ ͡°)( ͡° ͜ʖ ͡°)( ͡° ͜ʖ ͡°)( ͡° ͜ʖ ͡°)( ͡° ͜ʖ ͡°)( ͡° ͜ʖ ͡°)( ͡° ͜ʖ ͡°)( ͡° ͜ʖ ͡°)( ͡° ͜ʖ ͡°)( ͡° ͜ʖ ͡°)( ͡° ͜ʖ ͡°)( ͡° ͜ʖ ͡°)( ͡° ͜ʖ ͡°)

var minus = document.getElementById("minus");

var output = document.getElementById("number");

var num = 0;

plus.addEventListener('click', () => {

    num++;

    number.innerHTML = num;
}
)
minus.addEventListener('click', () => {

    num--;

    number.innerHTML = num;
}
)
if(num > 5)
{
    document.getElementById("5".innerHTML("Bigger than 5"))
}