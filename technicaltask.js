//const { func } = require("prop-types");

//autocorrect
let input = "worrld";
//readline()

//fuction1
function duplicate() {
    for (let i = 0; i < input.length; i++) {
        if (input.charAt(i) == input.charAt(i + 1)) {
            input.replace(i, '');
        }
    }
    console.log(input);
}
console.log(input);

//function 2
function pifunction() {
    for (var i = 0; i < input.length; i++) {
        if (input.charAt(i) == 'p' && input.charAt(i + 1) == 'i') {
            input.replace(i, '3.14');
            input.replace(i + 1, '');
        }
    }
    console.log(input);
}
console.log(input);

//fuction3
function thirdfunction() {
    let array = input.trim().split(" ");

    for (var i = 0; i < array.length; i++) {
        for (var i = 0; i < array.charAt(); i++) {

            if (array.charAt(i) == array.charAt(i + 1)) {
                array.replace(i, '');
            }
        }

    }

    for (var i = 0; i < array.length; i++) {
        for (var i = 0; i < array.charAt(); i++) {

            if (array.charAt(i) == 'p' && array.charAt(i + 1) == 'i') {
                array.replace(i, '3.14');
                array.replace(i + 1, '');
            }
        }

    }

    console.log(input);
}
console.log(input);


//task2
let x = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
    11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21];
    let newArray =[];

    //console.log(x);
function firstiteration(){
    for(var i=0; i<x.length; i++){
        if(x[0]%2==0){
            if ( (x[i] % 2)) {
                newArray.push(newArray[i]);
            }
        }
        else{
            if ( !(x[i] % 2)) {
                newArray.push(newArray[i]);
        }
        
        }
      
}
      return newArray;
    
}
console.log(newArray);

//second iteration
let newArray2 =[];
function seconditeration(){
    for(var i=0; i<newArray.length; i++){
        
                newArray2.push(newArray2[i+x[1]]);
            }
        
      return newArray2;
    
}

