const board = document.querySelector('#board')
const colors = ['#fcf403', '#03ecfc', '#fc03f8', '#fc6203', '#03fcc6', '#fa9d9d', '#ad0a0a', '#7f41fa']
const squaresNumber = 500

for (let i = 0; i < squaresNumber; i++) {
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover', () => setColor(square))
    square.addEventListener('mouseleave', () => removeColor(square))

    board.append(square)
}

function setColor(element) {
    const color = getRandomColor()
    element.style.backgroundColor = color
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}
function removeColor(element) {
    element.style.backgroundColor = '#1d1d1d'
    element.style.boxShadow = `0 0 2px #000`
}
function getRandomColor() {
    const index = Math.floor(Math.random() * colors.length)
    return colors[index]
}