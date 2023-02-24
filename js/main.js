$(() => {
    const showWaH = (el) => {
        const classElem = '.' + el
        const w = $(classElem).width()
        const h = $(classElem).height()
        $('.mainText p').text('Ширина: ' + w + '. Высота: ' + h)
    }

    showWaH('arrowDown')
})