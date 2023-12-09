let input = document.getElementById('inputBox');          //variables declaration
let buttons = document.querySelectorAll('button');

let string = "";
let arr = Array.from(buttons); //array to loop
arr.forEach(button => {         //looping array using for each loop
    button.addEventListener('click', (e) =>{
        //calculations
        if(e.target.innerHTML == '='){
            string = eval(string);
            input.value = string;
        }
         //AC function
        else if(e.target.innerHTML == 'AC'){
            string = "";
            input.value = string;
        }
        //DEL function
        else if(e.target.innerHTML == 'DEL'){
            string = string.substring(0, string.length-1);
            input.value = string;
        }
        //displaying numbers one after other on display
        else{
            string += e.target.innerHTML;
            input.value = string;
        }
        
    })
})