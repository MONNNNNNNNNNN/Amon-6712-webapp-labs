import progressBar from 'progress'

const bar = new progressBar(':bar' , { total: 50 })
const timer = setInterval(() => {
  bar.tick()
  if (bar.complete) {
    clearInterval(timer)
  }
}, 100)