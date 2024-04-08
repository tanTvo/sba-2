//console.log('hello')

const input1 = document.getElementById('input1');

const thelist = document.getElementById('theList');

function addToList() {
    const listText = input1.value.trim();
    if (listText !== ''){
        const li = document.createElement('li');
       li.addEventlistener('click', completeList);
        li.textContent = listText;
        thelist.appendChild(li);
        input1.value = '';
        
    }

}

function completeList(event){
    const assignT = event.target;
    assignT.classList.toggle('completed');
  
}



function deleteList(event){
    const assignT = event.target.parentElement;
    list.removeChild(assignT);
 
}

   const deleteBtn = document.createElement('button');
   deleteBtn.textContent = "Delete";
deleteBtn.addEventListener('click', deleteTask);
li.appendChild(deleteBtn);