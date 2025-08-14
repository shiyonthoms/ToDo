const addItemLabel = document.querySelector('.addItem');
const showinputFeild = document.querySelector('.showinputFeild');
const showAddedTask = document.querySelector('.showAddedTask');

addItemLabel.addEventListener('click', additemHighlight);

function additemHighlight() {
  //creating the variables
  const inputfiled = document.createElement('input');
  const addbutton = document.createElement('button');
  inputfiled.style.marginRight = '10px'
  

  //
  addbutton.textContent = "Add";

  //adding the input box and button
  showinputFeild.append(addbutton);
  showinputFeild.prepend(inputfiled);
  addItemLabel.textContent = '';

  //add its to block
  
  addbutton.addEventListener('click', addItemsToBlock);
  // addItemsToBlock (nowadded) => {}
  // let nowadded = inputfiled.value;
  // if(nowadded === '') return;
  // const nowaddedtask = document.createElement('div');
  // nowadded.textContent = nowadded;
  // showAddedTask.append(nowadded);


  // const addItemsToBlock = (inputfiled) => inputfiled.value;
  // showAddedTask.append(addItemLabel)
  

};


function addItemsToBlock(){
  let nowadded = showinputFeild.firstChild.value;
  if(nowadded === '' || nowadded.trim() === '')return;
  let todotask = document.createElement('div')
  let completeCheckBox = document.createElement('input');
  completeCheckBox.type = 'checkbox'; 
  todotask.textContent = nowadded;
  showAddedTask.append(todotask);
  todotask.prepend(completeCheckBox);
  
  // const todotask = input.value;

  //if checkbox is activated remove the item
 completeCheckBox.addEventListener('change', () => {
  if(completeCheckBox.checked){
    todotask.remove();
  }

 })
}



// function removeTodoItem(){
//   showAddedTask.remove();
// }

// completeCheckBox.addEventListener('change', () => {
//         if(completeCheckBox.checked) {
//             todotask.remove(); // Remove only this specific todo item
//         }
//     });
