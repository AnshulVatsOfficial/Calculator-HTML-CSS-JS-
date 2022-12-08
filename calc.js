let showCalcBody = document.getElementById('show_calc');
let rightDiv = document.getElementById('my_right_div');

let divFlag = false;
function showCalculator(){
    if(divFlag == false){
        rightDiv.style.display = 'flex';
        divFlag = true;
    }
    else{
        rightDiv.style.display = 'none';
        document.getElementById('calc_screen').value = '';
        divFlag = false;
    }
}

let result = "";
let buttons = document.querySelectorAll('.number');
let screenFlag = false;

Array.from(buttons).forEach((button)=>{
        button.addEventListener('click', (myButton)=>{
            if(myButton.target.innerHTML == '='){
                result = eval(result);
                document.getElementById('calc_screen').value = result;
            }
            else if(myButton.target.innerHTML == 'OFF'){
                if(screenFlag == false){
                    document.getElementById('calc_screen').style.visibility = 'hidden';
                    screenFlag = true;
                }
                else{
                    result = "";
                    document.getElementById('calc_screen').style.visibility = 'visible';
                    document.getElementById('calc_screen').value = result;
                    screenFlag = false;
                }
            }
            else if(myButton.target.innerHTML == 'AC'){
                result = "";
                document.getElementById('calc_screen').value = result;
            }
            else if(myButton.target.innerHTML == 'DEL'){          
                result = result.substring(0, result.length-1);
                document.getElementById('calc_screen').value = result;
            }
            else{
                console.log(myButton.target);
                result = result + myButton.target.innerHTML;
                document.getElementById('calc_screen').value = result;
            }
    });
});