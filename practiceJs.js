
/*
let passwordEl=document.querySelector('#passWord');
let comfirmPassEL =document.querySelector('#passComfirm');



let signInBtn = document.querySelector('#signIn-button');


signInBtn.addEventListener('click',(e)=>{
   
    e.preventDefault();
    let password =passwordEl.value;
    let passComfirm  = comfirmPassEL.value;

        if(password!=passComfirm){
        displayEl.textContent = `Password miss Match`;
        }
        else if(password==''&passComfirm!=''){
            displayEl.textContent = `enter password`;
        }
        else if(passComfirm!=''&passComfirm==''){
            displayEl.textContent = `Comfirm password`;
        }
        else if(password==''& passComfirm==''){
            displayEl.textContent = `Please enter password`;
        }
        else{
        displayEl.textContent = `Password miss Match`;
        passComfirm.style.color='red';
        console.log();
        }
    
});
*/

let todoInput = document.getElementById('todoInput');





let todoArry = [];

let addBtn = document.getElementById('addButton');

addBtn.addEventListener('click',()=>{
  //todoArry.push(task);
  
  let task =todoInput.value.trim();
  todoArry.push(task);
  console.log(todoArry);
})

/*


let todoList = document.getElementById('todoList');


let themeBtn =  document.getElementById('theme');
let Bg  = document.getElementById('signIn');


themeBtn.addEventListener('click',()=>{
    console.log('theme btn clicked');
    addBtn.classList.toggle('dark-theme');
  
    //Bg.style.backgroundColor='black';
   // background.classList.add('dark-theme');
   // background.classList.toggle('light-theme');
    
});

todoInput.addEventListener('keypress',(e)=>{
            if(e.key==='Enter'){
                addTodo();
            }
)}

addBtn.addEventListener('click',addTodo);


function addTodo(){ 
   
    let todoText = todoInput.value.trim();
    if(todoText){
        let Task = document.createElement('li');
        Task.textContent=todoText;

        let deleteBtn = document.createElement('button');
        deleteBtn.textContent='Delete';
        let taskContainer= document.createElement('div');

        taskContainer.appendChild(Task);
        taskContainer.appendChild(deleteBtn);
        todoInput.value='';

        taskContainer.classList.add('taskContainer');

        todoList.appendChild(taskContainer);
        Task.addEventListener('click',(e)=>{
            e.target.classList.toggle('lineThrough');
        })
        
        
        deleteBtn.addEventListener('click',(e)=>{
            taskContainer.remove();  
         }) 
    }
    else if(todoText.trim()===''){
        alert('please enter the task');
        }    
  
}



let firstNumber = document.getElementById('firstNumber');
let secondNumber = document.getElementById('secondNumber');
let subtractBtn = document.getElementById('subtractBtn');

subtractBtn.addEventListener('click',()=>{
    
    if(firstNumber.value.trim()!='' && secondNumber.value.trim()!=''){

        let first_number = parseInt(firstNumber.value);
        let second_number = parseInt(secondNumber.value);

        subtract(first_number, second_number);
    }
    else{
        alert('empty entry detacted')
    }
});


function subtract(firstN){
    
   
  return function add(secondN){
    let difference =firstN-secondN;
    console.log(`the difference is : ${difference}`);
   }
   
}


let x = 20;
let y= 'smart';

try{
    console.log(x/y);
    console.log(m);
}catch(e){
    console.log('the code that will catch an error');
    console.log('the error message is : '+ e);
}finally{
    console.log('excuted regardless of catch block');
}



/*
let newlist  = document.getElementById('newlist');
const fragment  = document.createDocumentFragment();


        for(let i =0; i<10; i++) {
            const list = document.createElement('button');
            list.textContent =`Item ${i}`;
            fragment.appendChild(list);
        }
        newlist.style.display='flex';
        newlist.style.flexDirection='column';
        newlist.style.margin='5px';
        newlist.style.width='20%';

        newlist.appendChild(fragment);


document.addEventListener('click', function(event) {
    console.log('Event type:', event.type);
    console.log('Target element:', event.target);
    console.log('Mouse position:', event.clientX,
    event.clientY);
    });

*/

