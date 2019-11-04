var pw = document.querySelector('#password')
var submit = document.querySelector('#submit')


pw.addEventListener('input', function(e) {
    console.log(location.origin)
})
submit.addEventListener('click', function(e) {
    // debugger
    if (pw.value === 'tyler') {
        window.location.href = location.origin + '/home.html';

    }
})