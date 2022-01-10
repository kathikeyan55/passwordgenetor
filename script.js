const upper_case = document.getElementById('upperCase');
const lower_case = document.getElementById('lowerCase');
const number = document.getElementById('number');
const symbol = document.getElementById('Symbols');
const from = document.getElementById('from');


const result = document.getElementById('password');


// Getting array 

const UPPERCASE_CODES = arrayFromLowToHigh(65, 90);
const LOWERCASE_CODES = arrayFromLowToHigh(97, 122);
const NUMBER_CODES = arrayFromLowToHigh(48, 57);
const SYMBOL_CODES =arrayFromLowToHigh(33, 47)
.concat(arrayFromLowToHigh(58, 64))
.concat(arrayFromLowToHigh(91, 96))
.concat(arrayFromLowToHigh(123, 126));


// gettin range value
function rangeValue(val){
    console.log("hellow")
    document.getElementById('rangeval').innerHTML = val;
}

// getting character code generator fuction

function arrayFromLowToHigh(low , high){
    const arr=[];
    for(let i = low ; i <= high ; i++){
        arr.push(i);
    }
    return arr;
}


from.addEventListener("submit" , (e)=>{
    e.preventDefault();
    const lenght = document.getElementById('rangeval').innerHTML;
    const includeUpperCase = upper_case.checked;
    const inCludeLower = lower_case.checked;
    const includeNumber = number.checked
    const includeSymbol = symbol.checked
    const password = generatePassword(lenght , includeUpperCase , inCludeLower ,includeNumber ,includeSymbol)
    result.innerHTML = password;
})

let generatePassword = (lenght , includeUpperCase , includeLower, includeSymbol  , includeNumber) => {
    let charCode = [];
    if(includeUpperCase) charCode = charCode.concat(UPPERCASE_CODES);
    if(includeLower) charCode = charCode.concat(LOWERCASE_CODES);
    if(includeSymbol) charCode = charCode.concat(NUMBER_CODES);
    if(includeNumber) charCode = charCode.concat(SYMBOL_CODES);

    const passwordCharacters = [];
    for(let i = 0 ; i < lenght ; i++){
        const c = charCode[Math.floor(Math.random() *charCode.length )];
        passwordCharacters.push(String.fromCharCode(c))
    }
    return passwordCharacters.join("")
}