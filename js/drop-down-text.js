const button = document.querySelectorAll('.FAQ__button')
const text = document.querySelectorAll('.FAQ__content')

button.forEach(item => {
    item.addEventListener('click', () => {
        let content = item.parentNode.parentNode.parentNode.lastElementChild

        if (!content.classList.contains('is-hidden')) {
            text.forEach(el => el.classList.add('is-hidden'))
            button.forEach(el => el.style.transform = 'rotate(0)')
        } else {
            text.forEach(el => el.classList.add('is-hidden'))
            button.forEach(el => el.style.transform = 'rotate(0)')
            content.classList.remove('is-hidden')
            item.style.transform = 'rotate(45deg)'
        }
    })
})
