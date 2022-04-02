fetch('users.json').then(function(response) {
    console.log(response.json());
    return response.json();
})