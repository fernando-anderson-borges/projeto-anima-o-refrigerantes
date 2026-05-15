let list = document.querySelectorAll('.item')
let next = document.getElementById('next')
let prev = document.getElementById('prev')

let count = list.length
let active = 0

next.onclick = () => {
    list[active].classList.remove('active')
    active++
    if (active >= count) {
        active = 0
    }
    list[active].classList.add('active')
}

prev.onclick = () => {
    list[active].classList.remove('active')
    active--
    if (active < 0) {
        active = count - 1
    }
    list[active].classList.add('active')
}




