// when plus button is clicked we need to save the text input and display this on the ul 

const plusButton = document.querySelector ("#plus_button")
const input = document.querySelector ("#input")
const taskList = document.querySelector ("#task-list")
const resetButton = document.querySelector ("#reset_button")


plusButton.addEventListener ("click", event => {
  event.preventDefault (); 
  // const inputValue= input.value
  // const inputValueArr= Object.keys (inputValue)
  // console.log (inputValueArr)
  // inputValueArr.forEach(element => {
    taskList.innerHTML +=`<li> <input type="checkbox"> ${input.value} </li>`
    input.value= " ";

    
  });

 // tried to do the above by converting variable to any arrayh, it worked but was displaying the text the no of times of the characters of the words- so "text" was displayed 4 times 


 //reset button= clear the tasklist

 resetButton.addEventListener ("click", event => {
   taskList.innerHTML= " "
 })