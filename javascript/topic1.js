let input=[2,4,6,8,10]

function sum(){
    let sum=0;

    for (let i = 0; i<input.length; i++) {
         sum += input[i];
        
    }
    console.log(sum);
    document.write('Total even number sum is:'+sum);
}

sum();