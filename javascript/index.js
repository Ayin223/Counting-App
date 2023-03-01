// All IDs grabbed can be found here and are always save in a countainer
//save button 
let saveContainer = document.getElementById('save-btn') 
// displaying the count container 
let displayCountainer = document.getElementById('display-counter')
// welcoming message
let welcomeEl= document.getElementById('welcome-el')

let saveEl= document.getElementById('save-el')





// welcome
let namee= 'Emmanuel'
let greeting= 'Welcome '

welcomeEl.textContent= greeting + namee + '✌️'




// initialize the count as 0
let counter = 0



//FUNCTIONS


// function for save that logs out the count
function save(){
    let dashSeparator = counter + ' - '
    saveEl.textContent += dashSeparator
    counter = 0
    displayCountainer.textContent= 0
    
}


// listener for clicks on the increment button 
function increment (){
    counter += 1
    // displaying
    displayCountainer.textContent= counter
}