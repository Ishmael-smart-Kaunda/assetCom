
let menuBtn=document.querySelector('.menu-button');



// display hidden menu when menu button in clicked
menuBtn.addEventListener('click',()=>{
    let hiddenMenu=document.querySelector('.menuList');
    // change the text of menu button to "close" if its not 'close'. i.e if its "menu"
   if (menuBtn.textContent!='Close'){
        menuBtn.textContent='Close';
        hiddenMenu.style.left='-20px';
        hiddenMenu.style.transition='0.5s';
    }
    // change the text of menu-button to Menu if it's 'Close'
    else{
        menuBtn.textContent='Menu';
        hiddenMenu.style.left='-115px';
        hiddenMenu.style.transition='0.5s';
    }   
});


/*    let menuCloseBtn = document.createElement('button');
    menuCloseBtn.textContent = 'close';

    let menuContainer = document.querySelector('.menuLabel');

    menuContainer.classList.add('menuCloseBtn');
    console.log(menuContainer);
*/




