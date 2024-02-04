document.querySelector('#submitBtn2').addEventListener('click', function() {
    write();
});

function write() {
    let input = document.querySelector('#js-input').value;
    // console.log(input);
    document.querySelector('.js-output').innerHTML = input;
    document.querySelector('#js-input').value = "";
    return 0;
}
