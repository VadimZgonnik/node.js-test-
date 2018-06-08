$('#logBtn').on('click', (e) => {
    fetch('/users/login', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email: $('#inputEmailSingIn').val(),
            pass: $('#inputPasswordSingIn').val(),
        }),
        dataType: 'json',
    })
        .then((res) => res.json())
        .then(function (res, body) {
            $('#modalSignIn').modal('hide')
        })
});