let form = document.getElementById('form')
let todos = document.getElementById('todos')
let input = document.getElementById('input')
let button = document.getElementById('submit-btn')




button.addEventListener('click', function(e){
    e.preventDefault()
    let value = input.value;
    let length = todos.getElementsByTagName("li").length;
    let todo = document.createElement('li')
    let p_tag = document.createElement('p')
    let text = document.createTextNode(value)
    let button = document.createElement('button')
    let button_text = document.createTextNode('Delete')
    let edit = document.createElement('button')
    let edit_text = document.createTextNode('Edit')
    let check = document.createElement('input')
    check.setAttribute('type', 'checkbox')
    button.setAttribute('id', 'btn-' + length)
    button.append(button_text)

    edit.append(edit_text)
    todo.setAttribute('id', length)
    todo.appendChild(check)
    p_tag.append(text)
    todo.appendChild(p_tag)
    todo.appendChild(edit)
    todo.appendChild(button)
    
    todo.style.display = 'flex';
    todo.style.flexDirection = 'space-between';
    todos.appendChild(todo)


    input.value = '';

})


todos.addEventListener('click', function (e) {
    e.preventDefault()
    if (e.target && e.target.nodeName == 'BUTTON' && e.target.textContent == 'Delete') {
        const todo = e.target.parentElement;
        todos.removeChild(todo);
    }

    if (e.target && e.target.nodeName == 'BUTTON' && e.target.textContent == 'Edit'){
        let todo = e.target.parentElement;

        const update = document.createElement('input')
        todo.appendChild(update);

        update.addEventListener('click', function(e){
            
            console.log(todo.getElementsByTagName('p')[0].innerHTML)
            console.log(update.value)
            let current_todo = todo.getElementsByTagName('p')[0]
            console.log(current_todo.innerHTML)
            todo.getElementsByTagName('p')[0].innerHTML += update.value
        })
    }

    if (e.target && e.target.nodeName == 'INPUT'){
        let todo = e.target.parentElement;
        console.log(todo.getElementsByTagName('p')[0].innerHTML)
        todo.getElementsByTagName('p')[0].setAttribute('class', 'lining')
        
    }
});

