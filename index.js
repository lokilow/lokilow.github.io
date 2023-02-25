// Draw Some Squares
const NUM_SQUARES = 755
const LARGE_SQUARE = 50
const SMALL_SQUARE = 10 
const INTERVAL = 5555

const canvas = document.querySelector("canvas")
const ctx = canvas.getContext("2d")
let timeout

const randInt = (x) => Math.trunc(Math.random() * x)
const randRGB = () => [1,2,3].map(() => randInt(255))


const clear = () => {
  const width = canvas.height
  const height = canvas.width
  ctx.clearRect(0,0,width, height)
}

const draw = () => {
  clear()
  clearTimeout(timeout)
  const width = canvas.height
  const height = canvas.width

  // Background
  const [r,g,b] = randRGB()
  ctx.fillStyle = `rgba(${r}, ${g}, ${b}, 0.09)`
  ctx.fillRect(0, 0, width, height)

  // Squares
  for (i=0;i<NUM_SQUARES;i++) {
    const x = randInt(width)
    const y = randInt(height)
    const size = (Math.random() > 0.89) ? LARGE_SQUARE : SMALL_SQUARE
    const [r,g,b] = randRGB()
    const a = randInt(10) / 10
    ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${a})`
    ctx.fillRect(x, y, size, size)
  }
  timeout = setTimeout(() => draw(), INTERVAL)
}

window.onresize = () => {draw()}
draw()
