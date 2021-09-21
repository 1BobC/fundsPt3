// Function library example
const input = document.querySelector('.numberInput');
const para = document.querySelector('p');

function squared(num){
    return num * num;
}

function cubed(num){
    return num * num * num;
}

function factorial(num){
    if (num < 0) return undefined;
    if (num == 0) return 1;
    let x = num - 1;
    while (x > 1){
        num *= x;
        x--;
    }
    return num;
}

input.onchange = function() {
    const num = parseFloat(input.value);
    if (isNaN(num)){
        para.textContent = 'Please enter a number';
    }else{
        // para.textContent = num + ' squared is: ' + squared(num) + '  .';
        para.textContent = `${num} squared is: ${squared(num)}.${num} cubed is: ${cubed(num)}. ${num} factorial is: ${factorial(num)}.`
    }
}

//Own example
//Function Library myExample preset words
const input1 = document.querySelector('.letterInput');
const para1 =  document.querySelector('p');

function oneWord(alf){
    return alf + 'oneWord';
}

function twoWords(alf){
    return alf + 'twoWords';
}

function threeWords(alf){
    return alf + 'threeWords';
}

input.onchange = function(){
    const alf = (input.value);
    if (input.value = null){
        para1.textContent = 'Please enter a letter';        
    }else{
        para1.textContent = `${alf} oneWord is: ${oneWord(alf)}. twoWords are: ${twoWords(alf)}. threeWords are: ${threeWords(alf)}.`
    }
}

