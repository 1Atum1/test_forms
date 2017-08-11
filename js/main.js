$(document).ready(function () {
    $('#phone').mask("+9 (999) 999-9999");

    var c = document.querySelector('#che');
    c.onclick = function () {
        if (c.checked) {
            $('.default').addClass('notchecked');
            $('.womanchecked').removeClass('notchecked');
        } else {
            $('.default').removeClass('notchecked');
            $('.womanchecked').addClass('notchecked');
        }
    };


});

var pass = $('#password');
$('.eye').on('click', function() {
    pass.attr('type', pass.attr('type') === 'password' ? 'text' : 'password');
    $(this).toggleClass('eye-open')
});