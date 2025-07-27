

//let numberBtnContainer = document.querySelector('#operands') 
let inputBtn = document.querySelectorAll('.number');



let menuBtn = document.getElementById('menu-button');
let menuListDiv = document.getElementById('menuDiv');



menuBtn.addEventListener('click',()=>{
   
       menuListDiv.classList.replace('menu','display');
   });

   let CloseMenu= document.getElementById('menuCloseBtn');
   CloseMenu.addEventListener('click',()=>{
    menuListDiv.classList.replace('display','menu');
    
   });


   let HistoryDiv= document.getElementById('history');

   let CloseHistory= document.getElementById('histortCloseBtn');
   
   CloseHistory.addEventListener('click',()=>{
          HistoryDiv.classList.replace('display-mathHistory','math-history'); 
        
          

        });

// about menu items
let themeDiv= document.getElementById('theme');

let menuItem= document.querySelectorAll('#menuList');
     menuItem.forEach((item)=>{
        item.addEventListener('click',(e)=>{
            if(e.target.classList.contains('menuListHist')){
                 
                // display history
                 HistoryDiv.classList.replace('math-history','display-mathHistory');

                 // remove menu-list
                menuListDiv.classList.replace('display','menu');

            }  
            else if(e.target.classList.contains('menuListTheme')) {
                // display change theme dialog
                themeDiv.classList.replace('theme','display-theme');
        
                // remove menu-list
                 menuListDiv.classList.replace('display','menu');
            }
            else if(e.target.classList.contains('menuListFeedback')) {
               // display feedback dialog
               
           
                 // remove menu-list
                 menuListDiv.classList.replace('display','menu');
                 alert('how can we help you');
            }
            else if(e.target.classList.contains('menuListHelp')) {
                // display help panel


                
                 // remove menu-list
                 menuListDiv.classList.replace('display','menu');
                 alert('how can we help you');
            }

        });


     });


let themeChange= document.querySelectorAll('#changeBg');
themeChange.forEach((button)=>{

    button.addEventListener('click',(e)=>{
        let  mainDiv= document.querySelector('#container');
        if(e.target.classList.contains('light')){
            
            mainDiv.style.backgroundColor ='hsl(36, 92%, 51%)';
           
        }
        else if(e.target.classList.contains('dark')){
           
            mainDiv.style.backgroundColor ='hsl(0, 6%, 31%)';
        }
        else if(e.target.classList.contains('apply-theme')){
            themeDiv.classList.replace('display-theme','theme')
           
        }
    });
});



// a special function is required for deleting the inputs
let InputNumEl = document.getElementById('input');

let DeleteBtn= document.getElementById('delete');

DeleteBtn.addEventListener('click',()=>{
    let currentInputValue = InputNumEl.value;

    currentInputValue = currentInputValue.slice(0, -1);
    InputNumEl.value = currentInputValue;

    let displayArea =document.getElementById('result-display');
    displayArea.textContent = '';  
});



// functions
function inputUpdating(){
        inputBtn.forEach((button)=>{
            let BtnValue = button.textContent;
            button.addEventListener('click',()=>{  
                InputNumEl.value += BtnValue;  
                // invoking the input processing function     
                inpuntProcessing(InputNumEl.value);              
            });
        });
}

function inpuntProcessing(input){
    let inputString = input.match(/\d+/g);
        // exctract input string
        let firstNumber = parseInt(inputString[0]);
        let secondNumber = parseInt(inputString[1]);

        // extract input operator
        let operator = input.split(/\b\d+\b/g)[1];
        //invoke maths processing
        MathLogic(firstNumber, secondNumber, operator)     
}

function MathLogic(number1, number2, operator){

 /*  switch(number1, operator){
       case '+':
       case number2:
        addition(number1, number2);
        break;   

   }
   */
    if(operator==='+'&& number2){
        addition(number1, number2);
    } 
    else if(operator==='-'&& number2){
       Subtraction(number1, number2);
    }
    else if(operator==='×'&& number2){
      Multiplication(number1, number2);
    }
    else if(operator==='÷'&& number2){  
        Division(number1, number2); 
    } 
}
    
inputUpdating();

// addition
function addition(num1, num2){
    let sum = num1+num2;
    displayAns(sum);
}
// subtraction
function Subtraction(num1, num2){
    let difference = num1-num2;
    displayAns(difference);
}
//multiplicatio
function Multiplication(num1, num2){
    let product = num1*num2;
    displayAns(product);
}
// division
function Division(num1, num2){
    let quotient = num1/num2;
    displayAns(quotient);
}

// display result 
function  displayAns(answer){
    let displayArea =document.getElementById('result-display');
    displayArea.innerHTML = answer ;

    History(displayArea, answer);
}
function History(displayArea, newResult){
               
    let addHistBtn = document.querySelector('#equals');
        
    addHistBtn.addEventListener('click',()=>{  
            
            if(newResult!=''){ 
              let historyList = document.createElement('li');
              HistoryDiv.appendChild(historyList);
            InputNumEl.value.trim() =='';
            newResult =='';
            
           /* let historyArray =[];
              historyArray.push(InputNumEl.value.trim());

             
             
             
              historyArray.forEach((history)=>{
              //  console.log(` current input before array: ${history} Answer :${newResult}`)
               
               
                historyList.textContent = `${history} = ${newResult}`;
              //  console.log(` current input: ${InputNumEl.value.trim()} Answer :${newResult}`)
                history ='';
                newResult ='';
              });  

              */
              //historyArray =[];
             // InputNumEl.value ='';
             
              historyList.classList.add('hist-style');

              displayArea.classList.replace('showResult','zoomResult');

            }     
        });

        displayArea.classList.replace('zoomResult','showResult');
}  


                /*
               
                let currentCalculation  = InputNumEl.value.trim();
                
                let currentMaths = {};
                    currentMaths.calculation=currentCalculation;
                    currentMaths.result=newResult;
 
                    historyArray.push(currentMaths);

                   historyArray.forEach((element)=>{



                historyList.textContent =element.calculation;
                
                console.log(historyList.textContent);


               // console.log(` calculation : ${element.calculation}, reslut : ${element.result} `);
               });
               */ 
          









