document.querySelector('#signupButton').addEventListener('click', signup);

function signup() {
    var nameInput = document.querySelectory('#name')


    fetch('http://loclahost:3000/users', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: nameInput.value
        })
    })
        .then(function(response) {
            return response.json()
        })
        .then(function(response) {
            console.log(response)
        })
}