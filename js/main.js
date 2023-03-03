$(document).ready(() => {
    function addAttribute(element, attribute, value) {
        const getElement = '.' + element
        $(getElement).attr(attribute, value)
    }

    addAttribute('logo', 'title', 'Daisy')
})