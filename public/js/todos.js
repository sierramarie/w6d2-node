
getTodos();

function getTodos() {

    fetch('http://localhost:3000/todos', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
    })
        .then(function(response) {
            return response.json()
    })
        .then(function(response) {
            console.log(response)
            loopTodos(response)
    })
}

function loopTodos(items) {
    console.log(items)
    items.forEach(function(item){
        showTodos(item)
    }) 
}

function showTodos(todo) {
    console.log(todo)

    var box = `<li class="list-group-item"> ${todo.todo}</li>`

    document.querySelector('#todos').innerHTML += box;
}


