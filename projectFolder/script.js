const form = document.getElementsByName("form")[0];

function insert(num){
    form.output.value = form.output.value +=num;
}
function clearr(){
    form.output.value = "";
}
function backspace(){
    var pos = form.output.value;
    form.output.value = pos.substring(0,pos.length-1); 
    //substring позволяет получить подстроку из нашей строки.
}
function equal(){
    var pos = form.output.value;
    if(pos != ''){
        form.output.value = eval(pos);
        /*eval - функция глобального объекта,
        которая вычисляет арифметическое выражение, записанное в строковом виде.
        в качестве параметра передаётся строка*/
    }
}
document.body.onkeypress = function(event){
    if(event.key >= '0' && event.key <='9' || event.key === '+' || event.key === '(' || event.key === ')' || event.key === '-' || event.key === '/' || event.key === '*' || event.key === '.'){
        insert(event.key);
    }
    if(event.key === 'Enter' || event.key === '='){
        equal();
        event.preventDefault(); 
        //предотвращает стандартное поведение события.
    }
    if(event.key === 'c' || event.key === 'с'){
        clearr();
    }
console.log(event);
} 
document.body.onkeydown = function(event){
    if(event.key === 'Backspace'){
        backspace();
    }
}