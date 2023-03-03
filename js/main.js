$(document).ready(() => {
    $('.mainText')
        .before('<span>Перед</span>')
        .after('<span>После</span>')
        .prepend('<span>Prepend</span>')
        .append('<span>Append</span>')
})