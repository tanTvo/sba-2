//console.log('hello')

const input = document.getElementById('input1');

const list = document.getElementById('list1');

function addToList() {
    const listText = input.value.trim();
    if (listText !== ''){
        const li = document.createElement('li');
        li.textContent = listText;
        list.appendChild(li);
        input.value = '';
    }
}