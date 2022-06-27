const loadText = document.querySelector('.loading_text')
const bg = document.querySelector('.bg')

let data = 0;

let int = setInterval(blurring, 30)

function blurring() {
  data++

  if (data > 99) {
    clearInterval(int);
  }

  loadText.innerHTML = `{data}%`
  loadText.style.opacity = scale(data, 0, 100, 1, 0)
  bg.style.filter = `blur(${scale(data, 0, 100, 30, 0)}px)`
}

// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
}